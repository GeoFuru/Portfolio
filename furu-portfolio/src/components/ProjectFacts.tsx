import type { Project } from "../types/project";
import { useLanguage } from "../i18n/useLanguage";

interface ProjectFactsProps {
  project: Project;
}

function ProjectFacts({
  project,
}: ProjectFactsProps) {
  const { language, t } = useLanguage();

  return (
    <div className="project-facts">
      <div className="project-fact">
        <span>{t.facts.status}</span>

        <strong>
          {t.status[project.status]}
        </strong>
      </div>

      <div className="project-fact">
        <span>{t.facts.year}</span>

        <strong>
          {project.year}
        </strong>
      </div>

      <div className="project-fact">
        <span>{t.facts.platform}</span>

        <strong>
          {project.platform ?? "—"}
        </strong>
      </div>

      <div className="project-fact">
        <span>{t.facts.domain}</span>

        <strong>
          {project.domains
            .map((domain) => domain[language])
            .join(" · ")}
        </strong>
      </div>
    </div>
  );
}

export default ProjectFacts;