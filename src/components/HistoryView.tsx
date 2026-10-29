import React from 'react';
import {
  History,
  Trash2,
  Calendar,
  Sparkles,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { ScanHistoryItem } from '../types/breed';
import { EmptyState } from './EmptyState';

interface HistoryViewProps {
  history: ScanHistoryItem[];
  onSelectScan: (item: ScanHistoryItem) => void;
  onClearHistory: () => void;
  onNavigateToClassify: () => void;
}

export const HistoryView: React.FC<HistoryViewProps> = ({
  history,
  onSelectScan,
  onClearHistory,
  onNavigateToClassify
}) => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn py-2">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <History className="w-5 h-5 text-amber-700" />
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Classification Scan History
            </h1>
          </div>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            Review past bovine specimen scans, confidence scores, and lactation analyses.
          </p>
        </div>

        {history.length > 0 && (
          <button
            onClick={onClearHistory}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-rose-700 hover:text-rose-800 bg-rose-50 hover:bg-rose-100 rounded-lg border border-rose-200 transition-colors self-start sm:self-auto cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear All History</span>
          </button>
        )}
      </div>

      {/* History List or Empty State */}
      {history.length === 0 ? (
        <EmptyState
          icon={Sparkles}
          title="No Scans Recorded Yet"
          description="Upload or photograph an indigenous Indian cattle or buffalo to classify its breed, examine diagnostic confidence metrics, and generate lactation curves."
          primaryActionLabel="Classify First Specimen"
          onPrimaryAction={onNavigateToClassify}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {history.map((item) => {
            const dateStr = new Date(item.timestamp).toLocaleDateString(undefined, {
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            });

            return (
              <div
                key={item.id}
                onClick={() => onSelectScan(item)}
                className="bg-white rounded-2xl p-4 border border-stone-200 shadow-xs hover:border-amber-400/80 hover:shadow-md transition-all cursor-pointer flex gap-4 group"
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-stone-100 flex-shrink-0 relative">
                  <img
                    src={item.imagePreviewUrl}
                    alt={item.result.predictedBreed}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <span className="absolute bottom-1 right-1 bg-stone-900/80 backdrop-blur-xs text-amber-300 text-[9px] font-bold px-1.5 py-0.5 rounded">
                    {item.result.confidence}%
                  </span>
                </div>

                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                        {item.result.category}
                      </span>
                      <span className="text-[10px] text-stone-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {dateStr}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-base text-stone-900 mt-1 truncate group-hover:text-amber-700 transition-colors">
                      {item.result.predictedBreed}
                    </h4>

                    <p className="text-xs text-stone-500 truncate">
                      {item.result.stateOfOrigin} • {item.result.utility}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-xs font-semibold text-amber-700">
                    <span className="text-[11px] text-stone-600">
                      Yield: {item.result.productivity.averageYield}
                    </span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>View Result</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
