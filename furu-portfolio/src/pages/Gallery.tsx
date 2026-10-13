import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { getGalleryItems } from "../utils/gallery";
import { useLanguage } from "../i18n/useLanguage";
import { withBase } from "../utils/paths";

function Gallery() {
  const { language, t } = useLanguage();

  const items = getGalleryItems();

  return (
    <div className="app">
      <Navbar />

      <main className="gallery-page">
        <div className="section-heading">
          <p className="eyebrow">
            {t.gallery.eyebrow}
          </p>

          <h1>{t.gallery.title}</h1>

          <p>{t.gallery.description}</p>
        </div>

        <div className="gallery-page-grid">
          {items.map((item) => {
            const title =
              item.caption?.[language] ??
              item.projectTitle[language];

            return (
              <article
                key={`${item.projectId}-${item.src}`}
                className="gallery-page-item"
              >
                {item.type === "video" ? (
                  <video
                    src={withBase(item.src)}
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={title}
                  />
                ) : (
                  <a href={withBase(`/projects/${item.projectId}`)} className="gallery-page-media-link">
                    <img
                      src={withBase(item.src)}
                      alt={title}
                      loading="lazy"
                    />
                  </a>
                )}

                <div className="gallery-page-item-caption">
                  <strong>{title}</strong>

                  {item.caption && (
                    <a href={withBase(`/projects/${item.projectId}`)}>
                      {item.projectTitle[language]} ↗
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Gallery;
