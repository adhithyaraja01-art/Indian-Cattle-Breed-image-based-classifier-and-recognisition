import React from 'react';
import { LucideIcon, Search, Sparkles, FolderOpen, History, Bookmark } from 'lucide-react';

export interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  primaryActionLabel?: string;
  onPrimaryAction?: () => void;
  secondaryActionLabel?: string;
  onSecondaryAction?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon = FolderOpen,
  title,
  description,
  primaryActionLabel,
  onPrimaryAction,
  secondaryActionLabel,
  onSecondaryAction,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-xs text-center space-y-5 max-w-lg mx-auto ${className}`}>
      {/* Icon Badge */}
      <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-800 shadow-xs">
        <Icon className="w-8 h-8 text-amber-700" />
      </div>

      {/* Text Details */}
      <div className="space-y-2">
        <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
          {title}
        </h3>
        <p className="text-stone-500 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
          {description}
        </p>
      </div>

      {/* Action Buttons */}
      {(primaryActionLabel || secondaryActionLabel) && (
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {primaryActionLabel && onPrimaryAction && (
            <button
              onClick={onPrimaryAction}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-bold text-xs sm:text-sm shadow-md shadow-amber-900/20 transition-all cursor-pointer"
            >
              {primaryActionLabel}
            </button>
          )}

          {secondaryActionLabel && onSecondaryAction && (
            <button
              onClick={onSecondaryAction}
              className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              {secondaryActionLabel}
            </button>
          )}
        </div>
      )}
    </div>
  );
};
