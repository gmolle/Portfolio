import { PROJECT_TECH_FILTERS } from "../data/projects";

function ProjectsFilters({
  searchQuery,
  onSearchChange,
  techFilter,
  onTechToggle,
  onResetFilters,
  matchAll,
  onMatchAllChange,
  resultCount,
}) {
  const techButtons = PROJECT_TECH_FILTERS;
  const hasActiveFilters =
    techFilter.length > 0 || (searchQuery && searchQuery.trim() !== "");

  return (
    <div className="mb-8 rounded-2xl border border-gray-200/90 bg-white/90 shadow-sm shadow-gray-900/5 backdrop-blur-sm p-4 sm:p-5">
      <div className="flex flex-col xl:flex-row xl:items-end gap-4 xl:gap-6">
        <div className="relative w-full xl:max-w-xs shrink-0">
          <label htmlFor="projects-search" className="sr-only">
            Search projects
          </label>
          <span
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            aria-hidden="true"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            id="projects-search"
            type="text"
            placeholder="Search projects"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full py-2.5 pl-10 pr-3 bg-gray-50/80 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 text-gray-800 placeholder-gray-400 transition-shadow"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 min-w-0 flex-1">
          {techButtons.map((tech) => (
            <button
              key={tech}
              type="button"
              onClick={() => onTechToggle(tech)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium cursor-pointer border transition-all duration-200 ${
                techFilter.includes(tech)
                  ? "border-indigo-600 bg-indigo-600 text-white shadow-sm shadow-indigo-900/20"
                  : "border-gray-200 bg-white text-gray-700 hover:border-indigo-200 hover:bg-indigo-50/60"
              }`}
            >
              {tech}
            </button>
          ))}
          <button
            type="button"
            onClick={onResetFilters}
            disabled={!hasActiveFilters}
            className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-gray-200 bg-white text-gray-500 hover:text-gray-800 hover:border-gray-300 hover:bg-gray-50 transition-colors duration-200 cursor-pointer disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-sm text-gray-500 tabular-nums">
          {resultCount !== undefined && (
            <>
              <span className="font-medium text-gray-700">
                {resultCount === 0 ? "No" : resultCount}
              </span>{" "}
              project
              {resultCount !== 1 ? "s" : ""}{" "}
              <span className="text-gray-400">matching</span>
            </>
          )}
        </p>
        <label className="inline-flex items-center gap-2.5 cursor-pointer text-sm text-gray-600 select-none sm:shrink-0">
          <span className="font-medium text-gray-700">Match all filters</span>
          <div className="relative inline-flex">
            <input
              type="checkbox"
              checked={matchAll}
              onChange={() => onMatchAllChange(!matchAll)}
              className="sr-only"
            />
            <div
              className={`w-9 h-[1.35rem] rounded-full transition-colors duration-300 ${
                matchAll ? "bg-indigo-600" : "bg-gray-200"
              }`}
            />
            <div
              className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-sm ring-1 ring-black/5 transform transition-transform duration-300 ${
                matchAll ? "translate-x-4" : ""
              }`}
            />
          </div>
        </label>
      </div>
    </div>
  );
}

export default ProjectsFilters;
