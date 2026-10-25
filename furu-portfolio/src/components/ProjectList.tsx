import type { Project } from "../types/project";
import { isPublicProject } from "../utils/projects";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: Project[];
  featuredOnly?: boolean;
  /**
   * "fixed": cards keep their size no matter how few there
   * are (project lists, filtered results).
   * "expand": a few cards grow to fill the row (featured).
   */
  layout?: "fixed" | "expand";
}

function ProjectList({
  projects,
  featuredOnly = false,
  layout = "fixed",
}: ProjectListProps) {
  const visibleProjects = projects
    .filter(isPublicProject)
    .filter((project) => !featuredOnly || project.featured);

  return (
    <div
      className={`project-grid project-grid-${layout}`}
    >
      {visibleProjects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}

export default ProjectList;
