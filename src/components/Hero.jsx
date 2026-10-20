import profilePic from "../assets/octocat.png";
import { motion } from "motion/react";
import { useLang } from "../i18n/LangContext";

const entrada = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { delay, duration: 0.5 } },
});

const Hero = () => {
  const { t } = useLang();

  return (
    <section id="top" className="flex flex-col-reverse items-center gap-10 pb-16 pt-12 lg:flex-row lg:pb-28 lg:pt-24">
      <div className="flex w-full flex-col items-center text-center lg:w-[58%] lg:items-start lg:text-left">
        <motion.h1
          variants={entrada(0)}
          initial="hidden"
          animate="visible"
          className="font-display text-6xl font-bold leading-none tracking-tighter text-ink sm:text-8xl"
        >
          Leticia Martins
        </motion.h1>
        <motion.p
          variants={entrada(0.5)}
          initial="hidden"
          animate="visible"
          className="grad-texto mt-6 text-2xl tracking-tight sm:text-3xl"
        >
          {t.hero.role}
        </motion.p>
        <motion.p
          variants={entrada(1)}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          {t.hero.text}
        </motion.p>
        <motion.div
          variants={entrada(1.2)}
          initial="hidden"
          animate="visible"
          className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start"
        >
          {t.hero.tags.map((tag) => (
            <span key={tag} className="chip rounded-full px-3.5 py-1.5 text-xs font-semibold">
              {tag}
            </span>
          ))}
        </motion.div>
        <motion.div
          variants={entrada(1.4)}
          initial="hidden"
          animate="visible"
          className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start"
        >
          <a
            href="#projects"
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-[color:var(--bg)] transition hover:opacity-85"
          >
            {t.hero.cta}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-ink/40 px-6 py-3 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
          >
            {t.hero.contact}
          </a>
        </motion.div>
      </div>
      <motion.img
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        src={profilePic}
        alt="Leticia Martins"
        className="w-64 sm:w-80 lg:w-[42%] lg:max-w-md"
      />
    </section>
  );
};

export default Hero;
