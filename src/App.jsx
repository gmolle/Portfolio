import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectDetailPage from "./components/ProjectDetailPage";
import { HomeAnimationsProvider } from "./context/HomeAnimationsContext";
import { useEffect } from "react";

const HomePage = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

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
