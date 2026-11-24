"use client";

import React, { createContext, useContext, useSyncExternalStore, useCallback } from "react";
import { Language, BilingualString } from "@/data/portfolio";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (bilingual: BilingualString) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "id",
  setLang: () => {},
  t: (bilingual: BilingualString) => bilingual.id,
});

let listeners: Array<() => void> = [];
function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(callback: () => void) {
  listeners = [...listeners, callback];
  window.addEventListener("storage", callback);
  return () => {
    listeners = listeners.filter((l) => l !== callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): Language {
  try {
    const saved = localStorage.getItem("portfolio_lang");
    return saved === "en" ? "en" : "id";
  } catch {
    return "id";
  }
}

function getServerSnapshot(): Language {
  return "id";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLang = useCallback((newLang: Language) => {
    try {
      localStorage.setItem("portfolio_lang", newLang);
    } catch {
      // ignore
    }
    emitChange();
  }, []);

  const t = useCallback(
    (bilingual: BilingualString): string => {
      return bilingual[lang] || bilingual.id;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
