import project1 from "../assets/projects/data.jpg";
import project2 from "../assets/projects/medium.png";
import project3 from "../assets/projects/spotify.jpg";
import { motion } from "framer-motion";

const Projects = () => {
  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="border-b border-transparent pb-4 text-customBlack">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-display text-customBlack font-semibold tracking-tighter"
      >
        Projects
      </motion.h2>
      <div className="mb-8 flex flex-wrap lg:justify-center">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title:
                "Google Data Analytics Professional Certificate Divvy Case Study",
              img: project1,
              link: "https://medium.com/@leticiamartinsbandeira/google-data-analytics-professional-certificate-divvy-case-study-21b67d11c2b6",
              description: "",
            },
            {
              title: "Medium Texts",
              img: project2,
              link: "https://medium.com/@leticiamartinsbandeira",
              description:
                "Explore articles on tech, programming, and data science, crafted to inspire and inform.",
            },
            {
              title: "Music Player",
              img: project3,
              link: "",
              description: `Currently under development.

                Stay tuned for updates!`,
            },
          ].map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
            >
              <motion.div
                key={index}
                variants={projectVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: index * 0.3 }}
              >
                <div className="h-96 w-72">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={project.img}
                    alt={project.title}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-display text-2xl font-semibold text-white">
                    {project.title}
                  </h1>
                  <p className="font-body mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-pre-line">
                    {project.description}
                  </p>
                  <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-body text-sm capitalize text-white shadow shadow-black/60">
                    See More
                  </button>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
