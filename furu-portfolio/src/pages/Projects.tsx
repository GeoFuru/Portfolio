import { useMemo, useState } from "react";

import ProjectList from "../components/ProjectList";
import ProjectsToolbar from "../components/ProjectsToolbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { publicProjects } from "../utils/projects";
import { technologies } from "../data/technologies";
import { translations } from "../i18n/translations";
import { useLanguage } from "../i18n/useLanguage";

// Lowercases and strips accents so "topografia" matches "Topografía".
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function Projects() {
  const { t } = useLanguage();

  const [query, setQuery] = useState("");
  const [selectedTechnologies, setSelectedTechnologies] =
    useState<string[]>([]);

  // Only technologies actually used by visible projects,
  // sorted alphabetically by display name.
  const availableTechnologies = useMemo(() => {
    const usedIds = new Set(
      publicProjects.flatMap((project) => project.technologies),
    );

    return technologies
      .filter((technology) => usedIds.has(technology.id))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const filteredProjects = useMemo(() => {
    const words = normalizeText(query)
      .split(/\s+/)
      .filter(Boolean);

    return publicProjects.filter((project) => {
      const matchesTechnology =
        selectedTechnologies.length === 0 ||
        project.technologies.some((id) =>
          selectedTechnologies.includes(id),
        );

      if (!matchesTechnology) {
        return false;
      }

      if (words.length === 0) {
        return true;
      }

      const technologyNames = project.technologies.map(
        (id) =>
          technologies.find(
            (technology) => technology.id === id,
          )?.name ?? id,
      );

      const searchableText = normalizeText(
        [
          project.title.en,
          project.title.es,
          project.description.en,
          project.description.es,
          ...project.domains.flatMap((domain) => [domain.en, domain.es]),
          ...technologyNames,
          ...project.technologies,
          ...project.roles.flatMap((role) => [
            translations.en.roles[role],
            translations.es.roles[role],
          ]),
          String(project.year),
          translations.en.status[project.status],
          translations.es.status[project.status],
        ].join(" "),
      );

      return words.every((word) =>
        searchableText.includes(word),
      );
    });
  }, [query, selectedTechnologies]);

  function toggleTechnology(id: string) {
    setSelectedTechnologies((selected) =>
      selected.includes(id)
        ? selected.filter((selectedId) => selectedId !== id)
        : [...selected, id],
    );
  }

  return (
    <div className="app">
      <Navbar />

      <main className="projects-page">
        <section className="work-section">
          <div className="section-heading">
            <p className="eyebrow">{t.projects.eyebrow}</p>
            <h1>{t.projects.title}</h1>
            <p>{t.projects.description}</p>
          </div>

          <ProjectsToolbar
            query={query}
            onQueryChange={setQuery}
            technologies={availableTechnologies}
            selectedTechnologies={selectedTechnologies}
            onToggleTechnology={toggleTechnology}
            onClearTechnologies={() =>
              setSelectedTechnologies([])
            }
          />

          {filteredProjects.length > 0 ? (
            <ProjectList projects={filteredProjects} />
          ) : (
            <p className="projects-empty">
              {t.projects.noResults}
            </p>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Projects;
