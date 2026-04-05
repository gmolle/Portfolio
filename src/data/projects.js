import collab1 from "../assets/images/collab/1.png";
import collab2 from "../assets/images/collab/2.png";
import collab3 from "../assets/images/collab/3.png";
import collab4 from "../assets/images/collab/4.png";
import sorting1 from "../assets/images/sorting/1.png";
import sorting2 from "../assets/images/sorting/2.png";
import sorting3 from "../assets/images/sorting/3.png";
import sorting4 from "../assets/images/sorting/4.png";
import sorting5 from "../assets/images/sorting/sorting.gif";
import pathfinding1 from "../assets/images/pathfinding/1.png";
import pathfinding2 from "../assets/images/pathfinding/2.png";
import pathfinding3 from "../assets/images/pathfinding/3.png";
import pathfinding4 from "../assets/images/pathfinding/4.png";
import pathfinding5 from "../assets/images/pathfinding/pathfinding.gif";
import ecommerce1 from "../assets/images/ecommerce/1.png";
import ecommerce2 from "../assets/images/ecommerce/2.png";
import ecommerce3 from "../assets/images/ecommerce/3.png";
import ecommerce4 from "../assets/images/ecommerce/4.png";
import ecommerce5 from "../assets/images/ecommerce/5.png";
import ecommerce6 from "../assets/images/ecommerce/6.png";
import ecommerce7 from "../assets/images/ecommerce/7.png";
import debugger1 from "../assets/images/ai-debugger/1.png";
import debugger2 from "../assets/images/ai-debugger/2.png";
import debugger3 from "../assets/images/ai-debugger/3.png";
import debugger4 from "../assets/images/ai-debugger/4.png";
import debugger5 from "../assets/images/ai-debugger/5.png";
import debugger6 from "../assets/images/ai-debugger/6.png";

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

const sortingImages = [
  { src: sorting1, caption: "Unsorted array view" },
  { src: sorting2, caption: "Midway through selected merge sort" },
  { src: sorting3, caption: "Merge sort continued" },
  { src: sorting4, caption: "Fully sorted array view" },
  { src: sorting5, caption: "Full sorting process visualized" },
];

const pathfindingImages = [
  { src: pathfinding1, caption: "Default view of visualizer" },
  { src: pathfinding2, caption: "Recursive division maze created" },
  { src: pathfinding3, caption: "A* algorithm in progress" },
  { src: pathfinding4, caption: "A* algorithm solved with path shown" },
  { src: pathfinding5, caption: "Full pathfinding process visualized" },
];

const ecommerceImages = [
  { src: ecommerce1, caption: "Landing page of the ecommerce site" },
  { src: ecommerce2, caption: "Products page" },
  { src: ecommerce3, caption: "Detailed view of an individual product" },
  { src: ecommerce4, caption: "Cart page" },
  { src: ecommerce5, caption: "Checkout page" },
  { src: ecommerce6, caption: "Order Success page" },
  { src: ecommerce7, caption: "Admin view" },
];

const aiDebuggerImages = [
  { src: debugger1, caption: "Default view of the AI debugger" },
  {
    src: debugger2,
    caption: "Filled inputs with a Kotlin error and the analysis summary below",
  },
  {
    src: debugger3,
    caption: "Suggested fixes with confidence bars and copyable code",
  },
  {
    src: debugger4,
    caption: "Recent History filtered to show only Python errors",
  },
  {
    src: debugger5,
    caption: "Analyzing: loading overlay on the editors while the request runs",
  },
  {
    src: debugger6,
    caption:
      "Language mismatch warning with a one-click “use suggested language” fix",
  },
];

export const projects = [
  {
    slug: "ai-debugging-assistant",
    name: "AI Debugging Assistant",
    description:
      "An AI debugger that helps users debug their code by providing step-by-step explanations of the code.",
    tech: [
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind",
      "Java",
      "Spring Boot",
    ],
    images: aiDebuggerImages,
    codeLink: "https://github.com/gmolle/ai-debugging-assistant",
    deployLink: "https://gmolle-ai-debugging-assistant.vercel.app/",
  },
  {
    slug: "pathfinding-visualizer",
    name: "Pathfinding Visualizer",
    description:
      "An interactive React-based web app for visualizing popular pathfinding algorithms in real-time.",
    tech: ["React", "JavaScript", "Tailwind"],
    images: pathfindingImages,
    codeLink: "https://github.com/gmolle/Pathfinding-Visualizer",
    deployLink: "https://gmolle.github.io/Pathfinding-Visualizer/",
  },
  {
    slug: "collaboration-board",
    name: "Collaboration Board",
    description:
      "Collaborative web app with customizable boards where users can draw, type, and add shapes. Supports real-time updates for seamless multi-user interaction and creativity.",
    tech: ["React", "TypeScript", "Next.js", "Tailwind"],
    images: collabImages,
    codeLink: "https://github.com/gmolle/collaboration-board",
    deployLink: "https://collaboration-board-gmolle.vercel.app/",
  },
  {
    slug: "sorting-visualizer",
    name: "Sorting Visualizer",
    description:
      "Interactive sorting visualizer showcasing real-time animations of merge, bubble, quick, insertion, and selection sort algorithms.",
    tech: ["React", "Redux", "CSS"],
    images: sortingImages,
    codeLink: "https://github.com/gmolle/Sorting-Visualizer",
    deployLink: "https://gmolle-sorting-visualizer.web.app/",
  },

  {
    slug: "ecommerce-site",
    name: "Ecommerce Site",
    description:
      "A full e-commerce site that enables users to browse products, complete purchases through a seamless checkout, and receive clear order confirmations.",
    tech: ["React", "Redux", "JavaScript", "Tailwind"],
    images: ecommerceImages,
    codeLink: "https://github.com/gmolle/Ecommerce-Site",
    deployLink: "https://gmolle.github.io/Ecommerce-Site/",
  },
];

export const PROJECT_TECH_FILTERS = [
  "React",
  "Redux",
  "TypeScript",
  "JavaScript",
  "Tailwind",
  "Java",
  "Spring Boot",
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}
