import { projects } from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TechnologyTag from "../components/TechnologyTag";
import MediaGallery from "../components/MediaGallery";
import ProjectFacts from "../components/ProjectFacts";
import ProjectMap from "../components/ProjectMap";
import { useLanguage } from "../i18n/LanguageContext";

interface ProjectPageProps {
  projectId: string;
}

function ProjectPage({ projectId }: ProjectPageProps) {
  const { language, t } = useLanguage();

  const project = projects.find(
    (project) => project.id === projectId,
  );

  if (!project) {
    return (
      <div className="app">
        <Navbar />

        <main className="project-page">
          <section className="project-detail">
            <a href="/projects" className="back-link">
              {t.project.back}
            </a>

            <p className="eyebrow">404</p>

            <h1>{t.project.notFound}</h1>

            <a href="/projects">
              {t.project.backToProjects}
            </a>
          </section>
        </main>

        <Footer />
      </div>
    );
  }

  

  return (
    <div className="app">
      <Navbar />

      <main className="project-page">
        <section className="project-detail">
          <div className="project-header">
            <span className="project-status">
              {t.status[project.status].toUpperCase()}
            </span>

            <span className="project-year">
              {project.year}
            </span>
          </div>

          <p className="eyebrow">
            {t.project.eyebrow}
          </p>

          <h1>{project.title[language]}</h1>

          <p className="project-description">
            {project.description[language]}
          </p>

          <div className="project-domains">
            {project.domains.map((domain) => (
              <span key={domain.en}>
                {domain[language]}
              </span>
            ))}
          </div>

          <ProjectFacts project={project} />

          <section className="project-detail-section">
            <h2>{t.project.technologies}</h2>

            <div className="project-tags">
              {project.technologies.map((technology) => (
                <TechnologyTag
                  key={technology}
                  id={technology}
                />
              ))}
            </div>
          </section>

          {(project.github || project.liveDemo) && (
            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub
                </a>
              )}

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          )}

          {project.liveDemo && (
            <section className="project-detail-section">
              <h2>Live Demo</h2>

              <div className="project-live-demo">
                <iframe
                  src={project.liveDemo}
                  title={project.title[language]}
                  loading="lazy"
                />
              </div>
            </section>
          )}

          {(project.location || project.coordinates) && (
            <section className="project-detail-section">
              <h2>{t.project.location}</h2>

              {project.location && (
                <p>{project.location[language]}</p>
              )}

              {project.coordinates && (
                <ProjectMap
                  coordinates={project.coordinates}
                  title={project.title[language]}
                />
              )}
            </section>
          )}

          {project.sections?.map((section) => (
            <section
              key={section.id}
              className="project-detail-section"
            >
              <h2>{section.title[language]}</h2>

              <p>{section.content[language]}</p>
            </section>
          ))}

          {project.media && (
            <MediaGallery media={project.media} />
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ProjectPage;