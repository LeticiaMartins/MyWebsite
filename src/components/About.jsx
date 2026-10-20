import aboutImg from "../assets/about.jpg";
import Reveal, { Titulo } from "./Reveal";
import { useLang } from "../i18n/LangContext";

const About = () => {
  const { t } = useLang();

  return (
    <section id="about" className="py-16 lg:py-24">
      <Titulo>
        {t.about.title}
      </Titulo>
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
        <Reveal x={-100} className="w-3/4 max-w-sm lg:w-5/12">
          <img className="w-full rounded-2xl shadow-2xl shadow-black/25" src={aboutImg} alt={t.about.imageAlt} />
        </Reveal>
        <Reveal x={100} className="max-w-xl space-y-5 text-lg leading-relaxed text-muted lg:w-7/12">
          {t.about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default About;
