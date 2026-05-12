import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Garante que cada navegação SPA comece do topo.
 * Essencial em mobile, onde manter o scroll entre páginas confunde o usuário.
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
};
