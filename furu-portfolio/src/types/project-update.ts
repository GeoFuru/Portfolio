import type { LocalizedText } from "./project";

export interface ProjectUpdate {
  id: string;
  /** ISO date: YYYY-MM-DD. */
  date: string;
  title: LocalizedText;
  description?: LocalizedText;
  commit?: string;
  type?: string;
  scope?: string;
  details?: { es: string[]; en: string[] };
  note?: LocalizedText;
  sources?: string[];
}
