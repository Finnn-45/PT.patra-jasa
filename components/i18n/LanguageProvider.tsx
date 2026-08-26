"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translate, type Lang } from "@/lib/i18n";

type Vars = Record<string, string | number>;

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string, vars?: Vars) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "patra-jasa-lang";

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "id";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "id" ? stored : "id";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");

  useEffect(() => {
    setLangState(getInitialLang());
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable — ignore */
    }
  };

  const t = (key: string, vars?: Vars) => translate(lang, key, vars);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useI18n must be used within <LanguageProvider>");
  }
  return ctx;
}