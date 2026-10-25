import { publicProjects } from "./projects";
import type { LocalizedText } from "../types/project";

export interface GalleryItem {
  type: "image" | "video";
  src: string;
  poster?: string;
  projectId: string;
  projectTitle: LocalizedText;
  /** Media title when the image comes from project.media. */
  caption?: LocalizedText;
}

/**
 * Collects project covers and media assets, deduplicated by source path.
 * Each item links back to its project.
 *
 * The gallery updates automatically as images are added
 * or removed from src/data/projects.ts — projects without
 * images simply don't appear.
 */
export function getGalleryItems(): GalleryItem[] {
  const items: GalleryItem[] = [];

  for (const project of publicProjects) {
    const seen = new Set<string>();

    if (project.image) {
      seen.add(project.image);

      items.push({
        type: "image",
        src: project.image,
        projectId: project.id,
        projectTitle: project.title,
      });
    }

    for (const media of project.media ?? []) {
      if (media.type === "gif" || seen.has(media.src)) {
        continue;
      }

      seen.add(media.src);

      items.push({
        type: media.type,
        src: media.src,
        poster: media.poster,
        projectId: project.id,
        projectTitle: project.title,
        caption: media.title,
      });
    }
  }

  return items;
}
