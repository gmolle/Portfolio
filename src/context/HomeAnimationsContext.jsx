import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const HomeAnimationsContext = createContext(false);

export function HomeAnimationsProvider({ children }) {
  const { pathname } = useLocation();
  const [skipHomeAnimations, setSkipHomeAnimations] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setSkipHomeAnimations(true);
    }
  }, [pathname]);

  return (
    <HomeAnimationsContext.Provider value={skipHomeAnimations}>
      {children}
    </HomeAnimationsContext.Provider>
  );
}

export function useHomeAnimations() {
  return useContext(HomeAnimationsContext);
}
