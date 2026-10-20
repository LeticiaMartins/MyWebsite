import { createContext, useContext, useEffect, useState } from "react";
import { CONTENT } from "./content";

const LangContext = createContext(null);

const lerSalvo = () => {
  try {
    return localStorage.getItem("lang");
  } catch {
    return null;
  }
};

const idiomaInicial = () => {
  const daUrl = new URLSearchParams(window.location.search).get("lang");
  if (daUrl === "en" || daUrl === "pt") return daUrl;
  const salvo = lerSalvo();
  if (salvo === "en" || salvo === "pt") return salvo;
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
};

export function LangProvider({ children }) {
  const [lang, setLang] = useState(idiomaInicial);
  const t = CONTENT[lang];

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // sem armazenamento: o idioma vale só para esta visita
    }
  }, [lang, t]);

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
