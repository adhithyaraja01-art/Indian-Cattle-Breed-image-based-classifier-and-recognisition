import React, { useState, useEffect } from 'react';
import { Sparkles, Dna, ShieldCheck, Cpu, TrendingUp, X } from 'lucide-react';

export interface LoadingStateProps {
  imagePreviewUrl?: string | null;
  onCancel?: () => void;
  message?: string;
}

const ANALYSIS_STEPS = [
  { id: 1, label: 'Pre-processing specimen image & tensor normalization', icon: Cpu, delay: 0 },
  { id: 2, label: 'Extracting cranial curvature, hump & dewlap phenotypic traits', icon: Sparkles, delay: 600 },
  { id: 3, label: 'Cross-referencing 73 certified ICAR-NBAGR accession profiles', icon: ShieldCheck, delay: 1300 },
  { id: 4, label: 'Synthesizing A2 CSN2 genomics & Wood’s gamma lactation curves', icon: Dna, delay: 2000 }
];

export const LoadingState: React.FC<LoadingStateProps> = ({
  imagePreviewUrl,
  onCancel,
  message = 'Analyzing Bovine Specimen...'
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    const timers = ANALYSIS_STEPS.map((step, idx) => {
      return setTimeout(() => {
        setCurrentStepIndex(idx);
      }, step.delay);
    });

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xl space-y-8 animate-fadeIn text-center">
      {/* Visual Scanning Specimen Preview */}
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-2xl overflow-hidden bg-stone-900 border-2 border-amber-500/40 shadow-inner flex items-center justify-center">
        {imagePreviewUrl ? (
          <img
            src={imagePreviewUrl}
            alt="Specimen preview"
            className="w-full h-full object-cover filter brightness-90"
          />
        ) : (
          <div className="text-5xl" role="img" aria-label="Bovine">🐂</div>
        )}

        {/* Animated Scanning Beam */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/30 via-transparent to-transparent animate-scan pointer-events-none" />

        {/* Scanning Reticle Overlay */}
        <div className="absolute inset-4 border border-amber-400/30 rounded-xl pointer-events-none flex flex-col justify-between p-2">
          <div className="flex justify-between text-[10px] text-amber-300 font-mono">
            <span>AI: ACTIVE</span>
            <span>224x224</span>
          </div>
          <div className="flex justify-between text-[10px] text-amber-300 font-mono">
            <span>BOS INDICUS</span>
            <span>SCANNING</span>
          </div>
        </div>
      </div>

      {/* Main Heading and Status */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
          Neural Phenotypic Classification in Progress
        </div>
        <h3 className="font-serif text-2xl font-bold text-stone-900">
          {message}
        </h3>
        <p className="text-stone-500 text-xs sm:text-sm max-w-md mx-auto">
          Please wait while the vision inference engine extracts anatomical morphology and evaluates phenotypic trait markers.
        </p>
      </div>

      {/* Diagnostic Steps Progress List */}
      <div className="bg-stone-50 rounded-2xl p-4 sm:p-6 border border-stone-200/80 text-left space-y-3">
        {ANALYSIS_STEPS.map((step, idx) => {
          const Icon = step.icon;
          const isDone = idx < currentStepIndex;
          const isCurrent = idx === currentStepIndex;

          return (
            <div
              key={step.id}
              className={`flex items-center gap-3 p-2 rounded-xl transition-all ${
                isCurrent
                  ? 'bg-amber-100/60 text-stone-900 font-semibold'
                  : isDone
                  ? 'text-stone-600'
                  : 'text-stone-400 opacity-60'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                  isDone
                    ? 'bg-emerald-500 text-white'
                    : isCurrent
                    ? 'bg-amber-500 text-stone-950 animate-pulse'
                    : 'bg-stone-200 text-stone-500'
                }`}
              >
                {isDone ? '✓' : <Icon className="w-3.5 h-3.5" />}
              </div>

              <span className="text-xs sm:text-sm flex-1">
                {step.label}
              </span>

              {isCurrent && (
                <div className="w-3 h-3 border-2 border-amber-600 border-t-transparent animate-spin rounded-full flex-shrink-0" />
              )}
            </div>
          );
        })}
      </div>

      {/* Cancel Button */}
      {onCancel && (
        <div>
          <button
            onClick={onCancel}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-stone-300 transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
            <span>Cancel Analysis</span>
          </button>
        </div>
      )}
    </div>
  );
};
