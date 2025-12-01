import { ui, type UiKey } from './ui';
import { DEFAULT_LOCALE, LOCALES, type Locale } from './locales';

/**
 * Extract locale from URL pathname
 * @param url - Current URL object
 * @returns Detected locale or default locale
 */
export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang && LOCALES.includes(lang as Locale)) {
    return lang as Locale;
  }
  return DEFAULT_LOCALE;
}

/**
 * Create translation function for specific locale
 * @param lang - Target locale
 * @returns Translation function
 */
export function useTranslations(lang: Locale) {
  return function t(key: UiKey): string {
    return ui[lang][key] || ui[DEFAULT_LOCALE][key];
  };
}

/**
 * Generate localized path from base path
 * @param path - Base path (e.g., '/docs/introduction')
 * @param locale - Target locale
 * @returns Localized path with or without locale prefix
 */
export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return path;
  return `/${locale}${path}`;
}

/**
 * Extract slug from localized path
 * @param currentPath - Current pathname
 * @param locale - Current locale
 * @returns Slug without locale prefix
 */
export function getCurrentSlug(currentPath: string, locale: Locale): string {
  // Remove locale prefix if exists
  let path = currentPath;
  if (locale !== DEFAULT_LOCALE) {
    path = currentPath.replace(new RegExp(`^/${locale}`), '');
  }
  // Remove /docs/ prefix
  return path.replace(/^\/docs\//, '');
}

/**
 * Get alternate URLs for hreflang tags
 * @param slug - Page slug
 * @param baseUrl - Base site URL
 * @returns Array of alternate URLs with locale info
 */
export function getAlternateUrls(slug: string, baseUrl: string = 'https://docs.claudekit.cc') {
  return [
    { lang: 'en', url: `${baseUrl}/docs/${slug}` },
    { lang: 'vi', url: `${baseUrl}/vi/docs/${slug}` },
    { lang: 'x-default', url: `${baseUrl}/docs/${slug}` },
  ];
}

/**
 * Generate doc path from slug, avoiding duplicate /docs/ prefix
 * Content in src/content/docs/docs/* creates slugs like "docs/agents/planner"
 * This function ensures the final path is /docs/agents/planner, not /docs/docs/agents/planner
 * @param slug - Document slug from content collection
 * @param locale - Target locale
 * @returns Properly formatted doc path
 */
export function getDocPath(slug: string, locale: Locale): string {
  // Remove leading 'docs/' if present to avoid duplication
  const normalizedSlug = slug.startsWith('docs/') ? slug.slice(5) : slug;
  return getLocalizedPath(`/docs/${normalizedSlug}`, locale);
}
