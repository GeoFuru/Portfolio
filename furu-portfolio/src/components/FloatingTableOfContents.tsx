import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/useLanguage";

export interface TableOfContentsItem {
  id: string;
  label: string;
}

interface FloatingTableOfContentsProps {
  items: TableOfContentsItem[];
}

function FloatingTableOfContents({ items }: FloatingTableOfContentsProps) {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (items.length < 4 || typeof IntersectionObserver === "undefined") return;

    const sections = items
      .map((item) => ({ id: item.id, element: document.getElementById(item.id) }))
      .filter((item): item is { id: string; element: HTMLElement } => item.element instanceof HTMLElement);

    if (sections.length < 4) return;

    function updateActiveSection() {
      const activationLine = window.innerHeight * 0.3;
      const current = sections.find(({ element }) => {
        const bounds = element.getBoundingClientRect();
        return bounds.top <= activationLine && bounds.bottom > activationLine;
      });
      const next = sections.find(({ element }) => element.getBoundingClientRect().top > activationLine);
      const active = current ?? next ?? sections[sections.length - 1];

      if (active) setActiveId(active.id);
    }

    const observer = new IntersectionObserver(updateActiveSection, {
      rootMargin: "-25% 0px -65% 0px",
      threshold: 0,
    });

    sections.forEach(({ element }) => observer.observe(element));
    updateActiveSection();

    return () => observer.disconnect();
  }, [items]);

  if (items.length < 4) return null;

  function closeMobileMenu() {
    if (mobileMenuRef.current) mobileMenuRef.current.open = false;
  }

  return (
    <>
      <nav className="floating-toc floating-toc-desktop" aria-label={t.project.tableOfContents}>
        <p className="floating-toc-heading">{t.project.onThisPage}</p>
        <ol>
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} aria-current={activeId === item.id ? "location" : undefined}>
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <details className="floating-toc-mobile" ref={mobileMenuRef}>
        <summary aria-label={t.project.tableOfContents}>
          <span>{t.project.onThisPage}</span>
          <span className="floating-toc-mobile-icon" aria-hidden="true">⌃</span>
        </summary>
        <nav aria-label={t.project.tableOfContents}>
          <ol>
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={activeId === item.id ? "location" : undefined}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </details>
    </>
  );
}

export default FloatingTableOfContents;
