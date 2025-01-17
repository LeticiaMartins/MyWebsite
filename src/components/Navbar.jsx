import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { PiCertificateFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center"></div>
      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <a
          href="https://www.linkedin.com/in/leticiamartinsbandeira/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition-transform duration-300 transform hover:scale-110"
        >
          <FaLinkedin className="text-customBlack hover:text-blue-700" />
        </a>
        <a
          href="https://github.com/LeticiaMartins"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transition-transform duration-300 transform hover:scale-110"
        >
          <FaGithub className="text-customBlack hover:text-gray-600" />
        </a>
        <a
          href="https://linktr.ee/LeticiaMartinsCode"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linktree"
          className="transition-transform duration-300 transform hover:scale-110"
        >
          <SiLinktree className="text-customBlack hover:text-green-500" />
        </a>
        <a
          href="https://drive.google.com/drive/folders/1A41_2g9dEj5uYeoc1BaCMRp0KqmsyDML"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Certificates"
          className="transition-transform duration-300 transform hover:scale-110"
        >
          <PiCertificateFill className="text-customBlack hover:text-red-800" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
