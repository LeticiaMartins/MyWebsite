import { FiSun, FiMoon } from "react-icons/fi";
import { useState } from "react";
import { useLang } from "../i18n/LangContext";
import Social from "./Social";

const secoes = ["about", "experience", "projects", "community", "contact"];

const aplicarTema = (escuro) => {
  document.documentElement.dataset.fundo = escuro ? "b" : "a";
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", escuro ? "#121317" : "#faf6f1");
  try {
    localStorage.setItem("tema", escuro ? "escuro" : "claro");
  } catch {
    // sem armazenamento: o tema vale só para esta visita
  }
};

const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const [escuro, setEscuro] = useState(() => document.documentElement.dataset.fundo !== "a");
  const trocarTema = () => {
    aplicarTema(!escuro);
    setEscuro(!escuro);
  };

  return (
    <header className="sticky top-0 z-40 barra backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-8 md:px-12">
        <a href="#top" className="font-display text-xl font-bold tracking-tight text-ink">
          LM
        </a>

        <ul className="hidden items-center gap-7 text-sm text-muted lg:flex">
          {secoes.map((s) => (
            <li key={s}>
              <a href={`#${s}`} className="transition-colors hover:text-ink">
                {t.nav[s]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 text-sm text-muted">
          <Social compacto className="mr-2 border-r border-line/15 pr-3" />
          <button
            type="button"
            onClick={trocarTema}
            aria-label={escuro ? t.nav.light : t.nav.dark}
            title={escuro ? t.nav.light : t.nav.dark}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full transition hover:text-ink"
          >
            {escuro ? <FiSun /> : <FiMoon />}
          </button>
          <div role="group" aria-label={t.nav.language} className="flex items-center font-medium">
            {["en", "pt"].map((l, i) => (
              <span key={l} className="flex items-center">
                {i > 0 && <span className="text-muted/40">/</span>}
                <button
                  type="button"
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`px-1.5 py-1 uppercase transition-colors ${lang === l ? "text-ink" : "hover:text-ink"}`}
                >
                  {l}
                </button>
              </span>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
