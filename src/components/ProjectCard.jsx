import { useState } from "react";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  // Use the first image from the project's images array, or a fallback placeholder
  const backgroundImage = project.images[0]
    ? project.images[0].src
    : "https://via.placeholder.com/600x400?text=Project+Image";

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group font-manrope"
      >
        {/* Background Image with Overlay */}
        <div
          className="h-48 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {project.name}
          </h3>
          <p className="text-gray-600 line-clamp-2">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Hover Prompt */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white font-medium bg-indigo-600 px-4 py-2 rounded-full">
            View Details
          </span>
        </div>
      </div>

      {showModal && (
        <ProjectModal project={project} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default ProjectCard;
