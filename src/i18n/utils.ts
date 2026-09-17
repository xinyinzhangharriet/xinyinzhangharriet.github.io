import { ui, defaultLang, type Lang } from './ui';

export function t(lang: Lang) {
  return (key: keyof (typeof ui)[typeof defaultLang]): string =>
    ui[lang][key] ?? ui[defaultLang][key];
}

/** Prefix a site-relative path with the language segment. */
export function localePath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean}`;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'zh' : 'en';
}

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: lang === 'zh' ? 'long' : 'short',
    day: 'numeric',
  });
}

export function readingTime(text: string, lang: Lang): number {
  if (lang === 'zh') {
    const chars = text.replace(/\s/g, '').length;
    return Math.max(1, Math.round(chars / 400));
  }
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}
