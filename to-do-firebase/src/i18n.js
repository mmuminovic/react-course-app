import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import transaltionsEn from "./locales/en/translations.json";
import transaltionsRs from "./locales/rs/translations.json";

const LanguageDetector = {
  type: "languageDetector",
  detect: () => {
    const lang = localStorage.getItem("i18nextLng");
    if (lang) {
      return lang;
    }
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "rs",
    react: { useSuspense: false },
    supportedLngs: ["rs", "en"],
    ns: ["translations"],
    defaultNS: "translations",

    debug: false,

    cache: {
      enabled: true,
    },

    interpolation: {
      escapeValue: false,
    },
  });

i18n
  .addResources("rs", "translations", transaltionsRs)
  .addResources("en", "translations", transaltionsEn);

export default i18n;
