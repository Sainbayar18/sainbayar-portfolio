"use client";
import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { Locale, Localized } from "@/lib/portfolio";
const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);
  window.addEventListener("portfolio-preference", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("portfolio-preference", callback);
  };
};
const sessionPreferences: Record<string, string> = {};
function readPreference(key: string, fallback: string) {
  try {
    return localStorage.getItem(key) || sessionPreferences[key] || fallback;
  } catch {
    return sessionPreferences[key] || fallback;
  }
}
function savePreference(key: string, value: string) {
  sessionPreferences[key] = value;
  try {
    localStorage.setItem(key, value);
  } catch {
    /* Storage can be disabled. */
  }
  window.dispatchEvent(new Event("portfolio-preference"));
}
const PreferencesContext = createContext({
  locale: "en" as Locale,
  theme: "dark",
  toggleLocale: () => {},
  toggleTheme: () => {},
  t: (value: Localized) => value.en,
});
export function Preferences({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribe,
    () =>
      readPreference("portfolio-language-v1", "en") === "ja" ? "ja" : "en",
    () => "en",
  ) as Locale;
  const theme = useSyncExternalStore(
    subscribe,
    () =>
      readPreference("portfolio-theme-v1", "dark") === "light"
        ? "light"
        : "dark",
    () => "dark",
  );
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dataset.theme = theme;
  }, [locale, theme]);
  return (
    <PreferencesContext.Provider
      value={{
        locale,
        theme,
        toggleLocale: () =>
          savePreference(
            "portfolio-language-v1",
            locale === "en" ? "ja" : "en",
          ),
        toggleTheme: () =>
          savePreference(
            "portfolio-theme-v1",
            theme === "dark" ? "light" : "dark",
          ),
        t: (value) => value[locale],
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}
export const usePreferences = () => useContext(PreferencesContext);

export function SkipLink() {
  const { t } = usePreferences();
  return (
    <a href="#main-content" className="skip-link">
      {t({ en: "Skip to content", ja: "メインコンテンツに移動" })}
    </a>
  );
}
