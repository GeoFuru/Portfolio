import { createContext, useContext } from "react";

import {
  translations,
  type Language,
} from "./translations";

export interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof translations)[Language];
}

export const LanguageContext =
  createContext<LanguageContextValue | null>(null);

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider",
    );
  }

  return context;
}
