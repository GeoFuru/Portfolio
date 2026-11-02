import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/useLanguage";
import Terrain from "./Terrain";

/** Original typewriter rhythm, with a longer pause for reading. */
function TypedTitle({ text }: { text: string }) {
  const [length, setLength] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches ? text.length : 0);
  const [reduced, setReduced] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setTimeout> | undefined;
    let count = 0, deleting = false;
    function tick() {
      count += deleting ? -1 : 1;
      setLength(count);
      let delay = deleting ? 28 : 55;
      if (count === text.length) { deleting = true; delay = 6000; }
      else if (count === 0) { deleting = false; delay = 700; }
      timer = setTimeout(tick, delay);
    }
    function start() {
      clearTimeout(timer); setReduced(motion.matches);
      if (motion.matches) { setLength(text.length); return; }
      count = 0; deleting = false; setLength(0);
      timer = setTimeout(tick, 550);
    }
    start(); motion.addEventListener("change", start);
    return () => { clearTimeout(timer); motion.removeEventListener("change", start); };
  }, [text]);
  return <><span aria-hidden="true">{text.slice(0,length)}</span><span className="sr-only">{text}</span>{!reduced && <span className="hero-cursor" aria-hidden="true" />}</>;
}

export default function Hero() {
  const { language, t } = useLanguage();
  return (
    <section className="hero">
      <Terrain />
      <div className="hero-frame">
        <div className="home-window-bar" aria-hidden="true"><span>GEOFURU://HOME</span><span>01 / 2026</span></div>
        <p className="eyebrow">{t.hero.eyebrow}</p>
        <h1 className="hero-name">{t.hero.name}</h1>
        <h2 className="hero-statement"><span className="hero-prefix" aria-hidden="true">&gt; </span><TypedTitle key={language} text={t.hero.titleLine1} /></h2>
        <p className="hero-description">{t.hero.description}</p>
        <a href="#work" className="primary-button">{t.hero.button}<span aria-hidden="true"> ↘</span></a>
      </div>
    </section>
  );
}
