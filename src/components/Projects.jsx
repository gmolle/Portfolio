import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, setTechFilter } from "../redux/slice";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

import collab1 from "../assets/images/collab/1.png";
import collab2 from "../assets/images/collab/2.png";
import collab3 from "../assets/images/collab/3.png";
import collab4 from "../assets/images/collab/4.png";
const collabImages = [
  {
    src: collab1,
    caption: "Current board view with multiple elements placed on the board",
  },
  { src: collab2, caption: "User dashboard" },
  {
    src: collab3,
    caption: "User dashboard with no boards prompting user to create a board",
  },
  { src: collab4, caption: "Organization management and settings" },
];

import sorting1 from "../assets/images/sorting/1.png";
import sorting2 from "../assets/images/sorting/2.png";
import sorting3 from "../assets/images/sorting/3.png";
import sorting4 from "../assets/images/sorting/4.png";
import sorting5 from "../assets/images/sorting/sorting.gif";
const sortingImages = [
  { src: sorting1, caption: "Unsorted array view" },
  { src: sorting2, caption: "Midway through selected merge sort" },
  { src: sorting3, caption: "Merge sort continued" },
  { src: sorting4, caption: "Fully sorted array view" },
  { src: sorting5, caption: "Full sorting process visualized" },
];

import pathfinding1 from "../assets/images/pathfinding/1.png";
import pathfinding2 from "../assets/images/pathfinding/2.png";
import pathfinding3 from "../assets/images/pathfinding/3.png";
import pathfinding4 from "../assets/images/pathfinding/4.png";
import pathfinding5 from "../assets/images/pathfinding/pathfinding.gif";

const pathfindingImages = [
  { src: pathfinding1, caption: "Default view of visualizer" },
  { src: pathfinding2, caption: "Recursive division maze created" },
  { src: pathfinding3, caption: "A* algorithm in progress" },
  { src: pathfinding4, caption: "A* algorithm solved with path shown" },
  { src: pathfinding5, caption: "Full pathfinding process visualized" },
];

import ecommerce1 from "../assets/images/ecommerce/1.png";
import ecommerce2 from "../assets/images/ecommerce/2.png";
import ecommerce3 from "../assets/images/ecommerce/3.png";
import ecommerce4 from "../assets/images/ecommerce/4.png";
import ecommerce5 from "../assets/images/ecommerce/5.png";
import ecommerce6 from "../assets/images/ecommerce/6.png";
import ecommerce7 from "../assets/images/ecommerce/7.png";

const ecommerceImages = [
  { src: ecommerce1, caption: "Landing page of the ecommerce site" },
  { src: ecommerce2, caption: "Products page" },
  { src: ecommerce3, caption: "Detailed view of an individual product" },
  { src: ecommerce4, caption: "Cart page" },
  { src: ecommerce5, caption: "Checkout page" },
  { src: ecommerce6, caption: "Order Success page" },
  { src: ecommerce7, caption: "Admin view" },
];

const projects = [
  {
    name: "Collaboration Board",
    description:
      "Collaborative web app with customizable boards where users can draw, type, and add shapes. Supports real-time updates for seamless multi-user interaction and creativity.",
    tech: ["React", "TypeScript", "Next.js", "Tailwind"],
    images: collabImages,
    codeLink: "https://github.com/gmolle/collaboration-board",
    deployLink: "https://collaboration-board-gmolle.vercel.app/",
  },
  {
    name: "Sorting Visualizer",
    description:
      "Interactive sorting visualizer showcasing real-time animations of merge, bubble, quick, insertion, and selection sort algorithms.",
    tech: ["React", "Redux", "CSS"],
    images: sortingImages,
    codeLink: "https://github.com/gmolle/Sorting-Visualizer",
    deployLink: "https://gmolle-sorting-visualizer.web.app/",
  },
  {
    name: "Pathfinding Visualizer",
    description:
      "An interactive React-based web app for visualizing popular pathfinding algorithms in real-time.",
    tech: ["React", "JavaScript", "Tailwind"],
    images: pathfindingImages,
    codeLink: "https://github.com/gmolle/Pathfinding-Visualizer",
    deployLink: "https://gmolle.github.io/Pathfinding-Visualizer/",
  },
  {
    name: "Ecommerce Site",
    description:
      "A full e-commerce site that enables users to browse products, complete purchases through a seamless checkout, and receive clear order confirmations.",
    tech: ["React", "Redux", "JavaScript", "Tailwind"],
    images: ecommerceImages,
    codeLink: "https://github.com/gmolle/Ecommerce-Site",
    deployLink: "https://gmolle.github.io/Ecommerce-Site/",
  },
];

const Projects = () => {
  const dispatch = useDispatch();
  const { searchQuery, techFilter } = useSelector((state) => state.portfolio);
  const [matchAll, setMatchAll] = useState(false);

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

  const techButtons = [
    "React",
    "Redux",
    "TypeScript",
    "JavaScript",
    "Tailwind",
  ];

  const toggleTechFilter = (tech) => {
    if (techFilter.includes(tech)) {
      dispatch(setTechFilter(techFilter.filter((t) => t !== tech)));
    } else {
      dispatch(setTechFilter([...techFilter, tech]));
    }
  };

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 min-h-[675px] font-manrope"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
          Projects
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          These projects reflect my professional growth and personal curiosity,
          as I'm always building something new in my free time
        </p>

        {/* Search & Tech Filters */}
        <div className="mb-6 flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full lg:w-80">
            <input
              type="text"
              placeholder="Search Projects"
              value={searchQuery}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              className="w-full py-3 pl-10 pr-4 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 placeholder-gray-400 transition-all duration-300"
            />
          </div>

          {/* Tech Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {techButtons.map((tech) => (
              <button
                key={tech}
                onClick={() => toggleTechFilter(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  techFilter.includes(tech)
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-indigo-50 hover:border-indigo-300"
                }`}
              >
                {tech}
              </button>
            ))}
            <button
              onClick={() => dispatch(setTechFilter([]))}
              className="px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-600 hover:bg-red-200 transition-all duration-300 cursor-pointer"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Match All Toggle */}
        <div className="mb-8 text-sm text-gray-700 text-center lg:text-left">
          <label className="inline-flex items-center space-x-3 cursor-pointer">
            <span className="text-sm font-medium">Match all selected tech</span>
            <div className="relative">
              <input
                type="checkbox"
                checked={matchAll}
                onChange={() => setMatchAll(!matchAll)}
                className="sr-only"
              />
              <div
                className={`w-10 h-5 rounded-full shadow-inner transition-colors duration-300 ${
                  matchAll ? "bg-indigo-600" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transform transition-transform duration-300 ${
                  matchAll ? "translate-x-5" : ""
                }`}
              ></div>
            </div>
          </label>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-gray-500">
                No projects match your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
