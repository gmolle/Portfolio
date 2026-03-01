import { PROJECT_TECH_FILTERS } from "../data/projects";

function ProjectsFilters({
  searchQuery,
  onSearchChange,
  techFilter,
  onTechToggle,
  onClearTech,
  matchAll,
  onMatchAllChange,
  resultCount,
}) {
  const techButtons = PROJECT_TECH_FILTERS;

  return (
    <>
      <div className="mb-6 flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="relative w-full lg:w-80">
          <span
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
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
            type="text"
            placeholder="Search Projects"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full py-3 pl-10 pr-4 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 placeholder-gray-400 transition-all duration-300"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {techButtons.map((tech) => (
            <button
              key={tech}
              type="button"
              onClick={() => onTechToggle(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer border-2 transition-colors duration-200 ${
                techFilter.includes(tech)
                  ? "border-indigo-600 bg-indigo-600 text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:border-indigo-300 hover:bg-indigo-50"
              }`}
            >
              {tech}
            </button>
          ))}
          <button
            type="button"
            onClick={onClearTech}
            className="px-4 py-2 rounded-full text-sm font-medium border-2 border-red-200 bg-red-50 text-red-600 hover:bg-red-100 transition-colors duration-200 cursor-pointer"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-sm text-gray-500">
          {resultCount !== undefined && (
            <>
              {resultCount === 0 ? "No" : resultCount} project
              {resultCount !== 1 ? "s" : ""} found
            </>
          )}
        </p>
        <div className="text-sm text-gray-700 text-center lg:text-left">
          <label className="inline-flex items-center space-x-3 cursor-pointer">
            <span className="text-sm font-medium">Match all selected tech</span>
            <div className="relative">
              <input
                type="checkbox"
                checked={matchAll}
                onChange={() => onMatchAllChange(!matchAll)}
                className="sr-only"
              />
              <div
                className={`w-10 h-5 rounded-full shadow-inner transition-colors duration-300 ${
                  matchAll ? "bg-indigo-600" : "bg-gray-300"
                }`}
              />
              <div
                className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transform transition-transform duration-300 ${
                  matchAll ? "translate-x-5" : ""
                }`}
              />
            </div>
          </label>
        </div>
      </div>
    </>
  );
}

export default ProjectsFilters;
