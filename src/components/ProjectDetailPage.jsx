import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProjectBySlug } from "../data/projects";
import ProjectGallery from "./ProjectGallery";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [slug]);

  if (!project) {
    return (
      <main className="min-h-screen bg-gray-950 font-manrope flex flex-col items-center justify-center px-6">
        <h1 className="text-2xl font-bold text-white mb-2">Project not found</h1>
        <p className="text-gray-400 mb-6 text-center">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors"
        >
          Back to home
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 font-manrope">
      {/* Hero: full-width dark header */}
      <header className="bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-medium mb-8 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {project.name}
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white/10 text-gray-200 text-sm font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Content: gallery and actions */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
            Screenshots
          </h2>
          <ProjectGallery project={project} />
        </section>

        <section className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-6">View the live application or browse the source code.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.deployLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 transition-colors"
            >
              View live site
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              View code
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
