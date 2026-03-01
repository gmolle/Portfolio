import { motion } from "motion/react";
import resumePDF from "../assets/Garrett-Molle-Resume-SWE.pdf";
import { useHomeAnimations } from "../context/HomeAnimationsContext";

const aboutVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const codeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
  },
};

const About = () => {
  const skipAnimations = useHomeAnimations();

  return (
    <section
      id="about"
      className="py-20 scroll-mt-20 bg-gradient-to-b from-gray-50 to-gray-100 font-manrope"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 tracking-tight">
          About
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* Left: Bio */}
          <motion.div
            className="w-full lg:max-w-xl"
            initial={skipAnimations ? "visible" : "hidden"}
            whileInView={skipAnimations ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            variants={aboutVariants}
            transition={skipAnimations ? { duration: 0 } : undefined}
          >
            <p className="text-gray-700 text-[17px] leading-[1.7] mb-6">
              I'm a Full Stack Developer with a strong emphasis on frontend
              technologies, specializing in React, Redux, and modern JavaScript
              frameworks.
            </p>
            <p className="text-gray-700 text-[17px] leading-[1.7] mb-8">
              While I'm comfortable working across the entire stack, my passion
              lies in crafting intuitive, responsive user interfaces that
              prioritize accessibility, performance, and a seamless experience.
              I thrive on clean, maintainable code and bringing thoughtful
              design to life through modern development practices.
            </p>
            <a
              href={resumePDF}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.75M17 14v6m0 0l3-3m-3 3l3-3"
                />
              </svg>
              Download resume
            </a>
          </motion.div>

          {/* Right: Code snippet — aligned to right edge of content */}
          <motion.div
            className="w-full lg:flex-1 flex lg:justify-end"
            initial={skipAnimations ? "visible" : "hidden"}
            whileInView={skipAnimations ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            variants={codeVariants}
            transition={skipAnimations ? { duration: 0 } : undefined}
          >
            <div className="w-full lg:max-w-md bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
              {/* IDE-style tab bar: inactive tabs + active tab */}
              <div className="flex items-end border-b border-gray-800 bg-gray-800/60">
                <div className="flex items-center gap-1.5 px-3 pt-2 pb-1.5 border border-b-0 border-gray-700 rounded-t-lg bg-gray-900 -mb-px">
                  <svg
                    className="w-3.5 h-3.5 text-gray-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  <span className="text-gray-400 text-xs font-medium">
                    developer.js
                  </span>
                  <button
                    type="button"
                    className="ml-1.5 p-0.5 rounded hover:bg-gray-700 text-gray-500 hover:text-gray-300 transition-colors"
                    aria-label="Close tab"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <pre className="p-5 text-green-400/90 font-mono text-sm leading-relaxed overflow-x-auto">
                <code>{`const developer = {
  name: "Garrett Molle",
  stack: ["HTML", "CSS", "JavaScript",
    "React", "Tailwind", "Node.js", "Java"],
  passion: "Building clean, responsive UIs",
  lookingFor: "Innovative team & real impact"
};`}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
