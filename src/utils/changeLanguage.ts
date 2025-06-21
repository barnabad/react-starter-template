import i18next from 'i18next';

import { type SupportedLanguages } from '@/config';

export const changeLanguage = (lang: SupportedLanguages) => {
  i18next.changeLanguage(lang);
};
