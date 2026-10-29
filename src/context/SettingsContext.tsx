import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppSettings, DEFAULT_SETTINGS, ThemeMode, LanguageCode } from '../types/settings';
import { TRANSLATIONS } from '../i18n/translations';

const SETTINGS_STORAGE_KEY = 'indian_bovine_app_settings_v1';

interface SettingsContextType {
  settings: AppSettings;
  updateSettings: (partial: Partial<AppSettings>) => void;
  resetSettings: () => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  isDarkMode: boolean;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AppSettings>(() => {
    try {
      const stored = localStorage.getItem(SETTINGS_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return { ...DEFAULT_SETTINGS, ...parsed };
      }
    } catch (e) {
      console.warn('Could not load settings from localStorage', e);
    }
    return DEFAULT_SETTINGS;
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Sync settings changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
    } catch (e) {
      console.warn('Could not save settings to localStorage', e);
    }
  }, [settings]);

  // Handle theme application on documentElement
  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = () => {
      let shouldBeDark = false;
      if (settings.theme === 'dark') {
        shouldBeDark = true;
      } else if (settings.theme === 'light') {
        shouldBeDark = false;
      } else if (settings.theme === 'system') {
        shouldBeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }

      setIsDarkMode(shouldBeDark);

      if (shouldBeDark) {
        root.classList.add('dark');
        root.style.colorScheme = 'dark';
      } else {
        root.classList.remove('dark');
        root.style.colorScheme = 'light';
      }
    };

    applyTheme();

    // Listen to OS theme changes if system theme is chosen
    if (settings.theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = () => applyTheme();
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, [settings.theme]);

  // Sync document language and text direction (for Urdu & Kashmiri RTL)
  useEffect(() => {
    const root = document.documentElement;
    root.lang = settings.language;
    if (settings.language === 'ur' || settings.language === 'ks') {
      root.dir = 'rtl';
    } else {
      root.dir = 'ltr';
    }
  }, [settings.language]);

  const updateSettings = (partial: Partial<AppSettings>) => {
    setSettings((prev) => ({ ...prev, ...partial }));
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
    try {
      localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(DEFAULT_SETTINGS));
    } catch {}
  };

  const t = (key: string, params?: Record<string, string | number>): string => {
    const lang = settings.language || 'en';
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    let text = dict[key as keyof typeof dict] || TRANSLATIONS.en[key as keyof typeof TRANSLATIONS.en] || key;

    if (params) {
      Object.entries(params).forEach(([pKey, pVal]) => {
        text = text.replace(new RegExp(`\\{${pKey}\\}`, 'g'), String(pVal));
      });
    }

    return text;
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSettings,
        resetSettings,
        t,
        isDarkMode
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export function useSettings(): SettingsContextType {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}
