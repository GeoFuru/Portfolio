import type { Project } from "../types/project";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: Project[];
  featuredOnly?: boolean;
}

function ProjectList({
  projects,
  featuredOnly = false,
}: ProjectListProps) {
  const visibleProjects = featuredOnly
    ? projects.filter((project) => project.featured)
    : projects;

  return (
    <div className="project-grid">
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