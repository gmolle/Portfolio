import { motion } from "motion/react";

const SkillsSection = ({
  title,
  items,
  delay = 0,
  amount = 0.5,
  skipAnimations = false,
}) => {
  const visibleState = { opacity: 1, y: 0 };
  const hiddenState = { opacity: 0, y: 14 };

  return (
    <motion.div
      initial={skipAnimations ? visibleState : hiddenState}
      whileInView={skipAnimations ? undefined : visibleState}
      viewport={{ once: true, amount }}
      transition={{
        duration: skipAnimations ? 0 : 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: skipAnimations ? 0 : delay,
      }}
      className="h-full"
    >
      <div className="group bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-7 h-full flex flex-col shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md hover:shadow-indigo-500/15">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-700 mb-2">
          {title}
        </h3>
        <div
          className="h-px w-12 bg-indigo-500/90 mb-5 rounded-full"
          aria-hidden
        />

        <ul className="grid grid-cols-2 gap-x-4 sm:gap-x-5 gap-y-2.5">
          {items.map((skill) => (
            <li
              key={skill.name}
              className="flex items-center gap-2.5 sm:gap-3 min-w-0 text-gray-800 text-sm sm:text-[15px] font-medium leading-snug"
            >
              <span
                className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center transition-colors duration-300 group-hover:border-indigo-200 group-hover:bg-indigo-50/80 [&_img]:w-5 [&_img]:h-5 [&_svg]:w-5 [&_svg]:h-5"
                aria-hidden
              >
                {skill.icon}
              </span>
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default SkillsSection;
