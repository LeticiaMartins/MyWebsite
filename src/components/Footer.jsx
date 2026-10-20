import { FiMail } from "react-icons/fi";
import { useLang } from "../i18n/LangContext";
import { LINKS } from "../i18n/content";
import Social from "./Social";

export function Footer() {
  const { t } = useLang();

  return (
    <footer id="contact" className="mt-10 border-t border-line/10 px-4 py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <h2 className="titulo-secao">{t.contact.title}</h2>
        <p className="mt-4 text-lg text-muted">{t.contact.text}</p>
        <a
          href={`mailto:${LINKS.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-[color:var(--bg)] transition hover:opacity-85"
        >
          <FiMail /> {LINKS.email}
        </a>
        <Social className="mt-8 justify-center" />
        <p className="mt-12 text-sm text-muted/70">© {new Date().getFullYear()} {t.contact.rights}</p>
      </div>
    </footer>
  );
}
export default Footer;
