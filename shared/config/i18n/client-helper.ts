"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";

import i18next from "./i18next";
import { updateUrlLanguage } from "./utils/update-url-language";

import type { ILanguageValue } from "./settings";

const runsOnServerSide = typeof window === "undefined";

export function useTranslate(ns?: string) {
  const params = useParams();
  const lng = params?.lng as string | undefined;

  if (!lng) {
    throw new Error("useTranslate is only available inside /app/[lng]");
  }

  const { t, i18n } = useTranslation(ns);

  const initialLng = useMemo(
    () =>
      i18next.resolvedLanguage
        ? (i18next.resolvedLanguage as ILanguageValue)
        : undefined,
    []
  );

  const [activeLng, setActiveLng] = useState<ILanguageValue | undefined>(
    initialLng
  );

  if (runsOnServerSide && initialLng !== lng) {
    i18next.changeLanguage(lng);
  }

  const onChangeLang = (newLng: ILanguageValue) => {
    i18n.changeLanguage(newLng);
    setActiveLng(newLng);
    updateUrlLanguage(newLng, activeLng);
  };

  return {
    t,
    i18n,
    activeLng,
    onChangeLang,
  };
}
