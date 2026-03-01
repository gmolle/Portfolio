import { useCallback } from "react";

const NAVBAR_OFFSET_PX = 65;

const useScroll = () => {
  const handleScroll = useCallback((event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const top = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: top - NAVBAR_OFFSET_PX,
        behavior: "smooth",
      });
    }
  }, []);

  return { handleScroll };
};

export default useScroll;
