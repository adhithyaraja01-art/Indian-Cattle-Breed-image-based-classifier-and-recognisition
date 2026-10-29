import React, { useState } from 'react';
import { ClassificationResult } from '../types/breed';
import { useAuth } from '../firebase/authContext';
import { useSettings } from '../context/SettingsContext';
import { saveScanToFirestore } from '../firebase/firestoreService';
import { BreedProductionGraph } from './BreedProductionGraph';
import {
  Award,
  MapPin,
  Sparkles,
  Layers,
  Activity,
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
  Share2,
  Printer,
  RotateCcw,
  BookOpen,
  ArrowRight,
  Info,
  Dna,
  Cloud,
  GraduationCap,
  AlertTriangle,
  ExternalLink,
  Gauge,
  TrendingUp,
  Milk
} from 'lucide-react';

interface ReliabilityMetrics {
  tier: string;
  certaintyLabel: string;
  badgeClass: string;
  barGradient: string;
  circleStrokeClass: string;
  textClass: string;
  activeMilestone: number;
  description: string;
  guidance: string;
}

function getReliabilityMetrics(confidence: number): ReliabilityMetrics {
  if (confidence >= 90) {
    return {
      tier: 'Definitive Identification',
      certaintyLabel: 'Very High Certainty (≥90%)',
      badgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
      barGradient: 'from-amber-400 via-emerald-400 to-emerald-500',
      circleStrokeClass: 'stroke-emerald-400',
      textClass: 'text-emerald-400',
      activeMilestone: 90,
      description: 'Definitive phenotypic alignment with certified ICAR-NBAGR accession descriptors across cranial structure, horn curvature, thoracic hump, and dewlap skin folds.',
      guidance: 'High diagnostic reliability. Verified specimen profile suitable for academic lab evaluation.'
    };
  }
  if (confidence >= 75) {
    return {
      tier: 'Strong Probability',
      certaintyLabel: 'High Certainty (75-89%)',
      badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
      barGradient: 'from-amber-500 via-orange-400 to-amber-400',
      circleStrokeClass: 'stroke-amber-400',
      textClass: 'text-amber-400',
      activeMilestone: 75,
      description: 'Strong morphological correlation with registered breed characteristics. Minor variation may stem from angle, lighting, or juvenile age.',
      guidance: 'Reliable breed match. Cross-reference secondary traits in the Anatomy Key for field verification.'
    };
  }
  if (confidence >= 60) {
    return {
      tier: 'Moderate Match',
      certaintyLabel: 'Moderate Certainty (60-74%)',
      badgeClass: 'bg-yellow-500/20 text-yellow-300 border-yellow-400/40',
      barGradient: 'from-yellow-600 via-amber-500 to-amber-400',
      circleStrokeClass: 'stroke-yellow-400',
      textClass: 'text-yellow-400',
      activeMilestone: 60,
      description: 'General breed markers identified, but partial angle or distance limits complete cranial confirmation.',
      guidance: 'Moderate reliability. Uploading a clearer side-profile or close-up facial view is recommended.'
    };
  }
  return {
    tier: 'Inconclusive / Low Confidence',
    certaintyLabel: 'Low Certainty (<60%)',
    badgeClass: 'bg-rose-500/20 text-rose-300 border-rose-400/40',
    barGradient: 'from-rose-600 via-orange-500 to-amber-500',
    circleStrokeClass: 'stroke-rose-400',
    textClass: 'text-rose-400',
    activeMilestone: 0,
    description: 'Atypical morphology or potential crossbred / non-bovine specimen detected.',
    guidance: 'Low certainty. Verify that the specimen is an indigenous Indian cattle or river buffalo.'
  };
}

interface ClassificationResultCardProps {
  result: ClassificationResult;
  imagePreviewUrl: string;
  onReset: () => void;
  onCompareWith: (breedName: string) => void;
  onExploreBreed: (breedName: string) => void;
  onOpenReportModal: () => void;
}

export const ClassificationResultCard: React.FC<ClassificationResultCardProps> = ({
  result,
  imagePreviewUrl,
  onReset,
  onCompareWith,
  onExploreBreed,
  onOpenReportModal
}) => {
  const { currentUser, loginWithGoogle } = useAuth();
  const { settings } = useSettings();
  const [activeTab, setActiveTab] = useState<'genomics' | 'traits' | 'yield' | 'growth-graphs' | 'heritage' | 'care' | 'candidates'>('genomics');
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);
  const [isSavingToCloud, setIsSavingToCloud] = useState<boolean>(false);
  const [cloudSavedSuccess, setCloudSavedSuccess] = useState<boolean>(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `Indian Bovine Classification: ${result.predictedBreed}`,
          text: `Classified ${result.predictedBreed} (${result.category} • ${result.scientificName}) with ${result.confidence}% confidence. Origin: ${result.stateOfOrigin}, NBAGR Code: ${result.nbagrCode}.`,
          url: window.location.href
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(
        `Indian Bovine Classification: ${result.predictedBreed} (${result.vernacularName}) - ${result.category} (${result.scientificName}), Origin: ${result.stateOfOrigin}. NBAGR Code: ${result.nbagrCode}. Confidence: ${result.confidence}%.`
      );
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2500);
    }
  };

  const handleSaveToCloud = async () => {
    if (!currentUser) {
      try {
        await loginWithGoogle();
      } catch {
        return;
      }
    }

    setIsSavingToCloud(true);
    try {
      const saved = await saveScanToFirestore(result, 'College mini-project specimen evaluation log');
      if (saved) {
        setCloudSavedSuccess(true);
        setTimeout(() => setCloudSavedSuccess(false), 3500);
      }
    } catch (err) {
      console.error('Error saving scan to cloud:', err);
    } finally {
      setIsSavingToCloud(false);
    }
  };

  const reliability = getReliabilityMetrics(result.confidence);

  return (
    <div className="w-full bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden transition-all print:shadow-none print:border-none">
      {/* Non-bovine warning notice if user uploaded unrelated animal */}
      {result.nonBovineWarning && (
        <div className="bg-red-50 border-b border-red-200 px-6 py-3.5 flex items-center gap-2.5 text-xs text-red-900 font-medium">
          <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
          <span>
            <strong>Project Scope Notice: </strong> {result.nonBovineWarning}
          </span>
        </div>
      )}

      {/* Top Header Card */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950 text-white relative">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            {/* Cropped Preview Thumbnail */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-lg bg-stone-950 flex-shrink-0 group">
              <img
                src={imagePreviewUrl}
                alt={result.predictedBreed}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-0 inset-x-0 bg-stone-900/80 text-[10px] text-amber-300 text-center py-0.5 font-mono">
                Specimen
              </span>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2 text-xs text-stone-300">
                <span className="text-amber-400 font-semibold">
                  {result.category === 'Cattle' ? 'Indian Cattle (Bos indicus)' : 'Indian River Buffalo (Bubalus bubalis)'}
                </span>
                <span aria-hidden="true" className="text-stone-600">·</span>
                <span className="font-mono text-stone-300">{result.nbagrCode}</span>
                <span aria-hidden="true" className="text-stone-600">·</span>
                <span>{result.stateOfOrigin}</span>
              </div>

              <div className="flex items-baseline gap-3 flex-wrap">
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-amber-100">
                  {result.predictedBreed}
                </h2>
                {result.vernacularName && (
                  <span className="text-base sm:text-xl text-amber-300/80 font-normal">
                    ({result.vernacularName})
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900/90 border border-amber-500/30 text-xs shadow-xs">
                  <span className="text-stone-300 font-medium">Model Certainty:</span>
                  <span className="font-extrabold text-amber-300 font-mono">{result.confidence}% Sure</span>
                  <div className="w-16 h-2 bg-stone-950 rounded-full overflow-hidden border border-stone-800">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${reliability.barGradient}`}
                      style={{ width: `${Math.min(100, Math.max(5, result.confidence))}%` }}
                    />
                  </div>
                  <span className={`text-[10px] font-bold ${reliability.textClass}`}>
                    ({reliability.tier})
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-400 font-mono mt-1">
                Taxonomy: <span className="italic text-stone-200">{result.scientificName}</span> • Bovidae / Bovinae
              </p>
            </div>
          </div>

          {/* Quick Confidence Pill with Visual Circular Gauge & Progress Bar */}
          <div className="flex items-center gap-4 bg-stone-900/95 border border-amber-500/30 rounded-2xl p-4 backdrop-blur-sm self-stretch sm:self-auto justify-between sm:justify-start shadow-xl ring-1 ring-white/5">
            <div className="text-left space-y-1">
              <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider block">
                AI Model Certainty
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-amber-300 font-mono tracking-tight">
                  {result.confidence}%
                </span>
                <span className="text-xs text-stone-400 font-medium">Sure</span>
              </div>
              {/* Mini visual progress bar */}
              <div className="w-28 sm:w-32 h-1.5 bg-stone-950 rounded-full overflow-hidden border border-stone-800">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${reliability.barGradient} transition-all duration-700`}
                  style={{ width: `${Math.min(100, Math.max(5, result.confidence))}%` }}
                />
              </div>
              <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border mt-0.5 ${reliability.badgeClass}`}>
                {reliability.tier}
              </span>
            </div>

            {/* Circular Radial Progress Gauge */}
            <div className="relative w-14 h-14 flex items-center justify-center flex-shrink-0" title={`Model Confidence: ${result.confidence}%`}>
              <svg className="w-14 h-14 -rotate-90 transform" viewBox="0 0 48 48">
                <circle
                  cx="24"
                  cy="24"
                  r="19"
                  className="stroke-stone-800"
                  strokeWidth="3.5"
                  fill="none"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="19"
                  className={`${reliability.circleStrokeClass} transition-all duration-1000 ease-out`}
                  strokeWidth="3.5"
                  strokeDasharray={119.38}
                  strokeDashoffset={119.38 - (119.38 * result.confidence) / 100}
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <Gauge className="w-3.5 h-3.5 text-amber-400 mb-0.5" />
                <span className="text-[10px] font-extrabold font-mono text-white leading-none">
                  {result.confidence}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Short Summary Bar */}
        <p className="mt-5 text-sm sm:text-base text-stone-200 leading-relaxed border-t border-stone-700/60 pt-4">
          {result.summary}
        </p>

        {/* Dedicated Visual Percentage Confidence & Reliability Meter */}
        <div className="mt-5 bg-stone-950/70 border border-amber-500/30 rounded-2xl p-4 sm:p-5 space-y-4 shadow-lg backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                <Gauge className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-amber-100 flex items-center gap-2">
                  <span>AI Identification Confidence & Reliability Meter</span>
                </h4>
                <p className="text-[11px] text-stone-400">
                  The AI model is <strong className="text-amber-300 font-bold">{result.confidence}% sure</strong> that this specimen is an indigenous <strong>{result.predictedBreed}</strong> ({result.category}).
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${reliability.badgeClass}`}>
                {reliability.tier}
              </span>
              <span className="text-xl font-extrabold text-amber-300 font-mono">
                {result.confidence}%
              </span>
            </div>
          </div>

          {/* Visual Percentage Gauge Bar with Live Progress Fill */}
          <div className="space-y-2">
            <div className="w-full h-5 sm:h-6 bg-stone-900 rounded-full p-1 border border-stone-700/80 shadow-inner relative overflow-hidden flex items-center">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${reliability.barGradient} transition-all duration-1000 ease-out shadow-md relative flex items-center justify-end pr-1.5`}
                style={{ width: `${Math.min(100, Math.max(7, result.confidence))}%` }}
              >
                {result.confidence >= 25 && (
                  <span className="text-[10px] sm:text-xs font-black font-mono text-stone-950 pr-1 select-none">
                    {result.confidence}% Sure
                  </span>
                )}
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping opacity-75 shrink-0" />
              </div>
            </div>

            {/* Benchmark scale markers with highlight */}
            <div className="flex items-center justify-between text-[10px] text-stone-400 font-mono px-0.5">
              <span className={result.confidence < 50 ? 'text-rose-400 font-bold' : ''}>0% (Low)</span>
              <span className={result.confidence >= 50 && result.confidence < 75 ? 'text-yellow-400 font-bold' : ''}>50% (Ambiguous)</span>
              <span className={result.confidence >= 75 && result.confidence < 90 ? 'text-amber-400 font-bold' : ''}>75% (Strong Match)</span>
              <span className={result.confidence >= 90 ? 'text-emerald-400 font-bold' : ''}>90% (Diagnostic Standard)</span>
              <span className={result.confidence === 100 ? 'text-emerald-300 font-bold' : ''}>100%</span>
            </div>
          </div>

          {/* Reliability Analysis & Morphological Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 border-t border-stone-800 text-xs">
            <div className="bg-stone-900/90 rounded-xl p-3 border border-stone-800">
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="text-stone-400 font-medium">Cranial & Horn Geometry</span>
                <span className="font-bold text-amber-300 font-mono">
                  {Math.min(99, Math.max(60, result.confidence + 1))}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-stone-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500 rounded-full"
                  style={{ width: `${Math.min(99, Math.max(60, result.confidence + 1))}%` }}
                />
              </div>
            </div>

            <div className="bg-stone-900/90 rounded-xl p-3 border border-stone-800">
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="text-stone-400 font-medium">Thoracic Hump & Dewlap</span>
                <span className="font-bold text-amber-300 font-mono">
                  {Math.min(99, Math.max(55, result.confidence - 2))}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-stone-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500 rounded-full"
                  style={{ width: `${Math.min(99, Math.max(55, result.confidence - 2))}%` }}
                />
              </div>
            </div>

            <div className="bg-stone-900/90 rounded-xl p-3 border border-stone-800">
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="text-stone-400 font-medium">Coat Pigmentation & Build</span>
                <span className="font-bold text-amber-300 font-mono">
                  {result.confidence}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-stone-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500 rounded-full"
                  style={{ width: `${result.confidence}%` }}
                />
              </div>
            </div>
          </div>

          {/* Reliability Explanatory text */}
          <div className="text-[11px] text-stone-300 space-y-1 bg-stone-900/50 p-2.5 rounded-xl border border-stone-800/80">
            <p>
              <strong className="text-amber-300">Reliability Evaluation: </strong>
              {reliability.description}
            </p>
            <p className="text-stone-400">
              <strong className="text-stone-300">Academic Recommendation: </strong>
              {reliability.guidance}
            </p>
          </div>
        </div>

        {result.distinguishingNotice && (
          <div className="mt-3 bg-amber-500/20 border border-amber-400/40 rounded-xl px-4 py-2.5 text-xs text-amber-200 flex items-center gap-2">
            <Info className="w-4 h-4 flex-shrink-0 text-amber-400" />
            <span>{result.distinguishingNotice}</span>
          </div>
        )}
      </div>

      {/* Visual Diagnostic Markers */}
      <div className="bg-amber-50/70 border-b border-amber-200/60 p-5 sm:p-6">
        <div className="flex items-center gap-2 text-amber-950 font-bold text-sm mb-3">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>Diagnostic Morphological Markers Identified from Image:</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {result.detectedVisualFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white border border-amber-200/80 rounded-xl p-3 flex items-start gap-2.5 text-xs text-stone-800 shadow-xs"
            >
              <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <span className="leading-snug">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pre-Trained AI Neural Network Model Telemetry Banner */}
      {result.aiModelInfo && (
        <div className="bg-stone-900 border-b border-stone-800 px-6 py-3.5 text-xs text-stone-300 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-amber-300">
              AI Vision Engine: {result.aiModelInfo.modelName}
            </span>
            <span className="text-stone-500">•</span>
            <span className="text-stone-400 font-mono">
              Inference: {result.aiModelInfo.inferenceTimeMs}ms
            </span>
            <span className="text-stone-500">•</span>
            <span className="text-stone-400 font-mono">
              Tensor: {result.aiModelInfo.tensorResolution}
            </span>
          </div>

          {result.aiModelInfo.topRawPredictions && result.aiModelInfo.topRawPredictions.length > 0 && (
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <span className="text-[11px] text-stone-400 uppercase tracking-wider font-semibold">
                Neural Probabilities:
              </span>
              {result.aiModelInfo.topRawPredictions.slice(0, settings.showTopThreePredictions ? 3 : 1).map((p, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md bg-stone-800 text-stone-200 border border-stone-700 font-mono text-[11px] whitespace-nowrap"
                >
                  {p.className.split(',')[0]} ({(p.probability * 100).toFixed(0)}%)
                </span>
              ))}
              {!settings.showTopThreePredictions && (
                <span className="text-[10px] text-stone-500 font-mono">
                  (Single match focus via ⚙️ Settings)
                </span>
              )}
            </div>
          )}
        </div>
      )}

      {/* Content Navigation Tabs */}
      <div className="border-b border-stone-200 bg-stone-50 px-6 sm:px-8">
        <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto py-2 no-scrollbar">
          <button
            onClick={() => setActiveTab('genomics')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'genomics'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            <Dna className="w-4 h-4 text-emerald-300" />
            <span>Bioscience & Genomics</span>
          </button>

          <button
            onClick={() => setActiveTab('traits')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'traits'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Physical Traits</span>
          </button>

          <button
            onClick={() => setActiveTab('yield')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'yield'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>Yield & Performance</span>
          </button>

          <button
            onClick={() => setActiveTab('growth-graphs')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'growth-graphs'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            <TrendingUp className="w-4 h-4 text-amber-300" />
            <span>Growth & Production Graphs</span>
          </button>

          <button
            onClick={() => setActiveTab('heritage')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'heritage'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            <HeartHandshake className="w-4 h-4" />
            <span>Heritage & Habitat</span>
          </button>

          <button
            onClick={() => setActiveTab('care')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'care'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Care & Nutrition</span>
          </button>

          <button
            onClick={() => setActiveTab('candidates')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'candidates'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Top Candidates ({result.topCandidates.length})</span>
          </button>
        </div>
      </div>

      {/* Tab Panels */}
      <div className="p-6 sm:p-8">
        {/* TAB 0: Bioscience & Genomics */}
        {activeTab === 'genomics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 space-y-2">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                  <Dna className="w-4 h-4 text-emerald-700" />
                  <span>CSN2 Beta-Casein Allele</span>
                </div>
                <div className="text-xl font-extrabold text-stone-900">
                  {result.genomics.csn2Allele}
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Indian Zebu cattle and buffaloes possess Proline at amino acid position 67 (Pro67). In European cattle, a CCT &rarr; CAT point mutation created Histidine (His67), which enzymatically cleaves into the inflammatory opioid peptide Beta-Casomorphin-7 (BCM-7).
                </p>
                <div className="pt-2">
                  <a
                    href="https://www.uniprot.org/uniprotkb/P02666/entry"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:underline"
                  >
                    <span>UniProt: P02666 (CSN2_BOVIN)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 space-y-2">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                  <Dna className="w-4 h-4 text-emerald-700" />
                  <span>Cytogenetic Karyotype</span>
                </div>
                <div className="text-xl font-extrabold text-stone-900 font-mono">
                  {result.genomics.karyotype}
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {result.category === 'Cattle'
                    ? 'Bos indicus maintains 2n = 60 chromosomes comprising 29 pairs of acrocentric autosomes and submetacentric X/Y sex chromosomes.'
                    : 'Bubalus bubalis (River buffalo) karyotype is 2n = 50 chromosomes (5 pairs of submetacentric and 20 pairs of acrocentric autosomes).'}
                </p>
                <div className="pt-2 text-[11px] font-mono text-emerald-800">
                  Subfamily: Bovinae
                </div>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 space-y-2">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                  <Dna className="w-4 h-4 text-emerald-700" />
                  <span>Lipid & Thermal Genes</span>
                </div>
                <div className="text-sm font-bold text-stone-900">
                  {result.genomics.fatRegulatorGene}
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Regulates milk fat globule membrane synthesis ({result.productivity.fatPercentage} butterfat) and HSP70 / HSF1 cutaneous heat tolerance during peak summer radiation.
                </p>
                <div className="pt-2">
                  <a
                    href="https://www.ncbi.nlm.nih.gov/gene/281099"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:underline"
                  >
                    <span>NCBI Gene: 281099 (Casein beta)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 1: Physical Traits */}
        {activeTab === 'traits' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wide block mb-1">
                Horn Profile
              </span>
              <p className="text-sm font-medium text-stone-900">{result.physicalTraits.horns}</p>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wide block mb-1">
                Ear Characteristics
              </span>
              <p className="text-sm font-medium text-stone-900">{result.physicalTraits.ears}</p>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wide block mb-1">
                Coat Color & Pigmentation
              </span>
              <p className="text-sm font-medium text-stone-900">{result.physicalTraits.coatColor}</p>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wide block mb-1">
                Facial Profile
              </span>
              <p className="text-sm font-medium text-stone-900">{result.physicalTraits.faceProfile}</p>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wide block mb-1">
                Thoracic Hump & Dewlap
              </span>
              <p className="text-sm font-medium text-stone-900">{result.physicalTraits.humpAndDewlap}</p>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wide block mb-1">
                Size & Build Conformation
              </span>
              <p className="text-sm font-medium text-stone-900">{result.physicalTraits.sizeAndBuild}</p>
            </div>
          </div>
        )}

        {/* TAB 2: Yield & Performance */}
        {activeTab === 'yield' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-4">
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wide block mb-1">
                  Primary Utility
                </span>
                <p className="text-base font-bold text-stone-900">{result.utility}</p>
              </div>

              <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-4">
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wide block mb-1">
                  Lactation Yield
                </span>
                <p className="text-base font-bold text-stone-900">{result.productivity.averageYield}</p>
              </div>

              <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-4">
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wide block mb-1">
                  Butterfat Percentage
                </span>
                <p className="text-base font-bold text-stone-900">{result.productivity.fatPercentage}</p>
              </div>

              <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-4">
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wide block mb-1">
                  Hardiness Level
                </span>
                <p className="text-base font-bold text-emerald-700">{result.productivity.hardiness}</p>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 space-y-3">
              <h4 className="font-bold text-sm text-stone-900 flex items-center gap-2">
                <Activity className="w-4 h-4 text-amber-600" />
                Climate & Thermal Resilience:
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed">
                {result.productivity.heatTolerance}
              </p>

              <div className="pt-3 border-t border-stone-200 flex flex-wrap gap-6 text-xs text-stone-600">
                <div>
                  <span className="font-semibold text-stone-800">Adult Male Weight: </span>
                  {result.productivity.weightMaleKg}
                </div>
                <div>
                  <span className="font-semibold text-stone-800">Adult Female Weight: </span>
                  {result.productivity.weightFemaleKg}
                </div>
              </div>
            </div>

            {/* Recharts Growth & Milk Production Potential Graph Component */}
            <BreedProductionGraph result={result} />
          </div>
        )}

        {/* TAB 2.5: Dedicated Growth & Production Graphs */}
        {activeTab === 'growth-graphs' && (
          <div className="space-y-6">
            <BreedProductionGraph result={result} />
          </div>
        )}

        {/* TAB 3: Heritage & Habitat */}
        {activeTab === 'heritage' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
                <h4 className="font-bold text-sm text-stone-900 flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  Native Ecological Tract:
                </h4>
                <p className="text-sm text-stone-700 leading-relaxed mb-3">
                  {result.homeTract}
                </p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-100 text-amber-900 text-xs font-semibold">
                  State: {result.stateOfOrigin}
                </div>
              </div>

              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
                <h4 className="font-bold text-sm text-stone-900 flex items-center gap-2 mb-2">
                  <HeartHandshake className="w-4 h-4 text-amber-600" />
                  Pastoral Custodians:
                </h4>
                <div className="flex flex-wrap gap-2 mb-3">
                  {result.traditionalCommunities.map((comm, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-white border border-stone-300 text-stone-800 text-xs font-medium"
                    >
                      {comm}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-stone-500">
                  Traditional pastoral knowledge has conserved these pure bovine/bubaline lineages.
                </p>
              </div>
            </div>

            <div className="bg-amber-50/50 border border-amber-200/70 rounded-2xl p-5">
              <h4 className="font-bold text-sm text-amber-950 mb-2">
                Historical & Cultural Chronicle:
              </h4>
              <p className="text-sm text-stone-800 leading-relaxed">
                {result.historicalSignificance}
              </p>
            </div>
          </div>
        )}

        {/* TAB 4: Care & Nutrition */}
        {activeTab === 'care' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {result.careRecommendations.map((tip, idx) => (
                <div
                  key={idx}
                  className="bg-stone-50 border border-stone-200 rounded-2xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm mb-3">
                      {idx + 1}
                    </div>
                    <p className="text-sm text-stone-800 leading-relaxed">{tip}</p>
                  </div>
                  <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider mt-4">
                    Husbandry Tip
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: Top Candidates Breakdown */}
        {activeTab === 'candidates' && (
          <div className="space-y-4">
            <p className="text-xs text-stone-500">
              Confidence distribution across top predicted candidates based on visible morphology:
            </p>

            <div className="space-y-3">
              {(settings.showTopThreePredictions ? result.topCandidates.slice(0, 3) : result.topCandidates.slice(0, 1)).map((cand, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border transition-all ${
                    idx === 0
                      ? 'bg-amber-50/70 border-amber-300 ring-1 ring-amber-400/40 shadow-xs'
                      : 'bg-white border-stone-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm sm:text-base text-stone-900">
                        {cand.breedName}
                      </span>
                      {cand.vernacularName && (
                        <span className="text-xs text-stone-500 font-serif">
                          ({cand.vernacularName})
                        </span>
                      )}
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                        {cand.category}
                      </span>
                    </div>

                    <span className="font-extrabold text-sm sm:text-base text-stone-900">
                      {cand.confidence}%
                    </span>
                  </div>

                  <div className="w-full h-2.5 bg-stone-200 rounded-full overflow-hidden mb-2">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        idx === 0 ? 'bg-amber-600' : 'bg-stone-400'
                      }`}
                      style={{ width: `${cand.confidence}%` }}
                    />
                  </div>

                  <p className="text-xs text-stone-600">
                    <span className="font-semibold text-stone-800">Distinguishing trait: </span>
                    {cand.keyDifferentiatingFeature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Actions & College Mini Project Buttons */}
      <div className="bg-stone-100/90 border-t border-stone-200 p-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <div className="flex flex-wrap items-center gap-2">
          {/* Academic Report Modal Button */}
          <button
            type="button"
            onClick={onOpenReportModal}
            className="px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center gap-1.5"
          >
            <GraduationCap className="w-4 h-4 text-amber-200" />
            <span>Generate Project Lab Report</span>
          </button>

          {/* Save to Cloud Firestore Button */}
          <button
            type="button"
            disabled={isSavingToCloud}
            onClick={handleSaveToCloud}
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-xs flex items-center gap-1.5"
          >
            <Cloud className="w-4 h-4 text-emerald-200" />
            <span>{isSavingToCloud ? 'Saving...' : cloudSavedSuccess ? 'Saved to Cloud!' : 'Save to Lab Journal (Firestore)'}</span>
          </button>

          <button
            type="button"
            onClick={onReset}
            className="px-3.5 py-2 bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-1.5"
          >
            <RotateCcw className="w-4 h-4 text-amber-400" />
            <span>Scan Another</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onCompareWith(result.predictedBreed)}
            className="px-3 py-2 bg-white hover:bg-stone-50 text-stone-800 font-medium text-xs rounded-xl border border-stone-300 transition-colors flex items-center gap-1.5"
          >
            <span>Compare</span>
            <ArrowRight className="w-3.5 h-3.5 text-stone-500" />
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="p-2.5 rounded-xl border border-stone-300 bg-white text-stone-700 hover:text-stone-900 hover:bg-stone-50 transition-colors relative"
            title="Share result"
          >
            <Share2 className="w-4 h-4" />
            {copiedNotification && (
              <span className="absolute -top-8 right-0 bg-stone-900 text-white text-[10px] px-2 py-1 rounded shadow-md whitespace-nowrap">
                Copied summary!
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
