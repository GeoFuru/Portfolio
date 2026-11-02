import { useState } from "react";
import { publicProjects } from "../utils/projects";
import type { ProjectSection } from "../types/project";
import ProjectProse from "../components/ProjectProse";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TechnologyTag from "../components/TechnologyTag";
import MediaGallery from "../components/MediaGallery";
import FloatingTableOfContents from "../components/FloatingTableOfContents";
import ProjectMap from "../components/ProjectMap";
import { useLanguage } from "../i18n/useLanguage";
import { withBase } from "../utils/paths";

interface ProjectPageProps {
  projectId: string;
}

function ProjectPage({ projectId }: ProjectPageProps) {
  const { language, t } = useLanguage();
  const [demoRequested, setDemoRequested] = useState(false);
  const [demoReady, setDemoReady] = useState(false);
  const [demoFailed, setDemoFailed] = useState(false);
  const projectIndex = publicProjects.findIndex((item) => item.id === projectId);
  const project = publicProjects[projectIndex];

  if (!project) {
    return (
      <div className="app">
        <Navbar />
        <main className="project-page">
          <section className="project-detail">
            <a href={withBase("/projects")} className="back-link">{t.project.back}</a>
            <p className="eyebrow">404</p>
            <h1>{t.project.notFound}</h1>
            <a href={withBase("/projects")}>{t.project.backToProjects}</a>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const previousProject = publicProjects[(projectIndex - 1 + publicProjects.length) % publicProjects.length];
  const nextProject = publicProjects[(projectIndex + 1) % publicProjects.length];
  const demo = project.demo ?? (project.liveDemo
    ? { url: project.liveDemo, mode: "iframe" as const, title: project.title }
    : undefined);
  const overviewSections = project.sections?.filter((section) => section.type === "overview" || section.type === "problem") ?? [];
  const detailSections = project.sections?.filter((section) => section.type !== "overview" && section.type !== "problem") ?? [];
  const features = project.features?.filter((feature) => feature.title[language].trim() && feature.description[language].trim()) ?? [];
  const tocItems = [
    ...(project.media && project.media.length > 0
      ? [{
          id: "project-media",
          label: project.mediaTitle?.[language]
            ?? project.media.find((item) => item.title?.[language])?.title?.[language]
            ?? t.project.media,
        }]
      : []),
    ...overviewSections
      .filter((section) => section.title[language].trim() && section.content[language].trim())
      .map((section) => ({ id: `project-section-${section.id}`, label: section.title[language] })),
    ...(features.length > 0
      ? [{ id: "project-features", label: project.featuresTitle?.[language] ?? t.project.features }]
      : []),
    ...detailSections
      .filter((section) => section.title[language].trim() && section.content[language].trim())
      .map((section) => ({ id: `project-section-${section.id}`, label: section.title[language] })),
    ...(demo
      ? [{ id: "project-demo", label: demo.heading?.[language] ?? t.project.demoTitle }]
      : []),
  ];

  function renderSection(section: ProjectSection, index: number) {
    return (
      <section className="project-content-section project-prose-section" id={`project-section-${section.id}`} key={section.id}>
        <div className="project-section-heading">
          <p className="eyebrow">{section.eyebrow?.[language] ?? `${String(index).padStart(2, "0")} / ${t.project.sectionLabels[section.type]}`}</p>
          <h2>{section.title[language]}</h2>
        </div>
        <div className="project-prose-block">
          <ProjectProse text={section.content[language]} />
        </div>
      </section>
    );
  }

  return (
    <div className="app">
      <Navbar />

      <main className="project-page project-detail">
        <FloatingTableOfContents items={tocItems} />
        <a href={withBase("/projects")} className="back-link">{t.project.back}</a>

        <header className="project-hero project-profile-hero">
          <div className="project-hero-copy">
            <div className="about-window-bar project-profile-bar" aria-hidden="true">
              <span className="about-window-lights"><i /><i /><i /></span>
              <span>GEOFURU://PROJECT</span>
              <span>{String(projectIndex + 1).padStart(2, "0")}</span>
            </div>
            <div className="project-profile-content">
            <div className="project-hero-meta">
              <span className="project-status">{t.status[project.status]}</span>
              {project.statusDetail && <span>{project.statusDetail[language]}</span>}
              <span>{project.year}</span>
              {(project.statusDetail ? project.domains.slice(0, 2) : project.domains.slice(0, 1)).map((domain) => <span key={domain.en}>{domain[language]}</span>)}
            </div>
            <p className="eyebrow">{t.project.eyebrow}</p>
            <h1>{project.title[language]}</h1>
            {project.subtitle && <p className="project-subtitle">{project.subtitle[language]}</p>}
            {project.introduction ? <div className="project-introduction"><ProjectProse text={project.introduction[language]} /></div> : <p className="project-description">{project.description[language]}</p>}

            <div className="project-hero-actions">
              {project.updates !== undefined && (
                <a href={withBase(`/projects/${project.id}/updates`)} target="_blank" rel="noopener noreferrer" className="project-action" aria-label={language === "es" ? "Actualizaciones (abre en otra pestaña)" : "Updates (opens in a new tab)"}>
                  {language === "es" ? "Actualizaciones" : "Updates"} <span aria-hidden="true">↗</span>
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-action project-action-primary">
                  {t.project.repository} <span aria-hidden="true">↗</span>
                </a>
              )}
              {demo && (
                <a href="#project-demo" className="project-action">
                  {t.project.openDemo} <span aria-hidden="true">↓</span>
                </a>
              )}
              {project.documentation && (
                <a href={project.documentation} target="_blank" rel="noopener noreferrer" className="project-action">
                  {t.project.documentation} <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>

            <div className="project-tech-list" aria-label={t.project.technologies}>
              {project.technologies.map((technology) => <TechnologyTag key={technology} id={technology} />)}
            </div>
            {project.engineeringHighlight ? (
              <div className="project-engineering-highlight">
                <svg className="project-engineering-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 4a3 3 0 0 0-5-1 3 3 0 0 0-3 4 4 4 0 0 0-1 7 3 3 0 0 0 4 4 3 3 0 0 0 5 2V4Zm0 3h4l2-3m-6 8h7m-7 5h4l2 3M7 7v3H4m3 4v3m1-5h4" />
                  <circle cx="19" cy="3" r="1" /><circle cx="20" cy="12" r="1" /><circle cx="19" cy="21" r="1" />
                </svg>
                <div>
                  <h2>{project.engineeringHighlight.title[language]}</h2>
                  <p>{project.engineeringHighlight.description[language]}</p>
                </div>
              </div>
            ) : project.methodologies && <p className="project-methodologies"><strong>{language === "es" ? "Metodologías" : "Methodologies"}:</strong> {project.methodologies.join(" · ")}</p>}
            </div>
          </div>

          <aside className="about-hero-side project-identity-side" aria-hidden="true">
            <span className="about-side-label">GEOFURU://PROJECT</span>
            <span className="about-side-rule" />
            <span className="about-side-id">GF—{String(projectIndex + 1).padStart(3, "0")}</span>
          </aside>
        </header>

        <div className="project-showcase">
          {project.media && project.mediaLayout === "carousel" ? (
            <div className="project-hero-carousel">
              <MediaGallery media={project.media} layout="carousel" title={project.mediaTitle?.[language]} eyebrow={project.mediaEyebrow?.[language]} sectionId="project-media" />
            </div>
          ) : project.image ? (
            <figure className="project-hero-media">
              <img src={withBase(project.image)} alt={project.imageAlt?.[language] ?? project.title[language]} fetchPriority="high" />
            </figure>
          ) : (
            <div className="project-hero-media project-media-pending" role="note">
              <span className="project-media-mark" aria-hidden="true">◫</span>
              <p>{t.project.imagePending}</p>
            </div>
          )}
        </div>

        {overviewSections.map((section, index) => renderSection(section, index + 2))}

        {features.length > 0 && (
          <section className="project-content-section" id="project-features" aria-labelledby="project-features-title">
            <div className="project-section-heading">
              <p className="eyebrow">{project.featuresEyebrow?.[language] ?? `${String(overviewSections.length + 2).padStart(2, "0")} / ${t.project.featuresEyebrow}`}</p>
              <h2 id="project-features-title">{project.featuresTitle?.[language] ?? t.project.features}</h2>
            </div>
            <div className="project-feature-grid">
              {features.map((feature, index) => (
                <article className="project-feature" key={feature.id}>
                  <span className="project-feature-index">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{feature.title[language]}</h3>
                  <div><ProjectProse text={feature.description[language]} /></div>
                  {feature.media && <img src={withBase(feature.media.src)} alt={feature.media.description?.[language] ?? feature.media.title?.[language] ?? feature.title[language]} loading="lazy" />}
                </article>
              ))}
            </div>
          </section>
        )}

        {detailSections.map((section, index) => renderSection(
          section,
          overviewSections.length + (features.length > 0 ? 1 : 0) + index + 2,
        ))}

        {project.location && <p className="project-location">{t.project.location}: {project.location[language]}</p>}
        {project.coordinates && <ProjectMap coordinates={project.coordinates} title={project.title[language]} />}
        {project.media && project.mediaLayout !== "carousel" && (
          <MediaGallery media={project.media} layout={project.mediaLayout} title={project.mediaTitle?.[language]} eyebrow={project.mediaEyebrow?.[language]} sectionId="project-media" />
        )}

        {demo && (
          <section className="project-content-section project-demo-section" id="project-demo">
            <div className="project-section-heading">
              <p className="eyebrow">{demo.sectionEyebrow?.[language] ?? t.project.demoEyebrow}</p>
              <h2>{demo.heading?.[language] ?? t.project.demoTitle}</h2>
              {(demo.description?.[language] ?? t.project.demoDescription).split(/\n\s*\n/).map((paragraph, paragraphIndex) => (
                <p className="project-demo-description" key={`demo-description-${paragraphIndex}`}>{paragraph}</p>
              ))}
            </div>
            <div className="project-demo-frame">
              {demo.mode === "iframe" && demoRequested ? (
                <>
                  <iframe src={demo.url} title={demo.title[language]} loading="lazy" allow="geolocation" referrerPolicy="strict-origin-when-cross-origin" onLoad={() => setDemoReady(true)} onError={() => setDemoFailed(true)} />
                  {!demoReady && <p className="project-demo-status" role="status">{t.project.demoLoading}</p>}
                  <p className="project-demo-fallback">{demoFailed ? t.project.demoFailed : t.project.demoFallback} <a href={demo.url} target="_blank" rel="noopener noreferrer">{t.project.openInNewTab} ↗</a></p>
                </>
              ) : (
                <div className="project-demo-prompt">
                  <p>{t.project.demoPrompt}</p>
                  {demo.mode === "iframe" && (
                    <button className="project-action project-action-primary" type="button" onClick={() => setDemoRequested(true)}>
                      {t.project.loadDemo}
                    </button>
                  )}
                  <a className="project-action" href={demo.url} target="_blank" rel="noopener noreferrer">
                    {t.project.openInNewTab} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              )}
            </div>
          </section>
        )}

        <nav className="project-navigation" aria-label={t.project.projectNavigation}>
          <a href={withBase(`/projects/${previousProject.id}`)}>
            <span>{t.project.previousProject}</span><strong>← {previousProject.title[language]}</strong>
          </a>
          <a href={withBase(`/projects/${nextProject.id}`)}>
            <span>{t.project.nextProject}</span><strong>{nextProject.title[language]} →</strong>
          </a>
        </nav>
      </main>

      <Footer />
    </div>
  );
}

export default ProjectPage;
