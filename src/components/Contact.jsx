import { CONTACT } from "../constants";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center pt-20 pb-20">
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg bg-white/35 backdrop-blur-lg rounded-lg shadow-lg pt-8 pb-8"
      style={{
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(6.3px)',
        WebkitBackdropFilter: 'blur(6.3px)',
      }}
    >
      <h2 className="mb-6 text-center text-4xl sm:text-2xl font-display font-bold text-black tracking-tighter">
        Get in Touch
      </h2>
      <div className="text-center">
        <p
          className="text-lg sm:text-sm text-black hover:text-black transition-colors"
        >
          {CONTACT.email}
        </p>
      </div>
    </motion.div>
  </div>
  );
};

export default Contact;
