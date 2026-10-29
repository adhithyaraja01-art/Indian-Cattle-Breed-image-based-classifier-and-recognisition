import React from 'react';
import { AlertTriangle, RotateCcw, Sparkles, CheckCircle2 } from 'lucide-react';

export interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  onSelectSample?: () => void;
  className?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Classification Could Not Complete',
  message = 'The vision engine was unable to resolve key phenotypic bovine markers from the submitted photograph.',
  onRetry,
  onSelectSample,
  className = ''
}) => {
  return (
    <div className={`max-w-xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-rose-200 shadow-md space-y-6 ${className}`}>
      {/* Icon and Title */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 flex items-center justify-center flex-shrink-0">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
            {title}
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm mt-1 leading-relaxed">
            {message}
          </p>
        </div>
      </div>

      {/* Field Diagnostic Suggestions */}
      <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 text-xs text-stone-800 space-y-2">
        <p className="font-semibold text-amber-950 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-amber-700" />
          Field Photography Recommendations:
        </p>
        <ul className="space-y-1.5 text-stone-700 pl-5 list-disc">
          <li>Capture a lateral (side-view) profile showcasing the thoracic hump and dewlap.</li>
          <li>For horned breeds (e.g. Kangayam, Amritmahal, Murrah), ensure horn tips and curvature are uncropped.</li>
          <li>Ensure daylight or bright outdoor illumination to reveal skin pigmentation and coat coloration.</li>
          <li>Strictly photograph registered Indian indigenous cattle (*Bos indicus*) or riverine buffaloes (*Bubalus bubalis*).</li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
        {onSelectSample && (
          <button
            onClick={onSelectSample}
            className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
          >
            Try Verified Sample
          </button>
        )}

        {onRetry && (
          <button
            onClick={onRetry}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs sm:text-sm shadow-md transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-amber-400" />
            <span>Try Another Photo</span>
          </button>
        )}
      </div>
    </div>
  );
};
