import { FiArrowUpRight } from "react-icons/fi";
import imgJoga from "../assets/projects/joga.jpg";
import imgTechRack from "../assets/projects/techrack.jpg";
import imgMillanea from "../assets/projects/millanea.jpg";
import imgDivvy from "../assets/projects/data.jpg";
import imgMedium from "../assets/projects/medium.png";
import imgKlondike from "../assets/projects/klondike.jpg";
import Reveal, { Titulo } from "./Reveal";
import { useLang } from "../i18n/LangContext";

const destaques = {
  personal: [
    { key: "joga", img: imgJoga, link: "https://jogaobuque.com.br", host: "jogaobuque.com.br" },
    { key: "techrack", img: imgTechRack, link: "https://tecnoachados.vercel.app", host: "tecnoachados.vercel.app" },
  ],
  freelance: [{ key: "millanea", img: imgMillanea, link: "https://millanea-site.vercel.app", host: "millanea-site.vercel.app" }],
};

const estudos = [
  {
    key: "divvy",
    img: imgDivvy,
    link: "https://medium.com/@leticiamartinsbandeira/google-data-analytics-professional-certificate-divvy-case-study-21b67d11c2b6",
  },
  { key: "medium", img: imgMedium, link: "https://medium.com/@leticiamartinsbandeira" },
  { key: "klondike", img: imgKlondike, link: "" },
];

const Rotulo = ({ children }) => (
  <h3 className="mb-6 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
    {children}
    <span className="h-px flex-1 bg-line/20" />
  </h3>
);

const CardDestaque = ({ p, item, visit, largo, i = 0 }) => (
  <Reveal y={50} duration={1} delay={i * 0.3}>
    <a
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`surface group flex h-full flex-col overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 ${
        largo ? "md:flex-row" : ""
      }`}
    >
      <div className={`overflow-hidden ${largo ? "md:w-1/2" : ""}`}>
        <img
          src={p.img}
          alt={item.title}
          loading="lazy"
          className="aspect-[16/10] h-full w-full object-cover object-top transition duration-500 group-hover:rotate-3 group-hover:scale-125"
        />
      </div>
      <div className={`flex flex-1 flex-col p-6 ${largo ? "md:w-1/2 md:p-8" : ""}`}>
        <div className="flex items-baseline justify-between gap-3">
          <h4 className="font-display text-2xl font-semibold text-ink">{item.title}</h4>
          <span className="text-sm text-muted/80">{item.year}</span>
        </div>
        <p className="mt-3 leading-relaxed text-muted">{item.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="chip rounded-md px-2.5 py-1 text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-accent">
          {visit} <span className="font-normal text-muted/80">· {p.host}</span>
          <FiArrowUpRight className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  </Reveal>
);

const Projects = () => {
  const { t } = useLang();
  const tp = t.projects;

  return (
    <section id="projects" className="py-16 lg:py-24">
      <Titulo>
        {tp.title}
      </Titulo>

      <Rotulo>{tp.personal}</Rotulo>
      <div className="grid gap-6">
        {destaques.personal.map((p, i) => (
          <CardDestaque key={p.key} p={p} item={tp.items[p.key]} visit={tp.visit} largo i={i} />
        ))}
      </div>

      <div className="mt-14">
        <Rotulo>{tp.freelance}</Rotulo>
        <div className="grid gap-6">
          {destaques.freelance.map((p) => (
            <CardDestaque key={p.key} p={p} item={tp.items[p.key]} visit={tp.visit} largo />
          ))}
        </div>
      </div>

      <div className="mt-14">
        <Rotulo>{tp.more}</Rotulo>
        <div className="grid gap-4 sm:grid-cols-3">
          {estudos.map((p, i) => {
            const item = tp.items[p.key];
            const Tag = p.link ? "a" : "div";
            return (
              <Reveal key={p.key} y={50} duration={1} delay={i * 0.3}>
                <Tag
                  {...(p.link ? { href: p.link, target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="surface group flex h-full items-center gap-4 rounded-xl p-3 transition hover:shadow-lg hover:shadow-black/20"
                >
                  <img src={p.img} alt="" loading="lazy" className="h-16 w-16 shrink-0 rounded-lg object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110" />
                  <div className="min-w-0">
                    <p className="font-semibold text-ink">{item.title}</p>
                    <p className="text-sm leading-snug text-muted">{item.description}</p>
                    <p className="mt-1 text-xs font-semibold text-accent">{p.link ? `${tp.read} ↗` : tp.soon}</p>
                  </div>
                </Tag>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
