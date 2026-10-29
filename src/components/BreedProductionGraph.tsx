import React, { useState, useMemo } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine
} from 'recharts';
import { ClassificationResult } from '../types/breed';
import {
  parseYieldKg,
  parseFatPercent,
  parseWeightKg,
  generateLactationCurve,
  generateGrowthCurve,
  generateParityPerformance,
  LactationPoint,
  GrowthPoint,
  ParityPoint
} from '../utils/breedGraphLogic';
import {
  TrendingUp,
  Activity,
  Milk,
  Scale,
  Award,
  Sparkles,
  Info,
  ChevronRight,
  Flame,
  CheckCircle2,
  Calendar
} from 'lucide-react';

interface BreedProductionGraphProps {
  result: ClassificationResult;
  compact?: boolean;
}

export const BreedProductionGraph: React.FC<BreedProductionGraphProps> = ({
  result,
  compact = false
}) => {
  const [activeMetricTab, setActiveMetricTab] = useState<'lactation' | 'growth' | 'parity'>('lactation');

  // Compute parsed biological parameters
  const yieldParsed = useMemo(() => parseYieldKg(result.productivity.averageYield), [result.productivity.averageYield]);
  const fatParsed = useMemo(() => parseFatPercent(result.productivity.fatPercentage), [result.productivity.fatPercentage]);
  const maleWeight = useMemo(() => parseWeightKg(result.productivity.weightMaleKg, 480), [result.productivity.weightMaleKg]);
  const femaleWeight = useMemo(() => parseWeightKg(result.productivity.weightFemaleKg, 350), [result.productivity.weightFemaleKg]);

  const lactationData = useMemo<LactationPoint[]>(() => {
    return generateLactationCurve(yieldParsed.avg, fatParsed.avg, result.category);
  }, [yieldParsed.avg, fatParsed.avg, result.category]);

  const growthData = useMemo<GrowthPoint[]>(() => {
    return generateGrowthCurve(maleWeight, femaleWeight, result.category);
  }, [maleWeight, femaleWeight, result.category]);

  const parityData = useMemo<ParityPoint[]>(() => {
    return generateParityPerformance(yieldParsed.avg, result.category);
  }, [yieldParsed.avg, result.category]);

  // Derived peak indicators
  const peakLactationPoint = useMemo(() => {
    return lactationData.reduce((prev, curr) => (curr.dailyYieldLiters > prev.dailyYieldLiters ? curr : prev), lactationData[0]);
  }, [lactationData]);

  return (
    <div className="bg-stone-50 border border-stone-200/90 rounded-2xl p-5 sm:p-6 space-y-6 shadow-xs">
      {/* Header section with biological summary */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100/90 text-amber-900 text-[11px] font-bold uppercase tracking-wider mb-1.5 border border-amber-200">
            <TrendingUp className="w-3.5 h-3.5 text-amber-700" />
            Biological Growth &amp; Milk Production Potential Model
          </div>
          <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900">
            {result.predictedBreed} Performance Dynamics
          </h3>
          <p className="text-stone-500 text-xs sm:text-sm">
            Calibrated against ICAR-NBAGR accession standards for {result.category === 'Cattle' ? 'Bos indicus (Zebu Cattle)' : 'Bubalus bubalis (River Buffalo)'}.
          </p>
        </div>

        {/* Tab switch pills */}
        <div className="flex items-center gap-1.5 bg-stone-200/70 p-1 rounded-xl self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setActiveMetricTab('lactation')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeMetricTab === 'lactation'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Milk className="w-3.5 h-3.5 text-amber-600" />
            <span>Lactation Curve</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveMetricTab('growth')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeMetricTab === 'growth'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Scale className="w-3.5 h-3.5 text-emerald-600" />
            <span>Body Weight</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveMetricTab('parity')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeMetricTab === 'parity'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Calendar className="w-3.5 h-3.5 text-blue-600" />
            <span>Parity Trajectory</span>
          </button>
        </div>
      </div>

      {/* KPI highlight cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white p-3.5 rounded-xl border border-stone-200/80 shadow-2xs">
          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
            Peak Daily Milk
          </span>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="text-xl sm:text-2xl font-extrabold text-amber-700">
              {peakLactationPoint.dailyYieldLiters}
            </span>
            <span className="text-xs text-stone-500 font-medium">L/day</span>
          </div>
          <span className="text-[10px] text-stone-500 block truncate mt-0.5">
            At Week {peakLactationPoint.week} post-calving
          </span>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-stone-200/80 shadow-2xs">
          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
            Natural Butterfat
          </span>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="text-xl sm:text-2xl font-extrabold text-orange-700">
              {fatParsed.avg}%
            </span>
            <span className="text-xs text-stone-500 font-medium font-mono">A2/A2</span>
          </div>
          <span className="text-[10px] text-stone-500 block truncate mt-0.5">
            Range: {fatParsed.min}% - {fatParsed.max}%
          </span>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-stone-200/80 shadow-2xs">
          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
            Adult Female Weight
          </span>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="text-xl sm:text-2xl font-extrabold text-emerald-700">
              {femaleWeight}
            </span>
            <span className="text-xs text-stone-500 font-medium">kg</span>
          </div>
          <span className="text-[10px] text-stone-500 block truncate mt-0.5">
            Bull: {maleWeight} kg mature
          </span>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-stone-200/80 shadow-2xs">
          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
            Lactation Yield
          </span>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="text-xl sm:text-2xl font-extrabold text-blue-700">
              {yieldParsed.avg.toLocaleString()}
            </span>
            <span className="text-xs text-stone-500 font-medium">kg</span>
          </div>
          <span className="text-[10px] text-stone-500 block truncate mt-0.5">
            Utility: {result.productivity.primaryUtility.split(' ')[0]}
          </span>
        </div>
      </div>

      {/* GRAPH CONTAINER */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-stone-200 shadow-2xs">
        {/* VIEW 1: Lactation Curve */}
        {activeMetricTab === 'lactation' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-stone-600 gap-2">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5 font-semibold text-amber-700">
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                  Daily Milk Yield (L/day)
                </span>
                <span className="inline-flex items-center gap-1.5 font-semibold text-orange-600">
                  <span className="w-3 h-0.5 bg-orange-500 inline-block" />
                  Butterfat Content (%)
                </span>
              </div>
              <span className="text-stone-400 text-[11px]">
                Wood's Lactation Model: Peak at Week 6-8 post-calving
              </span>
            </div>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={lactationData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="milkGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#d97706" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#d97706" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0ece1" vertical={false} />
                  <XAxis
                    dataKey="week"
                    tickFormatter={(val) => `Wk ${val}`}
                    tick={{ fontSize: 11, fill: '#78716c' }}
                    stroke="#d6d3d1"
                  />
                  {/* Left Y-axis: Daily Liters */}
                  <YAxis
                    yAxisId="left"
                    tick={{ fontSize: 11, fill: '#78716c' }}
                    stroke="#d6d3d1"
                    domain={[0, 'dataMax + 4']}
                    unit="L"
                  />
                  {/* Right Y-axis: Fat % */}
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    tick={{ fontSize: 11, fill: '#ea580c' }}
                    stroke="#ea580c"
                    domain={[0, 16]}
                    unit="%"
                  />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (!active || !payload || !payload.length) return null;
                      const data = payload[0].payload as LactationPoint;
                      return (
                        <div className="bg-stone-900 text-white p-3 rounded-xl shadow-xl text-xs space-y-1.5 border border-stone-700">
                          <div className="font-bold text-amber-300 border-b border-stone-700 pb-1">
                            Lactation Week {label} ({data.stage})
                          </div>
                          <div className="flex justify-between gap-4 text-stone-200">
                            <span>Daily Milk Yield:</span>
                            <span className="font-mono font-bold text-amber-400">{data.dailyYieldLiters} Liters/day</span>
                          </div>
                          <div className="flex justify-between gap-4 text-stone-200">
                            <span>Butterfat Content:</span>
                            <span className="font-mono font-bold text-orange-400">{data.fatPercent}% (A2/A2)</span>
                          </div>
                          <div className="flex justify-between gap-4 text-stone-300 border-t border-stone-800 pt-1 text-[11px]">
                            <span>Cumulative Total:</span>
                            <span className="font-mono">{data.cumulativeYieldKg.toLocaleString()} kg</span>
                          </div>
                        </div>
                      );
                    }}
                  />
                  <ReferenceLine
                    yAxisId="left"
                    x={peakLactationPoint.week}
                    stroke="#b45309"
                    strokeDasharray="4 4"
                    label={{ value: 'Peak Week', fill: '#b45309', fontSize: 10, position: 'top' }}
                  />
                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="dailyYieldLiters"
                    name="Daily Milk (L)"
                    stroke="#b45309"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#milkGradient)"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="fatPercent"
                    name="Butterfat (%)"
                    stroke="#ea580c"
                    strokeWidth={2}
                    dot={{ r: 3, fill: '#ea580c' }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 flex items-start gap-2.5 text-xs text-amber-950">
              <Info className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
              <div>
                <strong>Physiological Persistency: </strong>
                Indigenous {result.predictedBreed} exhibits steady persistency through week 24, with butterfat increasing towards late lactation as daily volume tapers to dry-off. Natural A2 beta-casein allele ensures optimal protein bio-availability.
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: Body Weight Growth Curve */}
        {activeMetricTab === 'growth' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-stone-600 gap-2">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-700">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                  Female Body Weight (kg)
                </span>
                <span className="inline-flex items-center gap-1.5 font-semibold text-blue-700">
                  <span className="w-3 h-3 rounded-full bg-blue-500 inline-block" />
                  Bull / Sire Weight (kg)
                </span>
              </div>
              <span className="text-stone-400 text-[11px]">
                Target ADG (Average Daily Gain): ~380–480 g/day
              </span>
            </div>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growthData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0ece1" vertical={false} />
                  <XAxis
                    dataKey="ageMonths"
                    tickFormatter={(val) => `${val}m`}
                    tick={{ fontSize: 11, fill: '#78716c' }}
                    stroke="#d6d3d1"
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: '#78716c' }}
                    stroke="#d6d3d1"
                    unit="kg"
                    domain={[0, 'dataMax + 50']}
                  />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (!active || !payload || !payload.length) return null;
                      const data = payload[0].payload as GrowthPoint;
                      return (
                        <div className="bg-stone-900 text-white p-3 rounded-xl shadow-xl text-xs space-y-1.5 border border-stone-700">
                          <div className="font-bold text-emerald-300 border-b border-stone-700 pb-1">
                            Age: {label} Months ({data.stage})
                          </div>
                          <div className="flex justify-between gap-4 text-stone-200">
                            <span>Female Live Weight:</span>
                            <span className="font-mono font-bold text-emerald-400">{data.femaleWeightKg} kg</span>
                          </div>
                          <div className="flex justify-between gap-4 text-stone-200">
                            <span>Male Live Weight:</span>
                            <span className="font-mono font-bold text-blue-400">{data.maleWeightKg} kg</span>
                          </div>
                          <div className="flex justify-between gap-4 text-stone-300 border-t border-stone-800 pt-1 text-[11px]">
                            <span>Growth Gain Rate:</span>
                            <span className="font-mono text-amber-300">~{data.targetAdgGrams} g/day ADG</span>
                          </div>
                        </div>
                      );
                    }}
                  />
                  <ReferenceLine
                    x={24}
                    stroke="#10b981"
                    strokeDasharray="4 4"
                    label={{ value: 'Puberty / 24m', fill: '#059669', fontSize: 10, position: 'top' }}
                  />
                  <ReferenceLine
                    x={36}
                    stroke="#64748b"
                    strokeDasharray="4 4"
                    label={{ value: '1st Calving / 36m', fill: '#475569', fontSize: 10, position: 'top' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="femaleWeightKg"
                    name="Female (kg)"
                    stroke="#059669"
                    strokeWidth={2.5}
                    dot={{ r: 4, fill: '#059669' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="maleWeightKg"
                    name="Male (kg)"
                    stroke="#2563eb"
                    strokeWidth={2.5}
                    dot={{ r: 4, fill: '#2563eb' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-3 flex items-start gap-2.5 text-xs text-emerald-950">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
              <div>
                <strong>Development Milestones: </strong>
                {result.predictedBreed} reaches breeding maturity around 22–26 months, achieving peak mature skeletal build by 48 months with sturdy black hooves resistant to laminitis.
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: Parity Trajectory */}
        {activeMetricTab === 'parity' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-stone-600 gap-2">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5 font-semibold text-stone-800">
                  <span className="w-3 h-3 rounded-sm bg-stone-700 inline-block" />
                  Pasture Management Yield (kg)
                </span>
                <span className="inline-flex items-center gap-1.5 font-semibold text-amber-700">
                  <span className="w-3 h-3 rounded-sm bg-amber-500 inline-block" />
                  Scientific Ration Potential (kg)
                </span>
              </div>
              <span className="text-stone-400 text-[11px]">
                Peak biological lifetime yield occurs at 3rd lactation
              </span>
            </div>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={parityData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0ece1" vertical={false} />
                  <XAxis
                    dataKey="lactationNumber"
                    tick={{ fontSize: 11, fill: '#78716c' }}
                    stroke="#d6d3d1"
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: '#78716c' }}
                    stroke="#d6d3d1"
                    unit="kg"
                    domain={[0, 'dataMax + 400']}
                  />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (!active || !payload || !payload.length) return null;
                      const data = payload[0].payload as ParityPoint;
                      return (
                        <div className="bg-stone-900 text-white p-3 rounded-xl shadow-xl text-xs space-y-1.5 border border-stone-700">
                          <div className="font-bold text-amber-300 border-b border-stone-700 pb-1">
                            {label} (Approx. {data.ageYears} Years Age)
                          </div>
                          <div className="flex justify-between gap-4 text-stone-200">
                            <span>Standard Grazing:</span>
                            <span className="font-mono font-bold text-stone-300">{data.standardYieldKg.toLocaleString()} kg</span>
                          </div>
                          <div className="flex justify-between gap-4 text-stone-200">
                            <span>Scientific TMR Ration:</span>
                            <span className="font-mono font-bold text-amber-400">{data.optimizedFeedingYieldKg.toLocaleString()} kg</span>
                          </div>
                          <div className="flex justify-between gap-4 text-stone-400 border-t border-stone-800 pt-1 text-[11px]">
                            <span>Lactation Efficiency:</span>
                            <span className="font-mono text-emerald-400">{data.efficiencyPercent}% of mature peak</span>
                          </div>
                        </div>
                      );
                    }}
                  />
                  <Bar
                    dataKey="standardYieldKg"
                    name="Standard Pasture"
                    fill="#57534e"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="optimizedFeedingYieldKg"
                    name="Optimized Feeding"
                    fill="#f59e0b"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-blue-50/70 border border-blue-200/80 rounded-xl p-3 flex items-start gap-2.5 text-xs text-blue-950">
              <Sparkles className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
              <div>
                <strong>Lactation Longevity &amp; Lifetime Output: </strong>
                Unlike high-stress exotic breeds that drop production after 2–3 lactations, indigenous Indian breeds sustain high reproductive fertility and productive milk output through 6+ calving cycles under tropical heat conditions.
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Feeding and Management Advice Strip */}
      <div className="bg-white border border-stone-200/80 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-stone-800">
          <Award className="w-4 h-4 text-amber-600 flex-shrink-0" />
          <span>
            <strong>Recommended Academic Lab Observation: </strong>
            Document stage-wise dry matter intake (DMI: ~2.5–3.0% body weight) and mineral block supplementation for optimal lactation persistency.
          </span>
        </div>
      </div>
    </div>
  );
};
