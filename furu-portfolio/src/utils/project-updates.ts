import type { ProjectUpdate } from "../types/project-update";

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().trim();
}

export function filterProjectUpdates(updates: ProjectUpdate[], query: string, type: string) {
  const search = normalize(query);
  return [...updates]
    .sort((a, b) => b.date.localeCompare(a.date))
    .filter((entry) => (type === "all" || entry.type === type) && normalize([
      entry.date, entry.type, entry.scope, entry.commit,
      ...Object.values(entry.title), ...Object.values(entry.description ?? {}),
      ...(entry.details?.es ?? []), ...(entry.details?.en ?? []),
      ...Object.values(entry.note ?? {}), ...(entry.sources ?? []),
    ].join(" ")).includes(search));
}
