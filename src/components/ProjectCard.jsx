import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const thumb = project.images[0]
    ? project.images[0].src
    : "https://via.placeholder.com/600x400?text=Project+Image";

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex flex-col bg-white rounded-2xl border border-gray-200/80 shadow-sm shadow-gray-900/5 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-950/5 hover:border-indigo-200/60 hover:-translate-y-1 font-manrope ring-1 ring-black/[0.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
    >
      <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden shrink-0">
        <img
          src={thumb}
          alt={`${project.name} preview`}
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent opacity-90 group-hover:from-gray-900/60 transition-opacity duration-300 pointer-events-none" />
        <div className="absolute bottom-3 right-3 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <span className="inline-flex items-center text-xs font-semibold text-white bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-full ring-1 ring-white/25">
            View project
            <svg
              className="w-3.5 h-3.5 ml-1.5 opacity-90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-1.5 tracking-tight group-hover:text-indigo-950 transition-colors">
          {project.name}
        </h3>
        <p className="text-gray-600 text-[15px] leading-snug line-clamp-2 mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full text-xs font-medium border border-gray-200 bg-gray-50/90 text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
