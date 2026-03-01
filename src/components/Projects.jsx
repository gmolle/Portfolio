import { useState, useCallback } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectsFilters from "./ProjectsFilters";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [techFilter, setTechFilter] = useState([]);
  const [matchAll, setMatchAll] = useState(false);

  const toggleTechFilter = useCallback((tech) => {
    setTechFilter((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  }, []);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesTech = matchAll
      ? techFilter.every((tech) => project.tech.includes(tech))
      : techFilter.length === 0 ||
        techFilter.some((tech) => project.tech.includes(tech));
    return matchesSearch && matchesTech;
  });

  return (
    <section
      id="projects"
      className="py-20 scroll-mt-20 bg-gradient-to-br from-gray-50 to-gray-100 min-h-[500px] font-manrope"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
          Projects
        </h2>
        <p className="text-gray-600 mb-8">
          These projects reflect my professional growth and personal curiosity—
          I'm always building something new in my free time.
        </p>

        <ProjectsFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          techFilter={techFilter}
          onTechToggle={toggleTechFilter}
          onClearTech={() => setTechFilter([])}
          matchAll={matchAll}
          onMatchAllChange={setMatchAll}
          resultCount={filteredProjects.length}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-gray-500 mb-1">
                No projects match your search or filters.
              </p>
              <p className="text-sm text-gray-400">
                Try clearing filters or a different search term.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
