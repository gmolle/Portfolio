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

const S = {
  kw: "text-sky-400/80",
  id: "text-emerald-400/75",
  prop: "text-violet-300/75",
  str: "text-amber-200/70",
  punct: "text-slate-500",
};

function CodeWindow() {
  return (
    <div className="w-full max-w-md rounded-xl overflow-hidden border border-gray-700/90 bg-[#1e2228] shadow-lg shadow-gray-900/25 ring-1 ring-black/20">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-800/90 bg-[#252932]">
        <span className="flex gap-1.5 shrink-0" aria-hidden>
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/85" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2d]/85" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/85" />
        </span>
        <div className="flex-1 min-w-0 flex items-center justify-center">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#1e2228] border border-gray-700/80 max-w-full">
            <svg
              className="w-3.5 h-3.5 text-slate-500 shrink-0"
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
            <span className="text-xs font-medium text-slate-400 truncate">
              developer.js
            </span>
          </div>
        </div>
        <span className="w-[52px] shrink-0" aria-hidden />
      </div>
      <pre className="p-5 overflow-x-auto">
        <code className="font-mono text-sm leading-relaxed text-slate-400 block whitespace-pre">
          <span className={S.kw}>const</span>{" "}
          <span className={S.id}>developer</span>
          <span className={S.punct}> = {"{"}</span>
          {"\n"}
          <span className={S.prop}> name</span>
          <span className={S.punct}>: </span>
          <span className={S.str}>{`"Garrett Molle"`}</span>
          <span className={S.punct}>,</span>
          {"\n"}
          <span className={S.prop}> stack</span>
          <span className={S.punct}>: [</span>
          <span className={S.str}>{`"HTML"`}</span>
          <span className={S.punct}>, </span>
          <span className={S.str}>{`"CSS"`}</span>
          <span className={S.punct}>, </span>
          <span className={S.str}>{`"JavaScript"`}</span>
          <span className={S.punct}>,</span>
          {"\n"}
          <span className={S.punct}> </span>
          <span className={S.str}>{`"React"`}</span>
          <span className={S.punct}>, </span>
          <span className={S.str}>{`"Tailwind"`}</span>
          <span className={S.punct}>, </span>
          <span className={S.str}>{`"Node.js"`}</span>
          <span className={S.punct}>, </span>
          <span className={S.str}>{`"Java"`}</span>
          <span className={S.punct}>],</span>
          {"\n"}
          <span className={S.prop}> passion</span>
          <span className={S.punct}>: </span>
          <span className={S.str}>{`"Building clean, responsive UIs"`}</span>
          <span className={S.punct}>,</span>
          {"\n"}
          <span className={S.prop}> lookingFor</span>
          <span className={S.punct}>: </span>
          <span className={S.str}>{`"Innovative team & real impact"`}</span>
          {"\n"}
          <span className={S.punct}>{"};"}</span>
        </code>
      </pre>
    </div>
  );
}

const About = () => {
  const skipAnimations = useHomeAnimations();

  return (
    <section
      id="about"
      className="py-20 scroll-mt-20 bg-gradient-to-br from-gray-50 to-gray-100 font-manrope"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            About
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 lg:items-start">
          <motion.div
            className="w-full lg:max-w-xl shrink-0"
            initial={skipAnimations ? "visible" : "hidden"}
            whileInView={skipAnimations ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            variants={aboutVariants}
            transition={skipAnimations ? { duration: 0 } : undefined}
          >
            <p className="text-gray-800 text-[17px] leading-[1.75] mb-5">
              I'm a Full Stack Developer with a strong emphasis on frontend
              technologies, specializing in React, Redux, and modern JavaScript
              frameworks.
            </p>
            <p className="text-gray-600 text-[17px] leading-[1.75] mb-8">
              While I'm comfortable working across the entire stack, my passion
              lies in crafting intuitive, responsive user interfaces that
              prioritize accessibility, performance, and a seamless experience.
              I thrive on clean, maintainable code and bringing thoughtful
              design to life through modern development practices.
            </p>
            <a
              href={resumePDF}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl shadow-sm shadow-indigo-900/15 hover:bg-indigo-700 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
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

          <motion.div
            className="w-full lg:flex-1 flex lg:justify-end"
            initial={skipAnimations ? "visible" : "hidden"}
            whileInView={skipAnimations ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            variants={codeVariants}
            transition={skipAnimations ? { duration: 0 } : undefined}
          >
            <CodeWindow />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
