import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { PiCertificateFill } from "react-icons/pi";
import GTHCImg from "../assets/menu_logo.png";
import { LINKS } from "../i18n/content";

const icones = [
  { href: LINKS.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  { href: LINKS.github, label: "GitHub", Icon: FaGithub },
  { href: LINKS.linktree, label: "Linktree", Icon: SiLinktree },
  { href: LINKS.certificates, label: "Certificates", Icon: PiCertificateFill },
];

// Redes e links externos, na barra do topo e no rodapé.
const Social = ({ className = "", compacto = false }) => (
  <div className={`flex items-center ${compacto ? "gap-3.5 text-lg text-muted" : "gap-5 text-2xl text-ink"} ${className}`}>
    {icones.map(({ href, label, Icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className="transition hover:text-accent"
      >
        <Icon />
      </a>
    ))}
    <a
      href={LINKS.greenTeam}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Green Team Hacker Club"
      title="Green Team Hacker Club"
      className={`transition hover:opacity-80 ${compacto ? "hidden sm:block" : ""}`}
    >
      <img src={GTHCImg} alt="" className={`logo-gthc w-auto ${compacto ? "h-4" : "h-6"}`} />
    </a>
  </div>
);

export default Social;
