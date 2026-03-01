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
      <div className="bg-white rounded-xl border border-gray-200/80 p-8 h-full flex flex-col min-h-[280px] shadow-sm hover:border-gray-300/80 transition-colors duration-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 tracking-tight">
          {title}
        </h3>

        <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
          {items.map((skill) => (
            <li
              key={skill.name}
              className="flex items-center gap-3 text-gray-600 text-[15px]"
            >
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
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
