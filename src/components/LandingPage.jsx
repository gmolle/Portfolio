import { ReactTyped } from "react-typed";
import useScroll from "../hooks/useScroll";
import { motion } from "motion/react";
import { useHomeAnimations } from "../context/HomeAnimationsContext";

const LandingPage = () => {
  const { handleScroll } = useScroll();
  const skipAnimations = useHomeAnimations();

  return (
    <section
      className="font-manrope relative w-full h-screen bg-cover bg-center flex justify-center items-center text-white px-6 sm:px-12"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg')",
      }}
    >
      {/* Blurred Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur-md"></div>

      <motion.div
        initial={skipAnimations ? "visible" : "hidden"}
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0, transition: { duration: skipAnimations ? 0 : 1 } },
        }}
        className="relative z-10 text-left max-w-4xl"
      >
        <h1 className="font-sour-gummy text-5xl sm:text-6xl font-bold leading-tight mb-4">
          Hi, I'm Garrett Molle
        </h1>

        <div className="font-patrick-hand text-4xl sm:text-5xl leading-tight mb-6 inline-block">
          I’m a{" "}
          <motion.span
            className="text-indigo-500"
            animate={{
              color: ["#6366F1", "#8B5CF6", "#A78BFA", "#6366F1"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ReactTyped
              strings={[
                "Full Stack Engineer",
                "Frontend Specialist",
                "Clean Code Advocate",
                "Problem Solver",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </motion.span>
        </div>

        <motion.p
          className="text-xl sm:text-2xl mb-6"
          initial={skipAnimations ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: skipAnimations ? 0 : 1, duration: skipAnimations ? 0 : 1 }}
        >
          Explore my work, and let's create something amazing together.
        </motion.p>

        <div className="flex justify-center mt-6">
          <motion.a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="text-indigo-500 hover:text-indigo-700 transition-colors duration-300 relative group inline-block mx-auto"
            aria-label="Scroll down to about section"
            initial={{ y: 0, opacity: 1 }}
            animate={{
              y: [0, 10, 0],
              opacity: [1, 0.6, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 absolute top-0 opacity-0 group-hover:translate-y-[1rem] group-hover:opacity-100 transition-all delay-300 ease-in-out duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 absolute top-[1rem] opacity-0 group-hover:translate-y-[1rem] group-hover:opacity-100 transition-all delay-100 ease-in-out duration-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default LandingPage;
