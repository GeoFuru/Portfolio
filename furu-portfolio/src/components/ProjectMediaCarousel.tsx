import { useState } from "react";
import type { ProjectMedia } from "../types/project";
import { useLanguage } from "../i18n/useLanguage";
import { withBase } from "../utils/paths";

export default function ProjectMediaCarousel({ media, title, onOpenImage }: {
  media: ProjectMedia[];
  title: string;
  onOpenImage: (item: ProjectMedia) => void;
}) {
  const { language, t } = useLanguage();
  const [index, setIndex] = useState(0);
  const item = media[index % media.length];
  const es = language === "es";
  function move(direction: number) {
    setIndex((current) => (current + direction + media.length) % media.length);
  }

  return (
    <div className="project-mixed-carousel" role="region" aria-roledescription={es ? "carrusel" : "carousel"} aria-label={title} onKeyDown={(event) => {
      if (event.target instanceof HTMLVideoElement) return;
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        move(event.key === "ArrowLeft" ? -1 : 1);
      }
    }}>
      <figure className="media-item project-carousel-slide" key={item.src}>
        {item.type === "video" ? (
          <video src={withBase(item.src)} poster={item.poster ? withBase(item.poster) : undefined} controls playsInline preload="metadata" />
        ) : (
          <button type="button" className="media-item-open" onClick={() => onOpenImage(item)} aria-label={`${t.project.openImage}: ${item.title?.[language] ?? title}`}>
            <img src={withBase(item.src)} alt={item.title?.[language] ?? title} loading="lazy" />
          </button>
        )}
        {(item.title || item.description) && <figcaption>
          {item.title && <strong>{item.title[language]}</strong>}
          {item.description && <span>{item.description[language]}</span>}
        </figcaption>}
      </figure>
      {media.length > 1 && <div className="project-carousel-toolbar">
        <button className="media-carousel-control" type="button" onClick={() => move(-1)} aria-label={es ? "Medio anterior" : "Previous media"}>←</button>
        <div className="project-carousel-selectors">
          {media.map((entry, position) => <button key={entry.src} type="button" aria-current={position === index ? "true" : undefined} aria-label={entry.title?.[language] ?? `${position + 1}`} onClick={() => setIndex(position)}>
            {entry.type === "video" ? (es ? "Video" : "Video") : `${es ? "Captura" : "Screenshot"} ${media.slice(0, position + 1).filter((part) => part.type !== "video").length}`}
          </button>)}
        </div>
        <span className="project-carousel-position" aria-live="polite">{index + 1} / {media.length}</span>
        <button className="media-carousel-control" type="button" onClick={() => move(1)} aria-label={es ? "Medio siguiente" : "Next media"}>→</button>
      </div>}
    </div>
  );
}
