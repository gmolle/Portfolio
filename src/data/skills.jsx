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
  SiTestinglibrary,
  SiJest,
} from "react-icons/si";
import junitLogo from "../assets/junit5-logo.svg";
import playwrightLogo from "../assets/playwright-logo.svg";

const iconClass = "w-6 h-6";

export const skills = {
  frontend: [
    { name: "HTML", icon: <FaHtml5 className={`text-orange-500 ${iconClass}`} /> },
    { name: "CSS", icon: <FaCss3Alt className={`text-blue-700 ${iconClass}`} /> },
    { name: "JavaScript", icon: <FaJs className={`text-yellow-500 ${iconClass}`} /> },
    { name: "React", icon: <FaReact className={`text-blue-500 ${iconClass}`} /> },
    { name: "Redux", icon: <SiRedux className={`text-purple-500 ${iconClass}`} /> },
    { name: "TypeScript", icon: <SiTypescript className={`text-blue-700 ${iconClass}`} /> },
    { name: "Next.js", icon: <SiNextdotjs className={`text-gray-900 ${iconClass}`} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className={`text-teal-500 ${iconClass}`} /> },
    { name: "Sass", icon: <FaSass className={`text-pink-500 ${iconClass}`} /> },
    { name: "Bootstrap", icon: <FaBootstrap className={`text-[#563d7c] ${iconClass}`} /> },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs className={`text-green-500 ${iconClass}`} /> },
    { name: "Express", icon: <SiExpress className={`text-gray-600 ${iconClass}`} /> },
    { name: "Java", icon: <FaJava className={`text-red-500 ${iconClass}`} /> },
    { name: "Spring", icon: <SiSpring className={`text-green-600 ${iconClass}`} /> },
    { name: "Spring Boot", icon: <SiSpringboot className={`text-green-700 ${iconClass}`} /> },
    { name: "JWT", icon: <SiJsonwebtokens className={`text-yellow-500 ${iconClass}`} /> },
    { name: "MongoDB", icon: <SiMongodb className={`text-[#4DB33D] ${iconClass}`} /> },
    { name: "SQL", icon: <FaDatabase className={`text-blue-800 ${iconClass}`} /> },
  ],
  devops_tools: [
    { name: "Git", icon: <FaGit className={`text-red-600 ${iconClass}`} /> },
    { name: "GitHub", icon: <FaGithub className={`text-gray-900 ${iconClass}`} /> },
    { name: "GitHub Actions", icon: <SiGithubactions className={`text-blue-600 ${iconClass}`} /> },
    { name: "NPM", icon: <SiNpm className={`text-red-500 ${iconClass}`} /> },
    { name: "AWS", icon: <FaAws className={`text-yellow-600 ${iconClass}`} /> },
    { name: "Vercel", icon: <SiVercel className={`text-black ${iconClass}`} /> },
    { name: "Heroku", icon: <SiHeroku className={`text-purple-800 ${iconClass}`} /> },
    { name: "Netlify", icon: <SiNetlify className={`text-teal-500 ${iconClass}`} /> },
  ],
  testing: [
    { name: "Playwright", icon: <img src={playwrightLogo} alt="" className={iconClass} /> },
    {
      name: "React Testing Library",
      icon: <SiTestinglibrary className={`text-[#ee3942] ${iconClass}`} />,
    },
    { name: "Jest", icon: <SiJest className={`text-[#8d435a] ${iconClass}`} /> },
    { name: "Junit", icon: <img src={junitLogo} alt="" className={iconClass} /> },
  ],
};
