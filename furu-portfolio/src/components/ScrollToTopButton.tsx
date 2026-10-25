import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/useLanguage";

const VISIBILITY_THRESHOLD = 560;

function ScrollToTopButton() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      setVisible(window.scrollY > VISIBILITY_THRESHOLD);
    }

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      className="scroll-to-top"
      type="button"
      aria-label={t.accessibility.returnToTop}
      onClick={() => {
        document.querySelector<HTMLElement>(".navbar .logo")?.focus({ preventScroll: true });
        const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth";
        window.scrollTo({ top: 0, behavior });
      }}
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}

export default ScrollToTopButton;
