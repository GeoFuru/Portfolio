import {
  useEffect,
  useRef,
  useState,
} from "react";

import type { Technology } from "../types/technology";
import { useLanguage } from "../i18n/useLanguage";

interface ProjectsToolbarProps {
  query: string;
  onQueryChange: (query: string) => void;
  technologies: Technology[];
  selectedTechnologies: string[];
  onToggleTechnology: (id: string) => void;
  onClearTechnologies: () => void;
}

function ProjectsToolbar({
  query,
  onQueryChange,
  technologies,
  selectedTechnologies,
  onToggleTechnology,
  onClearTechnologies,
}: ProjectsToolbarProps) {
  const { t } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement | null>(null);

  const selectedCount = selectedTechnologies.length;

  // Close the dropdown when clicking outside or pressing Escape.
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: MouseEvent) {
      if (
        filterRef.current &&
        !filterRef.current.contains(
          event.target as Node,
        )
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handlePointerDown,
    );
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "mousedown",
        handlePointerDown,
      );
      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [isOpen]);

  return (
    <div className="projects-toolbar">
      <input
        type="search"
        className="project-search"
        value={query}
        onChange={(event) =>
          onQueryChange(event.target.value)
        }
        placeholder={t.projects.searchPlaceholder}
        aria-label={t.projects.searchLabel}
      />

      <div className="project-filter" ref={filterRef}>
        <button
          type="button"
          className="project-filter-button"
          onClick={() =>
            setIsOpen((isOpen) => !isOpen)
          }
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {t.projects.filterButton}

          {selectedCount > 0 && (
            <span className="project-filter-badge">
              {selectedCount}
            </span>
          )}

          <span aria-hidden="true">
            {isOpen ? "▴" : "▾"}
          </span>
        </button>

        {isOpen && (
          <div className="project-filter-panel">
            <div className="project-filter-chips">
              {technologies.map((technology) => {
                const isSelected =
                  selectedTechnologies.includes(
                    technology.id,
                  );

                return (
                  <button
                    key={technology.id}
                    type="button"
                    className="project-filter-chip"
                    aria-pressed={isSelected}
                    onClick={() =>
                      onToggleTechnology(
                        technology.id,
                      )
                    }
                  >
                    {technology.name}
                  </button>
                );
              })}
            </div>

            {selectedCount > 0 && (
              <button
                type="button"
                className="project-filter-clear"
                onClick={onClearTechnologies}
              >
                {t.projects.clearFilters}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsToolbar;
