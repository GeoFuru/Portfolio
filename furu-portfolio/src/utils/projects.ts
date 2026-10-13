import { projects } from "../data/projects";
import type { Project } from "../types/project";

export function isPublicProject(project: Project): boolean {
  return project.visibility === "public";
}

export const publicProjects = projects.filter(isPublicProject);
