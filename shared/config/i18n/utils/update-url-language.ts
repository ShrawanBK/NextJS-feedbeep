import type { ILanguageValue } from "../settings";

export const updateUrlLanguage = (
  lng: ILanguageValue,
  oldLng: ILanguageValue | undefined
) => {
  const url = new URL(window.location.href);

  const updatedPathname = url.pathname.replace(`/${oldLng}`, `/${lng}`);

  const updatedUrl = new URL(updatedPathname, window.location.origin);

  console.log("updatedUrl", updatedUrl.toString());
  window.history.replaceState({}, "", updatedUrl.toString());
};
