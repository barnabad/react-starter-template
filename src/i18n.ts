import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { ENVIRONMENT } from '@/config';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    load: 'languageOnly',
    debug: ENVIRONMENT === 'development' ? true : false,
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ['hu', 'en'],
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    nonExplicitSupportedLngs: true,
  });

export default i18n;
