import React from 'react';
import { CandidateBreed } from '../types/breed';
import { ShieldCheck, Award, AlertCircle, Info, CheckCircle2 } from 'lucide-react';

export interface ConfidenceIndicatorProps {
  confidence: number;
  topCandidates?: CandidateBreed[];
  predictedBreed: string;
  onSelectCandidate?: (candidateName: string) => void;
  className?: string;
}

export interface ReliabilityTier {
  tier: string;
  badgeClass: string;
  meterColor: string;
  borderClass: string;
  summary: string;
  guidance: string;
}

export function getReliabilityTier(score: number): ReliabilityTier {
  if (score >= 90) {
    return {
      tier: 'Definitive Identification',
      badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-300',
      meterColor: 'bg-emerald-500',
      borderClass: 'border-emerald-200',
      summary: 'High diagnostic certainty aligning with certified ICAR-NBAGR accession phenotypic markers.',
      guidance: 'Specimen matches distinct cranial, horn curvature, thoracic hump, and dewlap skin fold criteria.'
    };
  }
  if (score >= 75) {
    return {
      tier: 'Strong Probability',
      badgeClass: 'bg-amber-50 text-amber-900 border-amber-300',
      meterColor: 'bg-amber-500',
      borderClass: 'border-amber-200',
      summary: 'Clear phenotypic characteristics matching registered breed standards.',
      guidance: 'Minor variations may reflect photography angle, field lighting, or juvenile specimen status.'
    };
  }
  if (score >= 60) {
    return {
      tier: 'Moderate Correlation',
      badgeClass: 'bg-yellow-50 text-yellow-900 border-yellow-300',
      meterColor: 'bg-yellow-500',
      borderClass: 'border-yellow-200',
      summary: 'Key indigenous bovine morphological features identified with moderate confidence.',
      guidance: 'Cross-reference secondary traits in the Breed Explorer or upload a clean lateral profile shot.'
    };
  }
  return {
    tier: 'Inconclusive / Review Required',
    badgeClass: 'bg-rose-50 text-rose-900 border-rose-300',
    meterColor: 'bg-rose-500',
    borderClass: 'border-rose-200',
    summary: 'Atypical morphology or potential non-bovine / crossbred specimen detected.',
    guidance: 'Ensure image displays clear bovine cranial and thoracic contours under good lighting.'
  };
}

export const ConfidenceIndicator: React.FC<ConfidenceIndicatorProps> = ({
  confidence,
  topCandidates = [],
  predictedBreed,
  onSelectCandidate,
  className = ''
}) => {
  const tierInfo = getReliabilityTier(confidence);
  const roundedConfidence = Math.round(confidence);

  return (
    <div className={`bg-white rounded-2xl p-5 sm:p-6 border ${tierInfo.borderClass} shadow-xs space-y-4 ${className}`}>
      {/* Header with Title and Tier Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
            <ShieldCheck className="w-4 h-4 text-amber-800" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-stone-900 text-sm sm:text-base">
              Diagnostic Confidence Metric
            </h4>
            <p className="text-[11px] text-stone-500">
              Calibrated against ICAR-NBAGR accession morphological profiles
            </p>
          </div>
        </div>

        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${tierInfo.badgeClass}`}>
          <span className={`w-2 h-2 rounded-full ${tierInfo.meterColor} animate-pulse`} />
          {tierInfo.tier}
        </span>
      </div>

      {/* Primary Score Progress Bar */}
      <div className="space-y-1.5">
        <div className="flex items-baseline justify-between text-xs">
          <span className="font-medium text-stone-700">
            Primary Match: <strong className="text-stone-900 font-bold">{predictedBreed}</strong>
          </span>
          <span className="font-serif text-lg sm:text-xl font-bold text-stone-900">
            {roundedConfidence}%
          </span>
        </div>

        <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden p-0.5 border border-stone-200">
          <div
            className={`h-full rounded-full transition-all duration-700 ${tierInfo.meterColor}`}
            style={{ width: `${Math.min(100, Math.max(5, roundedConfidence))}%` }}
          />
        </div>
      </div>

      {/* Diagnostic Guidance */}
      <div className="bg-stone-50 rounded-xl p-3 border border-stone-200/80 text-xs text-stone-700 space-y-1">
        <p className="font-semibold text-stone-800">{tierInfo.summary}</p>
        <p className="text-stone-600 leading-relaxed">{tierInfo.guidance}</p>
      </div>

      {/* Top Alternative Candidates Breakdown */}
      {topCandidates.length > 0 && (
        <div className="pt-2 border-t border-stone-100 space-y-2.5">
          <div className="flex items-center justify-between text-xs text-stone-600">
            <span className="font-semibold text-stone-800">Runner-Up Phenotypic Candidates</span>
            <span className="text-[10px] text-stone-400">Relative Probability Distribution</span>
          </div>

          <div className="space-y-2">
            {topCandidates.slice(0, 3).map((candidate, idx) => {
              const isSelected = candidate.breedName.toLowerCase() === predictedBreed.toLowerCase();
              return (
                <div
                  key={idx}
                  onClick={() => onSelectCandidate && onSelectCandidate(candidate.breedName)}
                  className={`p-2.5 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-amber-50/70 border-amber-300 shadow-xs'
                      : 'bg-white border-stone-200 hover:border-amber-300 hover:bg-stone-50'
                  } ${onSelectCandidate ? 'cursor-pointer' : ''}`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-medium text-stone-900 flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-stone-200 text-stone-700 flex items-center justify-center text-[10px] font-bold">
                        {idx + 1}
                      </span>
                      {candidate.breedName}
                      {candidate.category && (
                        <span className="text-[10px] text-stone-500 font-normal">
                          ({candidate.category})
                        </span>
                      )}
                    </span>
                    <span className="font-semibold text-stone-800">
                      {Math.round(candidate.confidence)}%
                    </span>
                  </div>

                  <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-500 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, Math.max(3, candidate.confidence))}%` }}
                    />
                  </div>

                  {candidate.keyDifferentiatingFeature && (
                    <p className="text-[11px] text-stone-500 mt-1 italic">
                      Trait cue: {candidate.keyDifferentiatingFeature}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
