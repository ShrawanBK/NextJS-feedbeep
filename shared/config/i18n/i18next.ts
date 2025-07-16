import i18next from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next/initReactI18next";

import { LANGUAGES, defaultNS, fallbackLng } from "./settings";

import type { ILanguageValue } from "./settings";

const runsOnServerSide = typeof window === "undefined";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend((language: ILanguageValue, namespace: string) => {
      return import(`./langs/${language}/${namespace}.json`);
    })
  )
  .init({
    debug: false,
    supportedLngs: LANGUAGES,
    fallbackLng,
    lng: undefined, // let detect the language on client side
    fallbackNS: defaultNS,
    defaultNS: defaultNS,
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
      caches: ["cookie"],
    },
    preload: runsOnServerSide ? LANGUAGES : [],
  });

export default i18next;
