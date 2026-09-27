import type { Project } from "../types/project";
import TechnologyTag from "./TechnologyTag";
import { useLanguage } from "../i18n/LanguageContext";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const { language, t } = useLanguage();

  return (
    <a
      href={`/projects/${project.id}`}
      className="project-card"
    >
      {project.image && (
        <div className="project-card-image">
          <img
            src={project.image}
            alt={project.title[language]}
          />
        </div>
      )}

      <div className="project-card-content">
        <div className="project-header">
          <span className="project-status">
            {t.status[project.status].toUpperCase()}
          </span>

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