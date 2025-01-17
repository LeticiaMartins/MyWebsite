import { Typography } from "@material-tailwind/react";

export function Footer() {
  return (
    <footer className="px-8 py-28">
      <div className="container mx-auto flex flex-col items-center">
        <Typography
          color="blue-gray"
          className="text-center mt-6 text-gray-800"
        >
          <h3 className="font-display font-bold text-2xl mb-2">Get in Touch</h3>
          <p className="font-body">lemartins.flag@gmail.com</p>
        </Typography>
      </div>
    </footer>
  );
}
export default Footer;