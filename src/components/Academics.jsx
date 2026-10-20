import Reveal, { Titulo } from "./Reveal";
import { useLang } from "../i18n/LangContext";

const Academics = () => {
  const { t } = useLang();

  return (
    <section id="academics" className="py-16 lg:py-24">
      <Titulo>
        {t.academics.title}
      </Titulo>
      <ol className="relative mx-auto max-w-4xl border-s border-accent/60">
        {t.academics.items.map((item) => (
          <Reveal as="li" x={100} duration={1} key={item.title} className="mb-10 ms-6 last:mb-0">
            <span className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-[color:var(--bg)] bg-accent" />
            <time className="text-sm font-semibold text-muted/80">{item.time}</time>
            <h3 className="mt-1 text-lg font-semibold text-ink">{item.title}</h3>
            <p className="mt-1 text-muted">{item.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
};

export default Academics;
