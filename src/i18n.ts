import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { ENVIRONMENT, SUPPORTED_LANGUAGES } from '@/config';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
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
