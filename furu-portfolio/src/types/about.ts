import type { LocalizedText } from "./project";

export interface ContactItem {
  label: LocalizedText;
  value: string;
  href: string;
}

export interface EducationEntry {
  id: string;
  title: LocalizedText;
  institution: LocalizedText;
  period: LocalizedText;
  description?: LocalizedText;
}

export interface AboutContent {
  name: string;
  headline: LocalizedText;
  bio: LocalizedText[];
  contact: ContactItem[];
  interests: LocalizedText[];
  education: EducationEntry[];
}
