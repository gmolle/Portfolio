import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NAV_LINKS } from "../data/navLinks";

const NAV_OFFSET_PX = 65;

export function useActiveSection() {
  const { pathname, hash } = useLocation();
  const enabled = pathname === "/";
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (!enabled) {
      setActiveId(null);
      return;
    }

    const run = () => {
      const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));
      let current = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= NAV_OFFSET_PX + 4) current = id;
      }
      setActiveId(current);
    };

    run();
    const raf = requestAnimationFrame(run);
    window.addEventListener("scroll", run, { passive: true });
    window.addEventListener("resize", run);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", run);
      window.removeEventListener("resize", run);
    };
  }, [enabled, hash]);

  return enabled ? activeId : null;
}
