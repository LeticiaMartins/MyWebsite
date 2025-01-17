import { Typography } from "@material-tailwind/react";
const links = ["Company", "About Us", "Team", "Products", "Blog", "Pricing"];
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="w-full">
      <div className="flex flex-col">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#740806"
            fill-opacity="1"
            d="M0,32L30,69.3C60,107,120,181,180,213.3C240,245,300,235,360,218.7C420,203,480,181,540,154.7C600,128,660,96,720,96C780,96,840,128,900,117.3C960,107,1020,53,1080,58.7C1140,64,1200,128,1260,154.7C1320,181,1380,171,1410,165.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
    </footer>
  );
}
export default Footer;
