import useScroll from "../hooks/useScroll";

const Navbar = () => {
  const { handleScroll } = useScroll();

  return (
    <nav className="sticky top-0 w-full bg-black/70 backdrop-blur-md text-white shadow-md z-50 font-manrope">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between py-4">
        <a
          href="/"
          className="text-2xl font-bold text-indigo-400 hover:text-indigo-500 transition-colors duration-200"
        >
          Garrett Molle
        </a>
        <ul className="flex space-x-6 text-lg">
          <li>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="hover:text-indigo-300 transition-colors duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => handleScroll(e, "skills")}
              className="hover:text-indigo-300 transition-colors duration-200"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "projects")}
              className="hover:text-indigo-300 transition-colors duration-200"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="hover:text-indigo-300 transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
