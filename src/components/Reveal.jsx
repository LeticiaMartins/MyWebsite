import { motion } from "motion/react";

// Entrada do bloco quando ele aparece na tela, com os mesmos movimentos do site original:
// títulos descem (y: -100), colunas entram pelos lados (x: ±100) e cards sobem (y: 50).
const Reveal = ({ children, delay = 0, x = 0, y = 0, duration = 0.5, className = "", as = "div" }) => {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </Tag>
  );
};

export const Titulo = ({ children, className = "mb-14", duration = 0.5 }) => (
  <Reveal as="h2" y={-100} duration={duration} className={`titulo-secao ${className}`}>
    {children}
  </Reveal>
);

export default Reveal;
