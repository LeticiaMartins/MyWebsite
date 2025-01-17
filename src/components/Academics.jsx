import { motion } from "motion/react";

const Academics = () => {
  return (
    <div className="border-b border-transparent pb-4 text-customBlack">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-display text-customBlack font-semibold tracking-tighter"
      >
        Academics
      </motion.h2>
      <div className="flex justify-center">
        <div className="max-w-4xl w-full">
          <ol className="relative border-s border-red-800">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-red-800 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-semibold leading-none text-gray-400">
                2024 to Present
              </time>
              <h3 className="text-lg font-semibold text-customBlack">
              Bachelor's Degree in Computer Science - Federal University of ABC
                (UFABC), São Paulo, Brazil
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500">
                Software development, Data Structures
                and Algorithms, Operating Systems.
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-red-800 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-semibold leading-none text-gray-400">
                2021 to Present
              </time>
              <h3 className="text-lg font-semibold text-customBlack">
              Bachelor's Degree in Science and Technology (BC&T) - Federal University of ABC
                (UFABC), São Paulo, Brazil
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500">
                Science and Technology, Mathematics, Chemistry, Physics, Quantum physics.
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-red-800 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-semibold leading-none text-gray-400">
                March/2024
              </time>
              <h3 className="text-lg font-semibold text-customBlack">
                AWS Cloud Practitioner Essentials
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500">
                Exam Prep Standard Course: AWS Certified Cloud Practitioner
                (CLF-C02 - Portuguese (Brazil))
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-red-800 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-semibold leading-none text-gray-400">
                March/2024
              </time>
              <h3 className="text-lg font-semibold text-customBlack">
                Google Data Analytics Professional Certificate
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500">
                Completed eight courses, developed by Google, consisting of
                practical activities and designed to prepare students for
                entry-level roles in data analysis. The courses are proficient
                in tools and platforms, including spreadsheets, SQL, Tableau,
                and R. They teach how to prepare, process, analyze, and share
                data for informed action.
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-red-800 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-semibold leading-none text-gray-400">
                2022
              </time>
              <h3 className="text-lg font-semibold text-customBlack">
                Introduction to Management 3.0
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500">
                Agile Methodologies · Scrum
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-red-800 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-semibold leading-none text-gray-400">
                2018
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Web FullStack Course
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                In the FullStack Web course I had my first contact with
                programming, learning about HTML, CSS, JavaScript, MySQL,
                GitHub, BootStrap and PHP.
              </p>
            </li>
            <li class="ms-4">
              <div class="absolute w-3 h-3 bg-red-800  rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time class="mb-1 text-sm font-semibold leading-none text-gray-400">
                2017 - 2018
              </time>
              <h3 class="text-lg font-semibold text-gray-900">
                Exchange Student Program - Gilmer County High School, West
                Virginia, USA
              </h3>
              <p class="text-base font-normal text-gray-500">
                Extracurricular Activities: Track & Field and Robotics
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Academics;
