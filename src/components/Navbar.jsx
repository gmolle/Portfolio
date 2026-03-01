import { Link, useLocation } from "react-router-dom";
import useScroll from "../hooks/useScroll";
import { NAV_LINKS } from "../data/navLinks";

const linkClass =
  "hover:text-indigo-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-black rounded px-1 py-0.5";

const Navbar = () => {
  const { pathname } = useLocation();
  const { handleScroll } = useScroll();
  const isHome = pathname === "/";

  return (
    <nav className="sticky top-0 w-full bg-black/75 backdrop-blur-md text-white shadow-lg border-b border-white/5 z-50 font-manrope">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-black rounded"
        >
          Garrett Molle
        </Link>
        <ul className="flex space-x-6 text-lg">
          {NAV_LINKS.map(({ href, label }) => {
            const sectionId = href.slice(1);
            return (
              <li key={href}>
                <Link
                  to={isHome ? href : `/${href}`}
                  onClick={(e) => {
                    if (isHome) {
                      e.preventDefault();
                      handleScroll(e, sectionId);
                    }
                  }}
                  className={linkClass}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
