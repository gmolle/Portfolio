import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectDetailPage from "./components/ProjectDetailPage";
import { HomeAnimationsProvider } from "./context/HomeAnimationsContext";
import { useEffect, useLayoutEffect } from "react";

const HOME_SCROLL_STORAGE_KEY = "portfolio-home-scroll-y";
const NAVBAR_SCROLL_OFFSET_PX = 65;

const HomePage = () => {
  const { hash, pathname, key } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    let timeoutId = 0;
    const saveScroll = () => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        sessionStorage.setItem(HOME_SCROLL_STORAGE_KEY, String(window.scrollY));
      }, 50);
    };
    window.addEventListener("scroll", saveScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", saveScroll);
      window.clearTimeout(timeoutId);
    };
  }, []);

  useLayoutEffect(() => {
    if (pathname !== "/") return;

    const scrollToSection = (id) => {
      const el = document.getElementById(id);
      if (!el) return false;
      const top =
        el.getBoundingClientRect().top +
        window.scrollY -
        NAVBAR_SCROLL_OFFSET_PX;
      window.scrollTo({ top, left: 0, behavior: "instant" });
      return true;
    };

    const navEntry = performance.getEntriesByType("navigation")[0];
    const isReload = navEntry?.type === "reload";

    if (hash) {
      scrollToSection(hash.slice(1));
      return;
    }

    if (isReload) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }

    if (navigationType === "POP") {
      const raw = sessionStorage.getItem(HOME_SCROLL_STORAGE_KEY);
      if (raw != null) {
        const y = Number.parseFloat(raw);
        if (Number.isFinite(y))
          window.scrollTo({ top: y, left: 0, behavior: "instant" });
      }
      return;
    }

    if (navigationType === "PUSH" || navigationType === "REPLACE") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash, key, navigationType]);

  return (
    <>
      <LandingPage />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

const App = () => (
  <BrowserRouter basename="/Portfolio">
    <HomeAnimationsProvider>
      <div className="font-sans min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<><Navbar /><ProjectDetailPage /></>} />
        </Routes>
      </div>
    </HomeAnimationsProvider>
  </BrowserRouter>
);

export default App;
