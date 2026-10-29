import React from 'react';
import { ScanHistoryItem } from '../types/breed';
import { X, Trash2, Clock, MapPin, Award, ChevronRight } from 'lucide-react';

interface HistoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  history: ScanHistoryItem[];
  onSelectScan: (item: ScanHistoryItem) => void;
  onClearHistory: () => void;
}

export const HistoryDrawer: React.FC<HistoryDrawerProps> = ({
  isOpen,
  onClose,
  history,
  onSelectScan,
  onClearHistory
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-900 text-white">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-400" />
            <h3 className="font-serif font-bold text-lg">Scan History</h3>
            <span className="text-xs bg-stone-800 px-2 py-0.5 rounded-full text-amber-300 font-mono">
              {history.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of Scans */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {history.length === 0 ? (
            <div className="py-16 text-center text-stone-400 space-y-3">
              <Clock className="w-12 h-12 mx-auto text-stone-300" />
              <p className="text-sm font-medium">No breed scans in history yet</p>
              <p className="text-xs text-stone-400 max-w-xs mx-auto">
                Scan or test a sample image in the classifier to preserve diagnostic results here.
              </p>
            </div>
          ) : (
            history.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectScan(item);
                  onClose();
                }}
                className="p-3 bg-stone-50 hover:bg-amber-50/70 border border-stone-200 hover:border-amber-300 rounded-2xl cursor-pointer transition-all flex items-center gap-3.5 group"
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-stone-900 border border-stone-300 flex-shrink-0">
                  <img
                    src={item.imagePreviewUrl}
                    alt={item.result.predictedBreed}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-bold text-sm text-stone-900 truncate">
                      {item.result.predictedBreed}
                    </h4>
                    <span className="text-xs font-extrabold text-amber-700">
                      {item.result.confidence}%
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-stone-500 mt-0.5">
                    <span className="px-1.5 py-0.2 rounded bg-stone-200 text-stone-700 font-semibold">
                      {item.result.category}
                    </span>
                    <span className="flex items-center gap-0.5 truncate">
                      <MapPin className="w-3 h-3 text-amber-600" />
                      {item.result.stateOfOrigin}
                    </span>
                  </div>

                  <span className="text-[10px] text-stone-400 font-mono block mt-1">
                    {new Date(item.timestamp).toLocaleDateString()} at{' '}
                    {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>

                <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all" />
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {history.length > 0 && (
          <div className="p-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between">
            <button
              onClick={onClearHistory}
              className="flex items-center gap-1.5 text-xs text-red-600 hover:text-red-700 font-semibold hover:bg-red-50 px-3 py-2 rounded-lg transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              <span>Clear History</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-xl"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
