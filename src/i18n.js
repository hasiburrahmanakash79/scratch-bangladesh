import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const fallbackLng = ["en"];

i18n
  .use(i18nBackend)
  .use(I18nextBrowserLanguageDetector) 
  .use(initReactI18next)
  .init({
    fallbackLng,
    detection: {
      checkWhitelist: true,
    },
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;