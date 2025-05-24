import { motion } from "motion/react";

const About = () => (
  <section
    id="about"
    className="pb-20 pt-30 bg-gradient-to-b from-gray-50 to-gray-100 font-manrope"
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
      {/* Left: Text Content */}
      <motion.div
        className="w-full lg:w-2/3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
      >
        <div className=" bg-white rounded-xl shadow-xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              I'm a passionate Frontend Developer specializing in React, Redux,
              and modern JavaScript frameworks. I build intuitive, responsive
              user interfaces with a focus on accessibility and performance.
            </p>
          </div>

          {/* Download Resume Button */}
          <div className="mt-6">
            <a
              href="src/assets/Garrett-Molle-Resume.pdf"
              download
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>

      {/* Right: Code Snippet Card */}
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-start min-h-[300px] lg:min-h-full flex-col items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          <div className="bg-gray-900 text-green-400 font-mono p-6 rounded-xl shadow-lg text-sm leading-relaxed w-full max-w-xs sm:max-w-sm lg:max-w-md h-full flex flex-col justify-between">
            <pre className="overflow-x-auto ">
              <code>
                {`const developer = {
  name: "Garrett Molle",
  stack: ["HTML", "CSS", "JavaScript",
    "React", "Tailwind", "Node.js", "Java"],
  passion: "Building clean, responsive UIs",
  lookingFor: "Innovative team & real impact"
};`}
              </code>
            </pre>

            <div className="mt-6 text-gray-500 text-xs">
              Constantly learning and evolving in the tech field. Excited to
              contribute to impactful projects.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
