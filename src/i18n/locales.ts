export const LOCALES = ['en', 'vi'] as const;
export type Locale = typeof LOCALES[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  vi: 'Tiếng Việt',
};
