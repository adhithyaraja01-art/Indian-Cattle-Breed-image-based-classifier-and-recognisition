import React, { useState } from 'react';
import { useSettings } from '../context/SettingsContext';
import { AllowedImageFormat, ThemeMode, LanguageCode } from '../types/settings';
import { SUPPORTED_LANGUAGES } from '../i18n/translations';
import {
  Settings,
  Sun,
  Moon,
  Laptop,
  Languages,
  UploadCloud,
  FileImage,
  Cpu,
  Sparkles,
  Trash2,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  GraduationCap,
  ShieldCheck,
  Dna,
  HardDrive,
  Info,
  Sliders,
  Check,
  X,
  FileText,
  Zap,
  Cloud
} from 'lucide-react';

interface SettingsViewProps {
  historyCount: number;
  onClearHistory: () => void;
  onNavigateToClassify?: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  historyCount,
  onClearHistory,
  onNavigateToClassify
}) => {
  const { settings, updateSettings, resetSettings, t, isDarkMode } = useSettings();

  // Dialog states
  const [showClearHistoryModal, setShowClearHistoryModal] = useState<boolean>(false);
  const [showResetSettingsModal, setShowResetSettingsModal] = useState<boolean>(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setFeedbackMessage(msg);
    setTimeout(() => {
      setFeedbackMessage(null);
    }, 4000);
  };

  const handleConfirmClearHistory = () => {
    onClearHistory();
    setShowClearHistoryModal(false);
    showNotification(t('data.clearedSuccess'));
  };

  const handleConfirmResetSettings = () => {
    resetSettings();
    setShowResetSettingsModal(false);
    showNotification(t('reset.success'));
  };

  const toggleFormat = (fmt: AllowedImageFormat) => {
    const current = settings.allowedFormats;
    if (current.includes(fmt)) {
      if (current.length === 1) {
        // Prevent deselecting all formats
        return;
      }
      updateSettings({ allowedFormats: current.filter((f) => f !== fmt) });
    } else {
      updateSettings({ allowedFormats: [...current, fmt] });
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 animate-fadeIn pb-12">
      {/* Top Banner / Dashboard Header */}
      <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 dark:from-stone-950 dark:via-stone-900 dark:to-black rounded-3xl p-6 sm:p-8 text-white border border-amber-900/40 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-amber-400/30">
            <Settings className="w-3.5 h-3.5 text-amber-400" />
            <span>{t('settings.liveStatus')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-50 tracking-tight">
            {t('settings.title')}
          </h2>
          <p className="mt-2 text-stone-300 text-xs sm:text-sm leading-relaxed">
            {t('settings.subtitle')}
          </p>
          <div className="mt-4 flex items-center gap-2 text-[11px] text-amber-400/90 font-mono">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t('settings.unsavedNotice')}</span>
          </div>
        </div>

        {/* Decorative background watermark */}
        <div className="absolute right-4 -bottom-6 opacity-10 pointer-events-none select-none text-9xl">
          ⚙️
        </div>
      </div>

      {/* Temporary Floating Toast / Notification */}
      {feedbackMessage && (
        <div className="bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-lg border border-emerald-400 flex items-center justify-between gap-3 text-xs sm:text-sm animate-fadeIn">
          <div className="flex items-center gap-2 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-200 shrink-0" />
            <span>{feedbackMessage}</span>
          </div>
          <button
            onClick={() => setFeedbackMessage(null)}
            className="p-1 hover:bg-emerald-700 rounded-lg text-emerald-200 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Grid of Main Configuration Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* 1. APPEARANCE & THEME */}
        <section className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 pb-3 border-b border-stone-100 dark:border-stone-800">
              <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 flex items-center justify-center shrink-0">
                <Sun className="w-5 h-5 text-amber-700 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">
                  {t('theme.title')}
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  {t('theme.desc')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-5">
              {/* Light Mode */}
              <button
                type="button"
                onClick={() => updateSettings({ theme: 'light' })}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                  settings.theme === 'light'
                    ? 'border-amber-600 bg-amber-50/70 dark:bg-amber-950/40 ring-2 ring-amber-500/40 shadow-xs'
                    : 'border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/40 hover:border-stone-300 dark:hover:border-stone-700'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                    <Sun className="w-4 h-4 text-amber-600" />
                  </div>
                  {settings.theme === 'light' && (
                    <div className="w-4 h-4 rounded-full bg-amber-600 text-white flex items-center justify-center">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                  )}
                </div>
                <div>
                  <span className="font-bold text-xs text-stone-900 dark:text-stone-100 block">
                    {t('theme.light')}
                  </span>
                  <span className="text-[10px] text-stone-500 dark:text-stone-400 block mt-0.5 leading-tight">
                    Daylight Field
                  </span>
                </div>
              </button>

              {/* Dark Mode */}
              <button
                type="button"
                onClick={() => updateSettings({ theme: 'dark' })}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                  settings.theme === 'dark'
                    ? 'border-amber-500 bg-amber-50/70 dark:bg-amber-950/40 ring-2 ring-amber-500/40 shadow-xs'
                    : 'border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/40 hover:border-stone-300 dark:hover:border-stone-700'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div className="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center">
                    <Moon className="w-4 h-4 text-amber-300" />
                  </div>
                  {settings.theme === 'dark' && (
                    <div className="w-4 h-4 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                  )}
                </div>
                <div>
                  <span className="font-bold text-xs text-stone-900 dark:text-stone-100 block">
                    {t('theme.dark')}
                  </span>
                  <span className="text-[10px] text-stone-500 dark:text-stone-400 block mt-0.5 leading-tight">
                    Barn Night Mode
                  </span>
                </div>
              </button>

              {/* System Default */}
              <button
                type="button"
                onClick={() => updateSettings({ theme: 'system' })}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                  settings.theme === 'system'
                    ? 'border-amber-600 bg-amber-50/70 dark:bg-amber-950/40 ring-2 ring-amber-500/40 shadow-xs'
                    : 'border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/40 hover:border-stone-300 dark:hover:border-stone-700'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div className="w-7 h-7 rounded-lg bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 flex items-center justify-center">
                    <Laptop className="w-4 h-4" />
                  </div>
                  {settings.theme === 'system' && (
                    <div className="w-4 h-4 rounded-full bg-amber-600 text-white flex items-center justify-center">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                  )}
                </div>
                <div>
                  <span className="font-bold text-xs text-stone-900 dark:text-stone-100 block">
                    {t('theme.system')}
                  </span>
                  <span className="text-[10px] text-stone-500 dark:text-stone-400 block mt-0.5 leading-tight">
                    OS Auto Sync
                  </span>
                </div>
              </button>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800/80 text-[11px] text-stone-500 dark:text-stone-400 flex items-center justify-between">
            <span>Currently Active:</span>
            <span className="font-semibold text-amber-700 dark:text-amber-400 font-mono capitalize">
              {settings.theme} {settings.theme === 'system' ? `(${isDarkMode ? 'Dark' : 'Light'})` : ''}
            </span>
          </div>
        </section>

        {/* 2. LANGUAGE & LOCALIZATION (ALL 13 INDIGENOUS LANGUAGES) */}
        <section className="col-span-1 md:col-span-2 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-100 dark:border-stone-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-orange-800 dark:text-orange-300 flex items-center justify-center shrink-0">
                  <Languages className="w-5 h-5 text-orange-700 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">
                    {t('lang.title')}
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    {t('lang.desc')}
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 text-[11px] font-semibold border border-amber-500/20 w-fit">
                <span>{SUPPORTED_LANGUAGES.length} Regional Languages Supported</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
              {SUPPORTED_LANGUAGES.map((lang) => {
                const isSelected = settings.language === lang.code;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => updateSettings({ language: lang.code })}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between group ${
                      isSelected
                        ? 'border-amber-600 bg-amber-50/80 dark:bg-amber-950/40 ring-2 ring-amber-500/40 shadow-xs'
                        : 'border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/40 hover:border-amber-300 dark:hover:border-stone-700 hover:bg-white dark:hover:bg-stone-800/80'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shadow-xs ${
                            isSelected
                              ? 'bg-amber-600 text-white'
                              : 'bg-stone-200/70 dark:bg-stone-700/60 text-stone-700 dark:text-stone-200 group-hover:bg-amber-100 dark:group-hover:bg-amber-900/40 group-hover:text-amber-800 dark:group-hover:text-amber-300'
                          }`}
                        >
                          {lang.symbol}
                        </span>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center shadow-xs">
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                      </div>
                      <div className="flex items-baseline gap-1.5 flex-wrap">
                        <span className="font-bold text-sm text-stone-900 dark:text-stone-100">
                          {lang.name}
                        </span>
                        <span className="text-[11px] text-amber-700 dark:text-amber-400 font-medium">
                          ({lang.englishName})
                        </span>
                      </div>
                      <div className="text-[11px] text-stone-500 dark:text-stone-400 mt-1 line-clamp-1 leading-snug">
                        {lang.region}
                      </div>
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-stone-200/50 dark:border-stone-800/60 text-[10px] text-stone-400 dark:text-stone-500 line-clamp-1">
                      <span className="font-semibold text-stone-600 dark:text-stone-300">Breeds:</span> {lang.iconicBreeds}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-stone-100 dark:border-stone-800/80 text-xs text-stone-500 dark:text-stone-400 flex flex-wrap items-center justify-between gap-2">
            <span>Selected Language:</span>
            {(() => {
              const activeMeta = SUPPORTED_LANGUAGES.find((l) => l.code === settings.language) || SUPPORTED_LANGUAGES[0];
              return (
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-mono text-[11px] font-semibold">
                    {activeMeta.code.toUpperCase()}
                  </span>
                  <span className="font-semibold text-amber-700 dark:text-amber-400 font-serif">
                    {activeMeta.name} ({activeMeta.englishName})
                  </span>
                  <span className="text-stone-400 dark:text-stone-500 text-[11px]">
                    • {activeMeta.region}
                  </span>
                </div>
              );
            })()}
          </div>
        </section>

        {/* 3. IMAGE UPLOAD & INGESTION SETTINGS */}
        <section className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 pb-3 border-b border-stone-100 dark:border-stone-800">
              <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 flex items-center justify-center shrink-0">
                <UploadCloud className="w-5 h-5 text-blue-700 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">
                  {t('upload.title')}
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  {t('upload.desc')}
                </p>
              </div>
            </div>

            <div className="space-y-4 mt-5">
              {/* Maximum File Size Selector */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-stone-800 dark:text-stone-200">
                    {t('upload.maxSize')}
                  </label>
                  <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400">
                    {settings.maxFileSizeMb} MB
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[5, 10, 15, 25].map((mb) => (
                    <button
                      key={mb}
                      type="button"
                      onClick={() => updateSettings({ maxFileSizeMb: mb })}
                      className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                        settings.maxFileSizeMb === mb
                          ? 'border-amber-600 bg-amber-600 text-white shadow-xs'
                          : 'border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 text-stone-700 dark:text-stone-300 hover:border-amber-400'
                      }`}
                    >
                      {mb} MB
                    </button>
                  ))}
                </div>
                <p className="text-[10px] text-stone-500 dark:text-stone-400 mt-1">
                  {t('upload.maxSizeDesc')}
                </p>
              </div>

              {/* Supported Image Formats */}
              <div>
                <label className="text-xs font-bold text-stone-800 dark:text-stone-200 block mb-1.5">
                  {t('upload.allowedFormats')}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(
                    [
                      { id: 'image/jpeg' as AllowedImageFormat, label: 'JPEG / JPG' },
                      { id: 'image/png' as AllowedImageFormat, label: 'PNG' },
                      { id: 'image/webp' as AllowedImageFormat, label: 'WebP' }
                    ] as const
                  ).map((fmt) => {
                    const isChecked = settings.allowedFormats.includes(fmt.id);
                    return (
                      <button
                        key={fmt.id}
                        type="button"
                        onClick={() => toggleFormat(fmt.id)}
                        className={`py-2 px-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          isChecked
                            ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 font-semibold'
                            : 'border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 text-stone-400 dark:text-stone-500'
                        }`}
                      >
                        {isChecked ? (
                          <Check className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                        ) : (
                          <X className="w-3.5 h-3.5" />
                        )}
                        <span>{fmt.label}</span>
                      </button>
                    );
                  })}
                </div>
                <p className="text-[10px] text-stone-500 dark:text-stone-400 mt-1">
                  {t('upload.allowedFormatsDesc')}
                </p>
              </div>

              {/* Auto Compression Toggle */}
              <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between gap-3">
                <div className="max-w-[80%]">
                  <span className="text-xs font-bold text-stone-800 dark:text-stone-200 block">
                    {t('upload.autoCompress')}
                  </span>
                  <span className="text-[10px] text-stone-500 dark:text-stone-400 block leading-tight">
                    {t('upload.autoCompressDesc')}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => updateSettings({ autoCompressImages: !settings.autoCompressImages })}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    settings.autoCompressImages ? 'bg-amber-600' : 'bg-stone-300 dark:bg-stone-700'
                  }`}
                  role="switch"
                  aria-checked={settings.autoCompressImages}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                      settings.autoCompressImages ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800/80 text-[11px] text-stone-500 dark:text-stone-400 flex items-center justify-between">
            <span>Validation Status:</span>
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              Active (Max {settings.maxFileSizeMb}MB, {settings.allowedFormats.length} Formats)
            </span>
          </div>
        </section>

        {/* 4. PREDICTION & DIAGNOSTIC PREFERENCES */}
        <section className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 pb-3 border-b border-stone-100 dark:border-stone-800">
              <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 flex items-center justify-center shrink-0">
                <Sliders className="w-5 h-5 text-purple-700 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">
                  {t('pred.title')}
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  {t('pred.desc')}
                </p>
              </div>
            </div>

            <div className="space-y-4 mt-5">
              {/* REQUIREMENT #6: SHOW TOP 3 PREDICTIONS TOGGLE */}
              <div className="p-3.5 rounded-xl border border-amber-200/80 dark:border-amber-900/40 bg-amber-50/50 dark:bg-amber-950/20 flex items-center justify-between gap-3">
                <div className="max-w-[78%]">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span className="text-xs font-bold text-amber-950 dark:text-amber-100">
                      {t('pred.topThree')}
                    </span>
                  </div>
                  <p className="text-[10px] text-stone-600 dark:text-stone-400 mt-1 leading-snug">
                    {t('pred.topThreeDesc')}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => updateSettings({ showTopThreePredictions: !settings.showTopThreePredictions })}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    settings.showTopThreePredictions ? 'bg-amber-600' : 'bg-stone-300 dark:bg-stone-700'
                  }`}
                  role="switch"
                  aria-checked={settings.showTopThreePredictions}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                      settings.showTopThreePredictions ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Preferred AI Engine */}
              <div>
                <label className="text-xs font-bold text-stone-800 dark:text-stone-200 block mb-1.5">
                  {t('pred.defaultEngine')}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(
                    [
                      { id: 'auto', label: 'Auto Hybrid', icon: Zap },
                      { id: 'mobilenet', label: 'MobileNet v2', icon: Cpu },
                      { id: 'cloud', label: 'Cloud API', icon: Cloud }
                    ] as const
                  ).map((eng) => {
                    const Icon = eng.icon;
                    const isSelected = settings.defaultAiEngine === eng.id;
                    return (
                      <button
                        key={eng.id}
                        type="button"
                        onClick={() => updateSettings({ defaultAiEngine: eng.id })}
                        className={`py-2 px-1.5 rounded-xl border text-[11px] font-medium flex items-center justify-center gap-1 transition-all cursor-pointer ${
                          isSelected
                            ? 'border-amber-600 bg-amber-600 text-white font-bold shadow-xs'
                            : 'border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 text-stone-700 dark:text-stone-300 hover:border-amber-400'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{eng.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Vernacular Script Display */}
              <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between gap-3">
                <div className="max-w-[80%]">
                  <span className="text-xs font-bold text-stone-800 dark:text-stone-200 block">
                    {t('pred.vernacular')}
                  </span>
                  <span className="text-[10px] text-stone-500 dark:text-stone-400 block leading-tight">
                    {t('pred.vernacularDesc')}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => updateSettings({ showVernacularScripts: !settings.showVernacularScripts })}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    settings.showVernacularScripts ? 'bg-amber-600' : 'bg-stone-300 dark:bg-stone-700'
                  }`}
                  role="switch"
                  aria-checked={settings.showVernacularScripts}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                      settings.showVernacularScripts ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800/80 text-[11px] text-stone-500 dark:text-stone-400 flex items-center justify-between">
            <span>Candidate Breakdown:</span>
            <span className="font-semibold text-amber-700 dark:text-amber-400">
              {settings.showTopThreePredictions ? 'Top 3 Probability Spectrum' : 'Dominant Single Match'}
            </span>
          </div>
        </section>
      </div>

      {/* 5. DATA MANAGEMENT & CLEAR HISTORY (REQUIREMENT #7) */}
      <section className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100 dark:border-stone-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 flex items-center justify-center shrink-0">
              <HardDrive className="w-5 h-5 text-rose-700 dark:text-rose-400" />
            </div>
            <div>
              <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">
                {t('data.title')}
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                {t('data.desc')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-mono font-bold">
              {historyCount} {historyCount === 1 ? 'Scan' : 'Scans'} Cached
            </span>
          </div>
        </div>

        <div className="pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-stone-800 dark:text-stone-200">
              {t('data.clearHistory')}
            </h4>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
              {t('data.clearHistoryDesc')}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowClearHistoryModal(true)}
            disabled={historyCount === 0}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/60 text-rose-700 dark:text-rose-300 text-xs font-bold border border-rose-300 dark:border-rose-800 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
          >
            <Trash2 className="w-4 h-4 text-rose-600 dark:text-rose-400" />
            <span>{t('data.clearHistory')}</span>
          </button>
        </div>
      </section>

      {/* 6. ABOUT SECTION: PROJECT SPECIFICATIONS & AI MODEL DETAILS (REQUIREMENT #8) */}
      <section className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 shadow-xs space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-stone-100 dark:border-stone-800">
          <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 flex items-center justify-center shrink-0">
            <GraduationCap className="w-5 h-5 text-amber-700 dark:text-amber-400" />
          </div>
          <div>
            <h3 className="font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100 font-serif">
              {t('about.title')}
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              {t('about.desc')}
            </p>
          </div>
        </div>

        {/* Academic Project Spec Sheet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800 space-y-1">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
              {t('about.projectName')}
            </span>
            <span className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 block">
              {t('about.projectNameVal')}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800 space-y-1">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
              {t('about.version')}
            </span>
            <span className="font-mono font-bold text-sm text-amber-600 dark:text-amber-400 block">
              {t('about.versionVal')}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800 space-y-1">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
              {t('about.authors')}
            </span>
            <span className="font-semibold text-stone-900 dark:text-stone-100 block">
              {t('about.authorsVal')}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800 space-y-1">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
              {t('about.institution')}
            </span>
            <span className="font-semibold text-stone-900 dark:text-stone-100 block">
              {t('about.institutionVal')}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800 space-y-1 md:col-span-2">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
              {t('about.models')}
            </span>
            <span className="text-stone-800 dark:text-stone-200 block font-medium leading-relaxed">
              {t('about.modelsVal')}
            </span>
          </div>
        </div>

        {/* Project Objectives Box from Student Presentation Slides */}
        <div className="p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 space-y-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-700 dark:text-amber-400" />
            <h4 className="font-bold text-xs uppercase tracking-wider text-amber-950 dark:text-amber-200">
              {t('about.objectives')} (Presentation Slide 2 &amp; 3)
            </h4>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-700 dark:text-stone-300">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
              <span>{t('about.objective1')}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
              <span>{t('about.objective2')}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
              <span>{t('about.objective3')}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
              <span>{t('about.objective4')}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 7. RESET ALL SETTINGS (REQUIREMENT #9) */}
      <section className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
            <RotateCcw className="w-4 h-4 text-stone-500" />
            <span>{t('reset.title')}</span>
          </h4>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
            {t('reset.desc')}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowResetSettingsModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-bold border border-stone-300 dark:border-stone-700 transition-all cursor-pointer shrink-0"
        >
          <RotateCcw className="w-4 h-4 text-stone-600 dark:text-stone-400" />
          <span>{t('reset.button')}</span>
        </button>
      </section>

      {/* CONFIRMATION MODAL: CLEAR HISTORY */}
      {showClearHistoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white dark:bg-stone-900 rounded-3xl max-w-md w-full p-6 border border-stone-200 dark:border-stone-800 shadow-2xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="text-center">
              <h3 className="font-bold text-lg text-stone-900 dark:text-stone-100">
                {t('modal.clearHistoryTitle')}
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-2 leading-relaxed">
                {t('modal.clearHistoryMsg', { count: historyCount })}
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3">
              <button
                type="button"
                onClick={() => setShowClearHistoryModal(false)}
                className="px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 text-xs font-semibold hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              >
                {t('modal.cancel')}
              </button>
              <button
                type="button"
                onClick={handleConfirmClearHistory}
                className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md shadow-rose-600/30 transition-colors"
              >
                {t('modal.clearConfirm')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONFIRMATION MODAL: RESET SETTINGS */}
      {showResetSettingsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white dark:bg-stone-900 rounded-3xl max-w-md w-full p-6 border border-stone-200 dark:border-stone-800 shadow-2xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center mx-auto">
              <RotateCcw className="w-6 h-6" />
            </div>

            <div className="text-center">
              <h3 className="font-bold text-lg text-stone-900 dark:text-stone-100">
                {t('modal.resetSettingsTitle')}
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-2 leading-relaxed">
                {t('modal.resetSettingsMsg')}
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3">
              <button
                type="button"
                onClick={() => setShowResetSettingsModal(false)}
                className="px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 text-xs font-semibold hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              >
                {t('modal.cancel')}
              </button>
              <button
                type="button"
                onClick={handleConfirmResetSettings}
                className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-md shadow-amber-600/30 transition-colors"
              >
                {t('modal.resetConfirm')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
