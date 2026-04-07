import { Link, useLocation } from "react-router-dom";
import useScroll from "../hooks/useScroll";
import { useActiveSection } from "../hooks/useActiveSection";
import { NAV_LINKS } from "../data/navLinks";

const Navbar = () => {
  const { pathname } = useLocation();
  const { handleScroll } = useScroll();
  const activeSection = useActiveSection();
  const isHome = pathname === "/";

  const homeLinkBase =
    "transition-colors duration-200 focus:outline-none rounded px-1 py-0.5 hover:text-indigo-300";
  const awayLinkBase =
    "text-gray-700 hover:text-indigo-600 transition-colors duration-200 focus:outline-none rounded px-1 py-0.5";

  const brandClass = isHome
    ? "text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors duration-200 focus:outline-none rounded"
    : "text-2xl font-bold text-indigo-600 hover:text-indigo-500 transition-colors duration-200 focus:outline-none rounded";

  return (
    <nav
      className={
        isHome
          ? "sticky top-0 w-full bg-black/75 backdrop-blur-md text-white shadow-lg border-b border-white/5 z-50 font-manrope"
          : "sticky top-0 w-full z-50 font-manrope bg-white/95 backdrop-blur-md text-gray-900 border-b border-gray-200/80 shadow-sm"
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <Link to="/" className={brandClass}>
          Garrett Molle
        </Link>
        <ul className="flex space-x-6 text-lg">
          {NAV_LINKS.map(({ href, label }) => {
            const sectionId = href.slice(1);
            const isActive = isHome && activeSection === sectionId;
            const linkClass = isHome
              ? `${homeLinkBase} ${isActive ? "text-indigo-300" : "text-white"}`
              : awayLinkBase;
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
