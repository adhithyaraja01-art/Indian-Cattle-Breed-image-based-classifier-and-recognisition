import React, { useState } from 'react';
import { Calculator, Sun, Droplets, AlertCircle, CheckCircle2, Scale, Milk } from 'lucide-react';
import { INDIAN_BOVINE_BREEDS } from '../data/indigenousBreeds';
import { parseYieldKg, parseFatPercent, parseWeightKg } from '../utils/breedGraphLogic';

export const DailyFieldCalculator: React.FC = () => {
  const [selectedBreedId, setSelectedBreedId] = useState<string>('gir-cattle');
  const [daysInMilk, setDaysInMilk] = useState<number>(45);
  const [bodyWeightKg, setBodyWeightKg] = useState<number>(420);
  const [ambientTempC, setAmbientTempC] = useState<number>(32);
  const [relativeHumidity, setRelativeHumidity] = useState<number>(65);
  const [calcMode, setCalcMode] = useState<'feed' | 'thi'>('feed');

  // Selected breed details
  const selectedBreed = INDIAN_BOVINE_BREEDS.find(b => b.id === selectedBreedId) || INDIAN_BOVINE_BREEDS[0];
  const yieldInfo = parseYieldKg(selectedBreed.productivity.averageYield);
  const fatInfo = parseFatPercent(selectedBreed.productivity.fatPercentage);
  const isBuffalo = selectedBreed.category === 'Buffalo';

  // Wood's Incomplete Gamma Curve estimation for daily yield at specific day (t = daysInMilk / 7)
  const week = Math.max(1, Math.min(44, Math.round(daysInMilk / 7)));
  const peakWeek = isBuffalo ? 7 : 6;
  const meanDailyLiters = Math.max(2.5, yieldInfo.avg / 270);
  const peakMultiplier = 1.38;

  let lactationFactor = 1.0;
  if (week <= peakWeek) {
    lactationFactor = 0.72 + (0.66 * (week / peakWeek));
  } else {
    lactationFactor = peakMultiplier * Math.exp(-0.028 * (week - peakWeek));
  }

  const estimatedDailyYieldLiters = parseFloat((meanDailyLiters * lactationFactor).toFixed(1));
  const estimatedButterfat = parseFloat(Math.min(14, Math.max(3.8, fatInfo.avg + (peakMultiplier - lactationFactor) * 0.45)).toFixed(1));

  // ICAR Nutritional Standards for Indian Dairy Bovines:
  // Dry Matter (DM) Intake: ~2.5% of body weight for zebu cattle, 2.8-3.0% for buffaloes + 0.33 kg DM per liter milk
  const dmBase = bodyWeightKg * (isBuffalo ? 0.028 : 0.025);
  const dmProduction = estimatedDailyYieldLiters * 0.33;
  const totalDryMatterKg = parseFloat((dmBase + dmProduction).toFixed(1));

  // Balanced Feed Distribution (Roughage 2/3, Concentrate 1/3):
  // Concentrate: ~1.5 kg for maintenance + 400g (cattle) or 500g (buffalo) per liter milk
  const concentrateRequirementKg = parseFloat((1.5 + estimatedDailyYieldLiters * (isBuffalo ? 0.5 : 0.4)).toFixed(1));
  const greenFodderKg = Math.round(totalDryMatterKg * 0.45 * 4.0); // 4x factor for 20-25% DM fresh green fodder
  const dryRoughageKg = parseFloat((totalDryMatterKg * 0.35).toFixed(1)); // wheat/paddy/sorghum straw

  // Temperature Humidity Index (THI) calculation
  // Formula: THI = (1.8 * T + 32) - (0.55 - 0.0055 * RH) * (1.8 * T - 26)
  const thi = Math.round((1.8 * ambientTempC + 32) - (0.55 - 0.0055 * relativeHumidity) * (1.8 * ambientTempC - 26));

  let thiStatus = 'Comfortable';
  let thiSeverity: 'safe' | 'warning' | 'alert' = 'safe';
  let thiAdvice = 'Optimal thermal zone. Standard milking and grazing routines recommended.';

  if (thi >= 84) {
    thiStatus = 'Severe Heat Stress';
    thiSeverity = 'alert';
    thiAdvice = 'Emergency cooling required: continuous shade, active misting fans, cold drinking water, night grazing only.';
  } else if (thi >= 76) {
    thiStatus = 'Moderate Heat Stress';
    thiSeverity = 'warning';
    thiAdvice = 'Supply fresh wallowing or sprinkler showers, increase concentrate energy density, feed extra electrolytes.';
  } else if (thi >= 72) {
    thiStatus = 'Mild Thermal Load';
    thiSeverity = 'warning';
    thiAdvice = 'Ensure shaded housing, provide clean water ad-libitum, milk during early morning/evening hours.';
  }

  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs">
      {/* Header and Segmented Mode Switch */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-100">
        <div>
          <h3 className="font-serif font-bold text-base text-stone-900 flex items-center gap-2">
            <Calculator className="w-4 h-4 text-amber-700" />
            <span>Daily Herd Field Assistant</span>
          </h3>
          <p className="text-xs text-stone-500 mt-0.5">
            ICAR-grounded lactation curves, daily feed ration &amp; microclimate THI estimator
          </p>
        </div>

        {/* Mode Selector */}
        <div className="inline-flex p-1 bg-stone-100 rounded-lg text-xs font-medium">
          <button
            onClick={() => setCalcMode('feed')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              calcMode === 'feed'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Lactation &amp; Feed
          </button>
          <button
            onClick={() => setCalcMode('thi')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              calcMode === 'thi'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Heat Stress (THI)
          </button>
        </div>
      </div>

      {calcMode === 'feed' ? (
        <div className="mt-4 space-y-4">
          {/* Inputs Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-medium text-stone-600 mb-1">
                Select Indigenous Breed
              </label>
              <select
                value={selectedBreedId}
                onChange={(e) => {
                  setSelectedBreedId(e.target.value);
                  const b = INDIAN_BOVINE_BREEDS.find(item => item.id === e.target.value);
                  if (b) {
                    setBodyWeightKg(parseWeightKg(b.productivity.weightFemaleKg, 400));
                  }
                }}
                className="w-full text-xs bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-2 text-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                {INDIAN_BOVINE_BREEDS.slice(0, 25).map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name} ({b.category} · {b.stateOfOrigin.split(' ')[0]})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-stone-600 mb-1 flex items-center justify-between">
                <span>Days in Milk (DIM)</span>
                <span className="font-mono tabular-nums text-amber-800 font-bold">{daysInMilk}d (Wk {week})</span>
              </label>
              <input
                type="range"
                min="5"
                max="300"
                step="5"
                value={daysInMilk}
                onChange={(e) => setDaysInMilk(parseInt(e.target.value, 10))}
                className="w-full accent-amber-600"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-stone-600 mb-1 flex items-center justify-between">
                <span>Animal Body Weight</span>
                <span className="font-mono tabular-nums text-amber-800 font-bold">{bodyWeightKg} kg</span>
              </label>
              <input
                type="range"
                min="120"
                max="750"
                step="10"
                value={bodyWeightKg}
                onChange={(e) => setBodyWeightKg(parseInt(e.target.value, 10))}
                className="w-full accent-amber-600"
              />
            </div>
          </div>

          {/* Daily Output Metrics Card Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 bg-stone-50 rounded-xl border border-stone-200/80">
            <div>
              <span className="text-[11px] text-stone-500 block">Est. Daily Yield</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="font-serif text-xl font-bold text-amber-900 font-mono tabular-nums">
                  {estimatedDailyYieldLiters}
                </span>
                <span className="text-xs text-stone-600 font-medium">L/day</span>
              </div>
              <span className="text-[10px] text-stone-400 mt-0.5 block">
                {week <= 8 ? 'Ascending to peak' : week >= 32 ? 'Late dry-off' : 'Mid persistent'}
              </span>
            </div>

            <div>
              <span className="text-[11px] text-stone-500 block">Current Butterfat</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="font-serif text-xl font-bold text-amber-900 font-mono tabular-nums">
                  {estimatedButterfat}
                </span>
                <span className="text-xs text-stone-600 font-medium">%</span>
              </div>
              <span className="text-[10px] text-stone-400 mt-0.5 block">
                {selectedBreed.genomics.csn2Allele}
              </span>
            </div>

            <div>
              <span className="text-[11px] text-stone-500 block">Daily Concentrate</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="font-serif text-xl font-bold text-stone-900 font-mono tabular-nums">
                  {concentrateRequirementKg}
                </span>
                <span className="text-xs text-stone-600 font-medium">kg/day</span>
              </div>
              <span className="text-[10px] text-stone-400 mt-0.5 block">
                Mustard/cotton cake
              </span>
            </div>

            <div>
              <span className="text-[11px] text-stone-500 block">Fresh Green Fodder</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="font-serif text-xl font-bold text-emerald-800 font-mono tabular-nums">
                  {greenFodderKg}
                </span>
                <span className="text-xs text-stone-600 font-medium">kg/day</span>
              </div>
              <span className="text-[10px] text-stone-400 mt-0.5 block">
                + {dryRoughageKg}kg dry straw
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* THI Microclimate Module */
        <div className="mt-4 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-medium text-stone-600 mb-1 flex items-center justify-between">
                <span>Ambient Air Temperature (°C)</span>
                <span className="font-mono tabular-nums text-amber-800 font-bold">{ambientTempC}°C</span>
              </label>
              <input
                type="range"
                min="20"
                max="48"
                step="1"
                value={ambientTempC}
                onChange={(e) => setAmbientTempC(parseInt(e.target.value, 10))}
                className="w-full accent-amber-600"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-stone-600 mb-1 flex items-center justify-between">
                <span>Relative Humidity (RH %)</span>
                <span className="font-mono tabular-nums text-amber-800 font-bold">{relativeHumidity}%</span>
              </label>
              <input
                type="range"
                min="20"
                max="95"
                step="5"
                value={relativeHumidity}
                onChange={(e) => setRelativeHumidity(parseInt(e.target.value, 10))}
                className="w-full accent-amber-600"
              />
            </div>
          </div>

          <div className={`p-4 rounded-xl border ${
            thiSeverity === 'safe'
              ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
              : thiSeverity === 'warning'
              ? 'bg-amber-50/70 border-amber-200 text-amber-950'
              : 'bg-rose-50/70 border-rose-200 text-rose-950'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Sun className={`w-4 h-4 ${
                  thiSeverity === 'safe' ? 'text-emerald-700' : thiSeverity === 'warning' ? 'text-amber-700' : 'text-rose-700'
                }`} />
                <span className="font-bold text-sm">THI Score: {thi}</span>
                <span className="text-xs font-semibold">· {thiStatus}</span>
              </div>
              <span className="text-[11px] text-stone-600 font-mono">
                {selectedBreed.name} ({selectedBreed.category})
              </span>
            </div>
            <p className="text-xs leading-relaxed text-stone-700">
              {thiAdvice}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
