import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import translationEN from "../src/translationEN.json";
import translationFR from "../src/translationFR.json";




const resources = {

  fr: {
    translation: translationFR
  },
  en: {
    translation: translationEN
  }
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({

  
  resources,
    fallbackLng: "fr",
    debug: true,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
  }
})

export default i18n;