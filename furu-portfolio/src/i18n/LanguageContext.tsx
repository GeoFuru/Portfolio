import {
  useEffect,
  useState,
  type ReactNode,
} from "react";

import {
  translations,
  type Language,
} from "./translations";
import { LanguageContext } from "./useLanguage";

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const [language, setLanguageState] =
    useState<Language>(() => {
      const saved =
        localStorage.getItem("furu-language");

      return saved === "es" ? "es" : "en";
    });

  function setLanguage(language: Language) {
    setLanguageState(language);
    localStorage.setItem("furu-language", language);
  }

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
