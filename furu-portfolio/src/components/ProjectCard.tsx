import type { Project } from "../types/project";
import TechnologyTag from "./TechnologyTag";
import { useLanguage } from "../i18n/useLanguage";
import { withBase } from "../utils/paths";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const { language, t } = useLanguage();
  const videoPreview = project.media?.find((item) => item.type === "video");

  return (
    <a
      href={withBase(`/projects/${project.id}`)}
      className="project-card"
    >
      {videoPreview ? (
        <div className="project-card-image">
          <video
            src={withBase(videoPreview.src)}
            poster={videoPreview.poster ? withBase(videoPreview.poster) : undefined}
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            tabIndex={-1}
          />
        </div>
      ) : project.image ? (
        <div className="project-card-image">
          <img
            src={withBase(project.image)}
            alt={project.title[language]}
          />
        </div>
      ) : null}

      <div className="project-card-content">
        <div className="project-header">
          <div className="project-header-tags">
            <span className="project-status">
              {t.status[project.status].toUpperCase()}
            </span>

            {project.roles.map((role) => (
              <span
                key={role}
                className="project-role"
              >
                {t.roles[role]}
              </span>
            ))}
          </div>

          <div className="project-meta">
            <span>{project.year}</span>
          </div>
        </div>

        <h3>{project.title[language]}</h3>

        <p>{project.description[language]}</p>

        <div className="project-domains">
          {project.domains.map((domain) => (
            <span key={domain.en}>
              {domain[language]}
            </span>
          ))}
        </div>

        <div className="project-tags">
          {project.technologies.map((technology) => (
            <TechnologyTag
              key={technology}
              id={technology}
            />
          ))}
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
