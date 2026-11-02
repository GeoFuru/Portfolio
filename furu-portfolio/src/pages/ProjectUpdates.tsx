import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectProse from "../components/ProjectProse";
import { useLanguage } from "../i18n/useLanguage";
import { publicProjects } from "../utils/projects";
import { withBase } from "../utils/paths";
import { filterProjectUpdates } from "../utils/project-updates";

const kinds: Record<string, { es: string; en: string }> = {
  feat: { es: "Funciones", en: "Features" },
  fix: { es: "Correcciones", en: "Fixes" },
  test: { es: "Pruebas", en: "Tests" },
  research: { es: "Investigación", en: "Research" },
  plan: { es: "Planificados", en: "Planned" },
  docs: { es: "Documentación", en: "Documentation" },
  chore: { es: "Mantenimiento", en: "Maintenance" },
};

export default function ProjectUpdates({ projectId }: { projectId: string }) {
  const { language, t } = useLanguage();
  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");
  const project = publicProjects.find((item) => item.id === projectId);
  const enabled = project?.updates !== undefined;
  const all = project?.updates ?? [];
  const updates = filterProjectUpdates(all, query, type);
  const es = language === "es";

  return (
    <div className="app">
      <Navbar />
      <main className="project-page project-detail project-updates-page">
        <a className="back-link" href={withBase(enabled ? `/projects/${projectId}` : "/projects")}>
          {enabled ? `← ${project.title[language]}` : t.project.back}
        </a>
        {enabled ? (
          <>
            <header className="project-updates-header">
              <div className="about-window-bar project-updates-bar" aria-hidden="true">
                <span className="about-window-lights"><i /><i /><i /></span>
                <span>GEOFURU://CHANGELOG</span>
                <span>{String(all.length).padStart(2, "0")}</span>
              </div>
              <p className="eyebrow">{project.title[language]} / {es ? "Actualizaciones" : "Updates"}</p>
              <h1>{es ? "Bitácora de desarrollo" : "Development log"}</h1>
              <p>{es ? "Cambios agrupados por fecha y función, desde el primer prototipo hasta las validaciones geodésicas. Selecciona una entrada para ver qué se hizo." : "Changes grouped by date and function, from the first prototype to geodetic validation. Select an entry to see what was done."}</p>
            </header>
            {all.length > 0 && <>
              <div className="project-updates-controls">
                <label>
                  <span>{es ? "Buscar en la bitácora" : "Search the log"}</span>
                  <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={es ? "Título, tecnología, fecha…" : "Title, technology, date…"} />
                </label>
                <label>
                  <span>{es ? "Tipo de cambio" : "Change type"}</span>
                  <select value={type} onChange={(event) => setType(event.target.value)}>
                    <option value="all">{es ? "Todos los cambios" : "All changes"}</option>
                    {Object.entries(kinds).map(([key, label]) => <option key={key} value={key}>{label[language]}</option>)}
                  </select>
                </label>
              </div>
              <p className="project-updates-count" role="status">{updates.length} / {all.length} {es ? "entradas" : "entries"}</p>
            </>}
            {updates.length > 0 ? (
              <div className="project-log-entries">
                {updates.map((update) => (
                  <details className="project-log-entry" key={update.id}>
                    <summary>
                      <div>
                        <time dateTime={update.date}>{new Intl.DateTimeFormat(es ? "es-CL" : "en-GB", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${update.date}T00:00:00Z`))}</time>
                        <h2>{update.type && <span className="project-log-kind">{update.type}{update.scope ? `(${update.scope})` : ""}: </span>}{update.title[language]}</h2>
                      </div>
                      <span className="project-log-toggle" aria-hidden="true" />
                    </summary>
                    <div className="project-log-body">
                      {update.description && <ProjectProse text={update.description[language]} />}
                      {update.details && <ul>{update.details[language].map((detail, index) => <li key={index}>{detail}</li>)}</ul>}
                      {update.note && <p className="project-log-note">{update.note[language]}</p>}
                      {update.commit && <p className="project-log-source">Commit: <code>{update.commit}</code></p>}
                      {update.sources && <p className="project-log-source">{es ? "Bitácora" : "Source log"}: {update.sources.join(" · ")}</p>}
                    </div>
                  </details>
                ))}
              </div>
            ) : (
              <p className="project-updates-empty">{all.length ? (es ? "No se encontraron entradas con esta búsqueda y filtro." : "No entries match this search and filter.") : (es ? "Todavía no hay actualizaciones publicadas." : "No updates have been published yet.")}</p>
            )}
          </>
        ) : (
          <header className="project-updates-header"><p className="eyebrow">404</p><h1>{t.project.notFound}</h1></header>
        )}
      </main>
      <Footer />
    </div>
  );
}
