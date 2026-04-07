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
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-manrope flex flex-col items-center justify-center px-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Project not found</h1>
        <p className="text-gray-600 mb-6 text-center max-w-md">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/"
          className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
        >
          Back to home
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-manrope">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-6 sm:pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
            {project.name}
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-3xl">
            {project.description}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2 list-none p-0">
            {project.tech.map((tech) => (
              <li key={tech}>
                <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </header>

        <section className="bg-white rounded-xl border border-gray-200/80 shadow-sm p-6 sm:p-8 mb-10">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">
            Screenshots
          </h2>
          <ProjectGallery project={project} />
        </section>

        <section>
          <p className="text-gray-600 text-sm mb-6 max-w-xl">
            View the live application or browse the source code.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={project.deployLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors text-center"
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
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors text-center"
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
