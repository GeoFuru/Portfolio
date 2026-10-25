import { useEffect, useState } from "react";
import type { ProjectMedia, ProjectMediaLayout } from "../types/project";
import { useLanguage } from "../i18n/useLanguage";
import { withBase } from "../utils/paths";

interface MediaGalleryProps {
  media: ProjectMedia[];
  layout?: ProjectMediaLayout;
  title?: string;
  sectionId?: string;
}

function MediaGallery({
  media,
  layout = "grid",
  title,
  sectionId,
}: MediaGalleryProps) {
  const { language, t } = useLanguage();

  const images = media.filter(
    (item) => item.type !== "video",
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const activeImage = images.length > 0
    ? images[activeIndex % images.length]
    : null;
  const selectedMedia = lightboxOpen ? activeImage : null;

  useEffect(() => {
    if (!lightboxOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setLightboxOpen(false);
      if (images.length > 0 && event.key === "ArrowLeft") {
        setActiveIndex((current) => (current - 1 + images.length) % images.length);
      }
      if (images.length > 0 && event.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % images.length);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen, images.length]);

  if (media.length === 0) {
    return null;
  }

  function showPrevious() {
    if (images.length === 0) return;
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  }

  function showNext() {
    if (images.length === 0) return;
    setActiveIndex((current) => (current + 1) % images.length);
  }

  return (
    <>
      <section className="project-detail-section" id={sectionId}>
        <h2>{title ?? t.project.media}</h2>

        {layout === "carousel" ? (
          <>
            {activeImage && (
              <div className="media-carousel" aria-label={title ?? t.project.media}>
                {images.length > 1 && (
                  <button className="media-carousel-control" type="button" onClick={showPrevious} aria-label={t.project.previousImage}>
                    <span aria-hidden="true">←</span>
                  </button>
                )}
                <figure className="media-item media-carousel-item">
                  <button
                    type="button"
                    className="media-item-open"
                    onClick={() => setLightboxOpen(true)}
                    aria-label={activeImage.title?.[language] ?? t.project.openImage}
                  >
                    <img
                      src={withBase(activeImage.src)}
                      alt={activeImage.description?.[language] ?? activeImage.title?.[language] ?? t.project.openImage}
                      loading="lazy"
                    />
                  </button>
                  {(activeImage.title || activeImage.description) && (
                    <figcaption>
                      {activeImage.title && <strong>{activeImage.title[language]}</strong>}
                      {activeImage.description && <span>{activeImage.description[language]}</span>}
                    </figcaption>
                  )}
                </figure>
                {images.length > 1 && (
                  <button className="media-carousel-control" type="button" onClick={showNext} aria-label={t.project.nextImage}>
                    <span aria-hidden="true">→</span>
                  </button>
                )}
                {images.length > 1 && (
                  <p className="media-carousel-count" aria-live="polite">{activeIndex + 1} / {images.length}</p>
                )}
              </div>
            )}
            {media.filter((item) => item.type === "video").map((item) => (
              <figure key={item.src} className="media-item media-carousel-video">
                {(item.title || item.description) && (
                  <figcaption className="media-video-caption">
                    {item.title && <strong>{item.title[language]}</strong>}
                    {item.description && <span>{item.description[language]}</span>}
                  </figcaption>
                )}
                <video src={withBase(item.src)} poster={item.poster ? withBase(item.poster) : undefined} controls playsInline preload="metadata" />
              </figure>
            ))}
          </>
        ) : (
          <div className="media-gallery">
            {media.map((item) => (
            <figure key={item.src} className="media-item">
              {item.type === "video" ? (
                <video
                  src={withBase(item.src)}
                  poster={item.poster ? withBase(item.poster) : undefined}
                  playsInline
                  controls
                  preload="metadata"
                />
              ) : (
                <button
                  type="button"
                  className="media-item-open"
                  onClick={() => {
                    setActiveIndex(images.findIndex((image) => image.src === item.src));
                    setLightboxOpen(true);
                  }}
                  aria-label={item.title?.[language] ?? t.project.openImage}
                >
                  <img
                    src={withBase(item.src)}
                    alt={item.description?.[language] ?? item.title?.[language] ?? t.project.openImage}
                    loading="lazy"
                  />
                </button>
              )}

              {(item.title ||
                item.description) && (
                <figcaption>
                  {item.title && (
                    <strong>
                      {item.title[language]}
                    </strong>
                  )}

                  {item.description && (
                    <span>
                      {
                        item.description[
                          language
                        ]
                      }
                    </span>
                  )}
                </figcaption>
              )}
            </figure>
            ))}
          </div>
        )}
      </section>

      {selectedMedia && (
        <div
          className="media-lightbox"
          onClick={() =>
            setLightboxOpen(false)
          }
          role="dialog"
          aria-modal="true"
          aria-label={t.project.media}
        >
          <div
            className="media-lightbox-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              className="media-lightbox-close"
              onClick={() =>
                setLightboxOpen(false)
              }
                aria-label={t.project.closeImage}
            >
              ×
            </button>

            {images.length > 1 && (
              <button
                className="media-lightbox-prev"
                onClick={showPrevious}
                aria-label={t.project.previousImage}
              >
                ←
              </button>
            )}

            <img
              src={withBase(selectedMedia.src)}
              alt={
                selectedMedia.title?.[language] ??
                t.project.media
              }
            />

            {images.length > 1 && (
              <button
                className="media-lightbox-next"
                onClick={showNext}
                aria-label={t.project.nextImage}
              >
                →
              </button>
            )}

            <div className="media-lightbox-info">
              {selectedMedia.title && (
                <h3>
                  {
                    selectedMedia.title[
                      language
                    ]
                  }
                </h3>
              )}

              {selectedMedia.description && (
                <p>
                  {
                    selectedMedia.description[
                      language
                    ]
                  }
                </p>
              )}

              {images.length > 1 && (
                <span>
                  {activeIndex + 1} /{" "}
                  {images.length}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MediaGallery;
