import { headers, cookies as getCookies } from "next/headers";

import i18next from "./i18next";
import { cookieName, headerName, fallbackLng } from "./settings";

import type { ILanguageValue } from "./settings";

export const detectLanguage = async (): Promise<ILanguageValue> => {
  const cookies = await getCookies();

  const cookieLang = cookies.get(cookieName)?.value;

  const headerLang = !cookieLang
    ? (await headers()).get(headerName)
    : undefined;

  const language =
    cookieLang ?? headerLang ?? i18next.resolvedLanguage ?? fallbackLng;

  return language as ILanguageValue;
};

export const getServerTranslate = async (
  ns: string,
  options?: { keyPrefix?: string }
) => {
  const language = await detectLanguage();

  if (language && i18next.resolvedLanguage !== language) {
    await i18next.changeLanguage(language);
  }

  if (ns && !i18next.hasLoadedNamespace(ns)) {
    await i18next.loadNamespaces(ns);
  }

  return {
    t: i18next.getFixedT(
      language,
      Array.isArray(ns) ? ns[0] : ns,
      options?.keyPrefix
    ),
    i18n: i18next,
  };
};
