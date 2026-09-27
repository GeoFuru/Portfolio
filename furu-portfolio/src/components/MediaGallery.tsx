import { useState } from "react";
import type { ProjectMedia } from "../types/project";
import { useLanguage } from "../i18n/LanguageContext";

interface MediaGalleryProps {
  media: ProjectMedia[];
}

function MediaGallery({
  media,
}: MediaGalleryProps) {
  const { language, t } = useLanguage();

  const images = media.filter(
    (item) => item.type !== "video",
  );

  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  if (media.length === 0) {
    return null;
  }

  const selectedMedia =
    selectedIndex !== null
      ? images[selectedIndex]
      : null;

  function showPrevious() {
    if (
      selectedIndex === null ||
      images.length === 0
    ) {
      return;
    }

    setSelectedIndex(
      (selectedIndex - 1 + images.length) %
        images.length,
    );
  }

  function showNext() {
    if (
      selectedIndex === null ||
      images.length === 0
    ) {
      return;
    }

    setSelectedIndex(
      (selectedIndex + 1) % images.length,
    );
  }

  return (
    <>
      <section className="project-detail-section">
        <h2>{t.project.media}</h2>

        <div className="media-gallery">
          {media.map((item) => (
            <figure
              key={item.src}
              className="media-item"
              onClick={() => {
                if (item.type !== "video") {
                  const index = images.findIndex(
                    (image) =>
                      image.src === item.src,
                  );

                  setSelectedIndex(index);
                }
              }}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  controls
                  preload="metadata"
                />
              ) : (
                <img
                  src={item.src}
                  alt={
                    item.title?.[language] ??
                    "Project media"
                  }
                />
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
      </section>

      {selectedMedia && (
        <div
          className="media-lightbox"
          onClick={() =>
            setSelectedIndex(null)
          }
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
                setSelectedIndex(null)
              }
              aria-label="Close image"
            >
              ×
            </button>

            {images.length > 1 && (
              <button
                className="media-lightbox-prev"
                onClick={showPrevious}
                aria-label="Previous image"
              >
                ←
              </button>
            )}

            <img
              src={selectedMedia.src}
              alt={
                selectedMedia.title?.[language] ??
                "Project media"
              }
            />

            {images.length > 1 && (
              <button
                className="media-lightbox-next"
                onClick={showNext}
                aria-label="Next image"
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
                  {(selectedIndex ?? 0) + 1} /{" "}
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