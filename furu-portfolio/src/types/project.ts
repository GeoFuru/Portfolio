export interface LocalizedText {
  en: string;
  es: string;
}

export type ProjectStatus =
  | "completed"
  | "ongoing"
  | "alpha"
  | "archived";

export type ProjectVisibility = "public" | "hidden";

export type ProjectRole =
  | "frontend"
  | "backend"
  | "fullstack"
  | "desktop"
  | "data"
  | "analysis";

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
  eyebrow?: LocalizedText;
  title: LocalizedText;
  content: LocalizedText;
}

export interface ProjectMedia {
  type: "image" | "video" | "gif";
  src: string;
  poster?: string;
  title?: LocalizedText;
  description?: LocalizedText;
}

export interface ProjectFeature {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  media?: ProjectMedia;
}

export interface ProjectDemo {
  url: string;
  mode: "iframe" | "external";
  title: LocalizedText;
  sectionEyebrow?: LocalizedText;
  heading?: LocalizedText;
  description?: LocalizedText;
}

export type ProjectMediaLayout = "grid" | "carousel";

export interface Project {
  id: string;
  visibility: ProjectVisibility;

  title: LocalizedText;
  subtitle?: LocalizedText;
  description: LocalizedText;

  sections?: ProjectSection[];
  features?: ProjectFeature[];
  featuresEyebrow?: LocalizedText;
  featuresTitle?: LocalizedText;
  media?: ProjectMedia[];
  mediaLayout?: ProjectMediaLayout;
  mediaTitle?: LocalizedText;
  demo?: ProjectDemo;

  year: number;
  status: ProjectStatus;

  technologies: string[];
  domains: LocalizedText[];
  roles: ProjectRole[];

  featured: boolean;

  platform?: string;

  location?: LocalizedText;
  coordinates?: [number, number];

  image?: string;
  imageAlt?: LocalizedText;
  video?: string;
  github?: string;
  liveDemo?: string;
  documentation?: string;
}
