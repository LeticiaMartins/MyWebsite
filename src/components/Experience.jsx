import Reveal, { Titulo } from "./Reveal";
import { useLang } from "../i18n/LangContext";

const Experience = () => {
  const { t } = useLang();

  return (
    <section id="experience" className="py-16 lg:py-24">
      <Titulo>
        {t.experience.title}
      </Titulo>
      <div className="mx-auto max-w-4xl space-y-10">
        {t.experience.items.map((exp) => (
          <div key={exp.company} className="flex flex-col gap-2 lg:flex-row lg:gap-10">
            <Reveal as="p" x={-100} duration={1} className="text-sm font-semibold text-muted/80 lg:w-1/4 lg:pt-1">
              {exp.year}
            </Reveal>
            <Reveal x={100} duration={1} className="lg:w-3/4">
              <h3 className="font-semibold text-ink">
                {exp.role} <span className="text-muted/60">·</span>{" "}
                <span className="text-accent">{exp.company}</span>
              </h3>
              <p className="mt-2 leading-relaxed text-muted">{exp.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="chip rounded-md px-2.5 py-1 text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
