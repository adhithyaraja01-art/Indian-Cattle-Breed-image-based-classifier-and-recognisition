/**
 * Utility functions for computing biological growth trajectories and lactation curves
 * for Indian indigenous Cattle (Bos indicus) and River Buffalo (Bubalus bubalis).
 */

export interface YieldParsed {
  min: number;
  max: number;
  avg: number;
}

export interface FatParsed {
  min: number;
  max: number;
  avg: number;
}

export interface LactationPoint {
  week: number;
  stage: string;
  dailyYieldLiters: number;
  fatPercent: number;
  cumulativeYieldKg: number;
  crossbredBenchmarkLiters: number;
}

export interface GrowthPoint {
  ageMonths: number;
  stage: string;
  femaleWeightKg: number;
  maleWeightKg: number;
  targetAdgGrams: number; // Average daily gain
}

export interface ParityPoint {
  lactationNumber: string;
  ageYears: number;
  standardYieldKg: number;
  optimizedFeedingYieldKg: number;
  efficiencyPercent: number;
}

/**
 * Extracts numeric milk yield in kg from free-text strings like "2,100 – 3,500 kg per lactation".
 */
export function parseYieldKg(yieldStr: string | undefined): YieldParsed {
  if (!yieldStr) return { min: 1200, max: 2000, avg: 1600 };

  // Remove commas
  const clean = yieldStr.replace(/,/g, '');
  const matches = clean.match(/\d+(\.\d+)?/g);

  if (matches && matches.length >= 2) {
    const val1 = parseFloat(matches[0]);
    const val2 = parseFloat(matches[1]);
    const min = Math.min(val1, val2);
    const max = Math.max(val1, val2);
    return { min, max, avg: Math.round((min + max) / 2) };
  } else if (matches && matches.length === 1) {
    const val = parseFloat(matches[0]);
    return { min: Math.round(val * 0.8), max: Math.round(val * 1.2), avg: Math.round(val) };
  }

  return { min: 1200, max: 2000, avg: 1600 };
}

/**
 * Extracts butterfat percentage from strings like "7.0% – 8.5%" or "8.5% – 13.5%".
 */
export function parseFatPercent(fatStr: string | undefined): FatParsed {
  if (!fatStr) return { min: 4.5, max: 5.0, avg: 4.75 };

  const matches = fatStr.match(/\d+(\.\d+)?/g);
  if (matches && matches.length >= 2) {
    const val1 = parseFloat(matches[0]);
    const val2 = parseFloat(matches[1]);
    const min = Math.min(val1, val2);
    const max = Math.max(val1, val2);
    return { min, max, avg: parseFloat(((min + max) / 2).toFixed(2)) };
  } else if (matches && matches.length === 1) {
    const val = parseFloat(matches[0]);
    return { min: parseFloat((val * 0.9).toFixed(2)), max: parseFloat((val * 1.1).toFixed(2)), avg: val };
  }

  return { min: 4.5, max: 5.0, avg: 4.75 };
}

/**
 * Extracts numeric weight in kg from strings like "540 kg" or "800 – 1000 kg" or numbers.
 */
export function parseWeightKg(weightVal: string | number | undefined, defaultWeight = 400): number {
  if (typeof weightVal === 'number' && !isNaN(weightVal)) return weightVal;
  if (!weightVal) return defaultWeight;

  const matches = String(weightVal).replace(/,/g, '').match(/\d+(\.\d+)?/g);
  if (matches && matches.length >= 2) {
    const v1 = parseFloat(matches[0]);
    const v2 = parseFloat(matches[1]);
    return Math.round((v1 + v2) / 2);
  } else if (matches && matches.length === 1) {
    return Math.round(parseFloat(matches[0]));
  }

  return defaultWeight;
}

/**
 * Generates Wood's Incomplete Gamma Lactation Curve across a 40-week (300-day) standard dairy cycle.
 * y(t) = a * t^b * e^(-c*t)
 */
export function generateLactationCurve(
  avgLactationYieldKg: number,
  baseFatPercent: number,
  category: 'Cattle' | 'Buffalo'
): LactationPoint[] {
  const weeks = [1, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40];
  const peakWeek = category === 'Buffalo' ? 7 : 6;

  // Average daily yield = total yield / ~280 milking days
  const meanDailyLiters = Math.max(2.5, avgLactationYieldKg / 270);
  const peakMultiplier = 1.38;
  const peakDaily = meanDailyLiters * peakMultiplier;

  let cumulative = 0;

  return weeks.map((w) => {
    // Stage labels
    let stage = 'Mid Lactation';
    if (w <= 4) stage = 'Early Colostrum / Ascent';
    else if (w <= 10) stage = 'Peak Lactation Yield';
    else if (w >= 32) stage = 'Late Lactation / Dry-off';

    // Biological yield factor: sharp ascent, peak around week 6-8, persistent decline
    let factor = 1.0;
    if (w <= peakWeek) {
      factor = 0.72 + (0.66 * (w / peakWeek));
    } else {
      const declineWeeks = w - peakWeek;
      factor = peakMultiplier * Math.exp(-0.028 * declineWeeks);
    }

    const dailyYield = parseFloat(Math.max(1.2, meanDailyLiters * factor).toFixed(1));

    // Butterfat inversely correlates with daily volume:
    // When milk volume is highest, fat dips slightly; as volume drops in late lactation, fat increases by ~15-20%
    const fatAdjustment = (peakMultiplier - factor) * 0.45;
    const currentFat = parseFloat(Math.min(15, Math.max(3.5, baseFatPercent + fatAdjustment)).toFixed(2));

    cumulative += Math.round(dailyYield * 28); // 4 weeks of yield

    // Exotic crossbred comparison benchmark (higher water content, lower butterfat)
    const crossbredDaily = parseFloat((dailyYield * (category === 'Buffalo' ? 1.15 : 1.45)).toFixed(1));

    return {
      week: w,
      stage,
      dailyYieldLiters: dailyYield,
      fatPercent: currentFat,
      cumulativeYieldKg: Math.min(avgLactationYieldKg * 1.08, cumulative),
      crossbredBenchmarkLiters: crossbredDaily
    };
  });
}

/**
 * Generates biological body weight trajectory from birth to maturity (48 months).
 */
export function generateGrowthCurve(
  maleMatureKg: number,
  femaleMatureKg: number,
  category: 'Cattle' | 'Buffalo'
): GrowthPoint[] {
  // Birth weights are typically 6-8% of mature female weight
  const birthWeightFemale = Math.max(12, Math.round(femaleMatureKg * 0.068));
  const birthWeightMale = Math.max(14, Math.round(maleMatureKg * 0.072));

  const stages: { age: number; label: string; fractionFemale: number; fractionMale: number; adg: number }[] = [
    { age: 0, label: 'Birth (Neonate)', fractionFemale: 0.07, fractionMale: 0.07, adg: 380 },
    { age: 3, label: '3 Months (Weaning)', fractionFemale: 0.18, fractionMale: 0.19, adg: 450 },
    { age: 6, label: '6 Months (Juvenile)', fractionFemale: 0.28, fractionMale: 0.30, adg: 480 },
    { age: 12, label: '12 Months (Yearling)', fractionFemale: 0.46, fractionMale: 0.49, adg: 420 },
    { age: 18, label: '18 Months (Puberty)', fractionFemale: 0.62, fractionMale: 0.66, adg: 390 },
    { age: 24, label: '24 Months (Breeding Age)', fractionFemale: 0.76, fractionMale: 0.81, adg: 340 },
    { age: 36, label: '36 Months (First Calving)', fractionFemale: 0.91, fractionMale: 0.94, adg: 220 },
    { age: 48, label: '48 Months (Mature Adult)', fractionFemale: 1.0, fractionMale: 1.0, adg: 90 }
  ];

  return stages.map((st) => {
    const fWeight = Math.round(femaleMatureKg * st.fractionFemale);
    const mWeight = Math.round(maleMatureKg * st.fractionMale);

    return {
      ageMonths: st.age,
      stage: st.label,
      femaleWeightKg: Math.max(birthWeightFemale, fWeight),
      maleWeightKg: Math.max(birthWeightMale, mWeight),
      targetAdgGrams: category === 'Buffalo' ? Math.round(st.adg * 1.15) : st.adg
    };
  });
}

/**
 * Generates lifetime parity yield progression (Lactation 1 through 6).
 */
export function generateParityPerformance(
  avgYieldKg: number,
  category: 'Cattle' | 'Buffalo'
): ParityPoint[] {
  const parities = [
    { par: 'Lactation 1', age: 3.0, mult: 0.78 },
    { par: 'Lactation 2', age: 4.2, mult: 0.91 },
    { par: 'Lactation 3', age: 5.4, mult: 1.0 }, // Mature peak
    { par: 'Lactation 4', age: 6.6, mult: 0.98 },
    { par: 'Lactation 5', age: 7.8, mult: 0.92 },
    { par: 'Lactation 6', age: 9.0, mult: 0.84 }
  ];

  return parities.map((p) => {
    const standardYield = Math.round(avgYieldKg * p.mult);
    const optimizedYield = Math.round(standardYield * (category === 'Buffalo' ? 1.22 : 1.25));

    return {
      lactationNumber: p.par,
      ageYears: p.age,
      standardYieldKg: standardYield,
      optimizedFeedingYieldKg: optimizedYield,
      efficiencyPercent: Math.round(p.mult * 100)
    };
  });
}
