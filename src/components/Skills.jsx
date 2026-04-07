import { skills } from "../data/skills";
import SkillCategory from "./SkillCategory";
import { useHomeAnimations } from "../context/HomeAnimationsContext";

const Skills = () => {
  const skipAnimations = useHomeAnimations();

  return (
    <section
      id="skills"
      className="py-20 scroll-mt-20 bg-gradient-to-br from-gray-50 to-gray-100 font-manrope"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-5 text-gray-600 text-base sm:text-[17px] leading-relaxed">
            Languages, frameworks, and tooling I use to build and ship software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 items-start">
          <SkillCategory
            title="Front End"
            items={skills.frontend}
            delay={0}
            amount={0.15}
            skipAnimations={skipAnimations}
          />
          <SkillCategory
            title="Back End"
            items={skills.backend}
            delay={0.12}
            amount={0.15}
            skipAnimations={skipAnimations}
          />
          <SkillCategory
            title="DevOps & Tools"
            items={skills.devops_tools}
            delay={0.24}
            amount={0.15}
            skipAnimations={skipAnimations}
          />
          <SkillCategory
            title="Testing"
            items={skills.testing}
            delay={0.36}
            amount={0.15}
            skipAnimations={skipAnimations}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
