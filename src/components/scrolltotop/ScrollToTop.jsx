import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable smooth scroll globally just before scrolling
    const html = document.documentElement;
    const originalBehavior = html.style.scrollBehavior;

    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = originalBehavior;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
