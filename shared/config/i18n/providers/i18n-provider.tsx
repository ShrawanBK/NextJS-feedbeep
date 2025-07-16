"use client";

import { I18nextProvider as Provider } from "react-i18next";

import i18next from "../i18next";

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider i18n={i18next}>{children}</Provider>;
}
