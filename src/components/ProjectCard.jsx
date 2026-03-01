import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const backgroundImage = project.images[0]
    ? project.images[0].src
    : "https://via.placeholder.com/600x400?text=Project+Image";

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group relative block bg-white rounded-xl border border-gray-200/80 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-gray-300/80 hover:-translate-y-0.5 font-manrope"
    >
      <div
        className="h-44 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/50 transition-colors duration-300" />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-1.5 tracking-tight">
          {project.name}
        </h3>
        <p className="text-gray-600 text-[15px] leading-snug line-clamp-2">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
        <span className="text-white text-sm font-medium bg-gray-900/90 px-4 py-2 rounded-lg backdrop-blur-sm">
          View details
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;
