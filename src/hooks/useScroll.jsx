import { useCallback } from "react";

const useScroll = () => {
  const handleScroll = useCallback((event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return { handleScroll };
};

export default useScroll;
