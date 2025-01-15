import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiLinktree } from "react-icons/si";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-3xl"> 
        <FaLinkedin className="text-customBlack"/>
        <FaGithub className="text-customBlack"/>
        <SiLinktree className="text-customBlack"/>
    </div>
  </nav>
}

export default Navbar