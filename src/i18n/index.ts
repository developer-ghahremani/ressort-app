import { initReactI18next, useTranslation } from "react-i18next";

import en from "./en";
// import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {
    en: {
      translation: en,
    },
  },
});

export default i18n;

export const useI18Next = () => useTranslation();
