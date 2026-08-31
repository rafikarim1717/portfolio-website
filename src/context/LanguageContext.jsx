"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(undefined);

const STORAGE_KEY = "lang";

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  // Baca preferensi tersimpan setelah mount (biar gak mismatch sama HTML dari server).
  // Sengaja setState di effect: localStorage cuma ada di browser, server selalu render
  // default "id" dulu, baru dikoreksi sekali di client — bukan derived state biasa.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (stored === "en" || stored === "id") setLang(stored);
    } catch {
      // localStorage gak selalu available (private mode, dll) — abaikan aja
    }
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === "id" ? "en" : "id";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore
      }
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
