import type { SUPPORTED_LANGUAGES } from '@/config';
import i18next from 'i18next';

type SupportedLanguages = (typeof SUPPORTED_LANGUAGES)[number];

export const changeLanguage = (lang: SupportedLanguages) => {
  i18next.changeLanguage(lang);
};
