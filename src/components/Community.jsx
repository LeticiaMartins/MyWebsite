import { FiArrowUpRight, FiCalendar, FiMapPin } from "react-icons/fi";
import { FaAws, FaInstagram, FaLinkedin } from "react-icons/fa";
import fotoTime from "../assets/aws/time-vinicius-senger.jpg";
import fotoAuditorio from "../assets/aws/auditorio.jpg";
import fotoPizza from "../assets/aws/pizza.jpg";
import fotoGrupo from "../assets/aws/grupo.jpg";
import fotoVertical from "../assets/aws/auditorio-vertical.jpg";
import selo from "../assets/aws/credly-core-team.png";
import Reveal, { Titulo } from "./Reveal";
import { useLang } from "../i18n/LangContext";
import { LINKS } from "../i18n/content";

// Fotos de cada encontro, na mesma ordem de t.community.events (mais recente primeiro)
const fotosDosEventos = [
  [
    { src: fotoTime, alt: "team", cls: "col-span-2 row-span-2" },
    { src: fotoAuditorio, alt: "auditorium", cls: "" },
    { src: fotoPizza, alt: "pizza", cls: "" },
  ],
  [
    { src: fotoGrupo, alt: "group", cls: "col-span-2 row-span-2" },
    { src: fotoVertical, alt: "vertical", cls: "row-span-2" },
  ],
];

const Community = () => {
  const { t } = useLang();
  const c = t.community;

  return (
    <section id="community" className="py-16 lg:py-24">
      <Titulo className="">
        {c.title}
      </Titulo>
      <Reveal as="p" y={-100} className="mb-14 mt-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        <a href={LINKS.sbgOficial} target="_blank" rel="noopener noreferrer" className="hover:underline hover:underline-offset-4">
          {c.kicker}
        </a>
      </Reveal>

      <div className="grid items-start gap-8 lg:grid-cols-[1fr_300px]">
        <Reveal x={-100} className="space-y-4 text-lg leading-relaxed text-muted">
          <p>{c.intro}</p>
          <p className="text-base text-muted/80">
            {c.captain}:{" "}
            {LINKS.renan ? (
              <a href={LINKS.renan} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-ink underline decoration-accent/50 underline-offset-4 hover:text-accent">
                <FaLinkedin className="text-accent" /> Renan Monteiro
              </a>
            ) : (
              <span className="font-semibold text-ink">Renan Monteiro</span>
            )}
          </p>
        </Reveal>

        <Reveal x={100}>
          <a
            href={LINKS.credly}
            target="_blank"
            rel="noopener noreferrer"
            className="surface group flex items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/25 lg:flex-col lg:text-center"
          >
            <img src={selo} alt={c.badge.title} className="h-24 w-24 shrink-0 lg:h-36 lg:w-36" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{c.role}</p>
              <p className="mt-1 font-display text-xl font-semibold text-ink">{c.badge.title}</p>
              <p className="mt-1 text-sm text-muted">{c.badge.issuer}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                {c.badge.link} <FiArrowUpRight />
              </span>
            </div>
          </a>
        </Reveal>
      </div>

      <h3 className="mb-6 mt-16 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {c.eventsTitle}
        <span className="h-px flex-1 bg-line/20" />
      </h3>
      <div className="space-y-8">
        {c.events.map((ev, i) => (
          <Reveal key={ev.title} y={50} duration={1} className="surface grid gap-6 overflow-hidden rounded-2xl p-4 md:p-6 lg:grid-cols-2 lg:gap-10">
            <div className={`grid auto-rows-[110px] gap-2 sm:auto-rows-[150px] ${i === 0 ? "grid-cols-3" : "grid-cols-3"}`}>
              {fotosDosEventos[i].map((f) => (
                <img
                  key={f.alt}
                  src={f.src}
                  alt={c.photosAlt[f.alt]}
                  loading="lazy"
                  className={`h-full w-full rounded-xl object-cover ${f.cls}`}
                />
              ))}
            </div>
            <div className="flex flex-col justify-center lg:pr-4">
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted/80">
                <span className="inline-flex items-center gap-1.5">
                  <FiCalendar /> {ev.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <FiMapPin /> {ev.place}
                </span>
              </div>
              <h4 className="mt-3 font-display text-3xl font-semibold text-ink">{ev.title}</h4>
              <p className="mt-3 leading-relaxed text-muted">{ev.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <h3 className="mb-6 mt-16 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {c.postsTitle}
        <span className="h-px flex-1 bg-line/20" />
      </h3>
      <Reveal y={50} duration={1} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {c.posts.map((post) => (
          <a
            key={post.url}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="surface group flex items-start gap-3 rounded-xl p-4 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20"
          >
            <FaLinkedin className="mt-0.5 shrink-0 text-xl text-accent" />
            <div className="min-w-0 flex-1">
              <p className="font-medium leading-snug text-ink">{post.label}</p>
              <p className="mt-1 text-sm text-muted/80">{post.date}</p>
            </div>
            <FiArrowUpRight className="shrink-0 text-muted transition group-hover:text-accent" />
          </a>
        ))}
      </Reveal>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href={LINKS.sbgOficial}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-[color:var(--bg)] transition hover:opacity-85"
        >
          <FaAws className="text-lg" /> {c.official} <FiArrowUpRight />
        </a>
        <a
          href={LINKS.instagramSbg}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-ink/40 px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
        >
          <FaInstagram className="text-lg" /> {c.instagram} · @aws_student_buildergroup.ufabc
        </a>
      </div>
    </section>
  );
};

export default Community;
