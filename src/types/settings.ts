export type ThemeMode = 'light' | 'dark' | 'system';
export type LanguageCode =
  | 'en'
  | 'ta'
  | 'hi'
  | 'te'
  | 'mr'
  | 'ml'
  | 'gu'
  | 'ur'
  | 'kn'
  | 'raj'
  | 'bn'
  | 'pa'
  | 'ks';
export type AllowedImageFormat = 'image/jpeg' | 'image/png' | 'image/webp';

export interface AppSettings {
  theme: ThemeMode;
  language: LanguageCode;
  maxFileSizeMb: number; // e.g., 5, 10, 15, 25 MB
  allowedFormats: AllowedImageFormat[];
  autoCompressImages: boolean;
  showTopThreePredictions: boolean;
  defaultAiEngine: 'auto' | 'mobilenet' | 'cloud';
  minConfidenceThreshold: number; // e.g., 50, 60, 75
  showVernacularScripts: boolean;
  hapticFeedbackEnabled: boolean;
}

export const DEFAULT_SETTINGS: AppSettings = {
  theme: 'light',
  language: 'en',
  maxFileSizeMb: 10,
  allowedFormats: ['image/jpeg', 'image/png', 'image/webp'],
  autoCompressImages: true,
  showTopThreePredictions: true,
  defaultAiEngine: 'auto',
  minConfidenceThreshold: 60,
  showVernacularScripts: true,
  hapticFeedbackEnabled: true
};
