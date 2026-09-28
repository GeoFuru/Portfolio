export interface LocalizedText {
  en: string;
  es: string;
}

export type ProjectStatus =
  | "completed"
  | "ongoing"
  | "archived";

export type ProjectSectionType =
  | "overview"
  | "problem"
  | "approach"
  | "results"
  | "validation"
  | "limitations"
  | "future";

export interface ProjectSection {
  id: string;
  type: ProjectSectionType;
  title: LocalizedText;
  content: LocalizedText;
}

export interface ProjectMedia {
  type: "image" | "video" | "gif";
  src: string;
  title?: LocalizedText;
  description?: LocalizedText;
}

export interface Project {
  id: string;

  title: LocalizedText;
  description: LocalizedText;

  sections?: ProjectSection[];
  media?: ProjectMedia[];

  year: number;
  status: ProjectStatus;

  technologies: string[];
  domains: LocalizedText[];

  featured: boolean;

  platform?: string;

  location?: LocalizedText;
  coordinates?: [number, number];

  image?: string;
  video?: string;
  github?: string;
  liveDemo?: string;
}