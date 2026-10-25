import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/useLanguage";

const TYPE_SPEED = 55;
const DELETE_SPEED = 28;
const PAUSE_AFTER_TYPE = 2200;
const PAUSE_AFTER_DELETE = 600;

function useTypewriter(text: string) {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < text.length) {
      timeout = setTimeout(
        () => setDisplayed(text.slice(0, displayed.length + 1)),
        TYPE_SPEED,
      );
    } else if (!isDeleting && displayed.length === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(text.slice(0, displayed.length - 1)),
        DELETE_SPEED,
      );
    } else if (isDeleting && displayed.length === 0) {
      timeout = setTimeout(() => setIsDeleting(false), PAUSE_AFTER_DELETE);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, text]);

  return displayed;
}

function Hero() {
  const { t } = useLanguage();
  const typedText = useTypewriter(t.hero.titleLine1);

  // Split typed text into two lines at the word boundary
  const breakIndex = typedText.indexOf(" for");
  const line1 = breakIndex > 0 ? typedText.slice(0, breakIndex) : typedText;
  const line2 = breakIndex > 0 ? typedText.slice(breakIndex) : "";

  return (
    <section className="hero">
      <div className="hero-frame">
        <div className="home-window-bar" aria-hidden="true">
          <span className="home-window-lights"><i /><i /><i /></span>
          <span>GEOFURU://HOME</span>
          <span>00</span>
        </div>
        <p className="hero-name">{t.hero.name}</p>

        <p className="eyebrow">{t.hero.eyebrow}</p>

        <h1 className="hero-statement">
          <span className="hero-prefix">&gt;</span>{" "}
          <span className="hero-line1">{line1}</span>
          {line2 && (
            <>
              <br />
              <span className="hero-line2">{line2.trimStart()}</span>
            </>
          )}
          <span className="hero-cursor" />
        </h1>

        <p className="hero-description">
          {t.hero.description}
        </p>

        <a href="#work" className="primary-button">
          {t.hero.button}
        </a>
      </div>
    </section>
  );
}

export default Hero;
