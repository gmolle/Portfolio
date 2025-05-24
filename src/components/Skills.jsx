import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaSass,
  FaJs,
  FaGit,
  FaDatabase,
  FaAws,
  FaJava,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiRedux,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiSpring,
  SiSpringboot,
  SiNpm,
  SiGithubactions,
  SiMongodb,
  SiJsonwebtokens,
  SiVercel,
  SiHeroku,
  SiNetlify,
} from "react-icons/si";
import { motion } from "motion/react";

const skills = {
  frontend: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 w-6 h-6" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-700 w-6 h-6" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 w-6 h-6" /> },
    { name: "React", icon: <FaReact className="text-blue-500 w-6 h-6" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500 w-6 h-6" /> },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-700 w-6 h-6" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-gray-900 w-6 h-6" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-teal-500 w-6 h-6" />,
    },
    { name: "Sass", icon: <FaSass className="text-pink-500 w-6 h-6" /> },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-[#563d7c] w-6 h-6" />,
    },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-6 h-6" /> },
    { name: "Express", icon: <SiExpress className="text-gray-600 w-6 h-6" /> },
    { name: "Java", icon: <FaJava className="text-red-500 w-6 h-6" /> },
    { name: "Spring", icon: <SiSpring className="text-green-600 w-6 h-6" /> },
    {
      name: "Spring Boot",
      icon: <SiSpringboot className="text-green-700 w-6 h-6" />,
    },
    {
      name: "JWT",
      icon: <SiJsonwebtokens className="text-yellow-500 w-6 h-6" />,
    },
    { name: "MongoDB", icon: <SiMongodb className="text-[#4DB33D] w-6 h-6" /> },
    { name: "SQL", icon: <FaDatabase className="text-blue-800 w-6 h-6" /> },
  ],
  devops_tools: [
    { name: "Git", icon: <FaGit className="text-red-600 w-6 h-6" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-900 w-6 h-6" /> },
    {
      name: "GitHub Actions",
      icon: <SiGithubactions className="text-blue-600 w-6 h-6" />,
    },

    { name: "NPM", icon: <SiNpm className="text-red-500 w-6 h-6" /> },
    { name: "AWS", icon: <FaAws className="text-yellow-600 w-6 h-6" /> },
    { name: "Vercel", icon: <SiVercel className="text-black w-6 h-6" /> },
    { name: "Heroku", icon: <SiHeroku className="text-purple-800 w-6 h-6" /> },
    { name: "Netlify", icon: <SiNetlify className="text-teal-500 w-6 h-6" /> },
  ],
};

const initialX = window.innerWidth <= 1400 ? -100 : -300;

const Skills = () => (
  <section
    id="skills"
    className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 font-manrope"
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Frontend Skills */}
        <motion.div
          initial={{ rotateY: 90, opacity: 0, x: initialX }}
          whileInView={{ rotateY: 0, opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            transformStyle: "preserve-3d",
            perspective: 1000,
          }}
        >
          <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-6">
              Front End
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.frontend.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-lg text-gray-700 transition-transform duration-300 hover:scale-105"
                >
                  {skill.icon}
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          initial={{ rotateY: 90, opacity: 0, x: initialX }}
          whileInView={{ rotateY: 0, opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
          style={{
            transformStyle: "preserve-3d",
            perspective: 1000,
          }}
        >
          <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl h-full">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-6">
              Back End
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.backend.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-lg text-gray-700 transition-transform duration-300 hover:scale-105"
                >
                  {skill.icon}
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* DevOps & Tools */}
        <motion.div
          initial={{ rotateY: 90, opacity: 0, x: initialX }}
          whileInView={{ rotateY: 0, opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.8 }}
          style={{
            transformStyle: "preserve-3d",
            perspective: 1000,
          }}
        >
          <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl h-full">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-6">
              DevOps & Tools
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.devops_tools.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-lg text-gray-700 transition-transform duration-300 hover:scale-105"
                >
                  {skill.icon}
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Skills;
