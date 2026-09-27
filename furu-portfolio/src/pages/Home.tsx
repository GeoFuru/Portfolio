import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectList from "../components/ProjectList";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import HomeMap from "../components/HomeMap";

import { projects } from "../data/projects";
import { useLanguage } from "../i18n/LanguageContext";

function Home() {
  const { language, t } = useLanguage();

  const galleryItems = projects.flatMap(
    (project) =>
      project.media
        ?.filter(
          (media) => media.type === "image",
        )
        .map((media) => ({
          ...media,
          projectId: project.id,
          projectTitle:
            project.title[language],
        })) ?? [],
  );

  return (
    <div className="app">
      <Navbar />

      <main>
        <section className="home-hero">
          <Hero />

          <HomeMap />
        </section>

        <section className="home-gallery">
          <div className="section-heading">
            <p className="eyebrow">
              {t.home.galleryEyebrow}
            </p>

            <h2>
              {t.home.galleryTitle}
            </h2>
          </div>

          <div className="gallery-track">
            {galleryItems.map((item) => (
              <a
                key={`${item.src}-${item.projectTitle}`}
                href={`/projects/${item.projectId}`}
                className="gallery-item"
              >
                <img
                  src={item.src}
                  alt={
                    item.title?.[language] ??
                    item.projectTitle
                  }
                />

                <div className="gallery-item-caption">
                  <strong>
                    {item.title?.[language] ??
                      item.projectTitle}
                  </strong>

                  <span>
                    {item.projectTitle}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section
          id="work"
          className="work-section"
        >
          <div className="section-heading">
            <p className="eyebrow">
              {t.home.selectedWork}
            </p>

            <h2>{t.home.title}</h2>

            <p>
              {t.home.description}
            </p>
          </div>

          <ProjectList
            projects={projects}
            featuredOnly
          />
        </section>

        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}

export default Home;