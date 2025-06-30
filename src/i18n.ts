import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { ENVIRONMENT, SUPPORTED_LANGUAGES } from '@/config';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    react: {
      useSuspense: true,
    },
    fallbackLng: SUPPORTED_LANGUAGES[0],
    load: 'languageOnly',
    debug: ENVIRONMENT === 'development' ? true : false,
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: SUPPORTED_LANGUAGES,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    nonExplicitSupportedLngs: true,
  });

export default i18n;
