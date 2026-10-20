import { RiReactjsLine, RiAngularjsFill } from "react-icons/ri";
import { SiGo, SiGooglecloud, SiNextdotjs, SiPostgresql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { motion } from "motion/react";
import Reveal, { Titulo } from "./Reveal";
import { useLang } from "../i18n/LangContext";

const flutuar = (duration) => ({
  initial: { y: -8 },
  animate: {
    y: [8, -8],
    transition: { duration, ease: "linear", repeat: Infinity, repeatType: "reverse" },
  },
});

const icones = [
  { Icon: SiGo, nome: "Go", d: 5 },
  { Icon: FaAws, nome: "AWS", d: 2 },
  { Icon: RiReactjsLine, nome: "React", d: 2.5 },
  { Icon: SiNextdotjs, nome: "Next.js", d: 3.5 },
  { Icon: SiPostgresql, nome: "PostgreSQL", d: 4.5 },
  { Icon: RiAngularjsFill, nome: "Angular", d: 3 },
  { Icon: SiGooglecloud, nome: "Google Cloud", d: 6 },
  { Icon: FaSquareJs, nome: "JavaScript", d: 4 },
];

const Technologies = () => {
  const { t } = useLang();

  return (
    <section className="py-16 lg:py-24">
      <Titulo duration={1.5}>
        {t.technologies.title}
      </Titulo>
      <Reveal x={-100} duration={1.5} className="flex flex-wrap items-center justify-center gap-4">
        {icones.map(({ Icon, nome, d }) => (
          <motion.div
            key={nome}
            variants={flutuar(d)}
            initial="initial"
            animate="animate"
            title={nome}
            className="surface rounded-2xl p-4"
          >
            <Icon className="text-6xl text-ink" aria-label={nome} />
          </motion.div>
        ))}
      </Reveal>
    </section>
  );
};

export default Technologies;
