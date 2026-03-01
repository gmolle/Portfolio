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
      <h2 className="text-3xl font-bold text-gray-900 mb-10 tracking-tight">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
