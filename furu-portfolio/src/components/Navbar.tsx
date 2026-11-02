import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/useLanguage";
import { currentPath, withBase } from "../utils/paths";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    function key(event: KeyboardEvent) { if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); } }
    function outside(event: PointerEvent) { if (!header.current?.contains(event.target as Node)) setOpen(false); }
    document.addEventListener("keydown", key); document.addEventListener("pointerdown", outside);
    return () => { document.removeEventListener("keydown", key); document.removeEventListener("pointerdown", outside); };
  }, [open]);
  const links = [{path:"/",label:language === "es" ? "Inicio" : "Home"},{path:"/projects",label:t.nav.projects},{path:"/gallery",label:t.nav.gallery},{path:"/about",label:t.nav.about}];
  return <header className="navbar" ref={header}>
    <a href={withBase("/")} className="logo">Geo<span>Furu</span><span aria-hidden="true">_</span></a>
    <div className="navbar-controls"><button className="language-switch" onClick={() => setLanguage(language === "en" ? "es" : "en")} aria-label={t.language.switchLanguage}>{language === "en" ? "ES" : "EN"}</button><button ref={toggle} type="button" className="mobile-menu-toggle" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>{open ? (language === "es" ? "Cerrar" : "Close") : (language === "es" ? "Menú" : "Menu")} <span aria-hidden="true">{open ? "×" : "☰"}</span></button></div>
    <nav id="primary-nav" className={`nav-links${open ? " is-open" : ""}`} aria-label={language === "es" ? "Navegación principal" : "Main navigation"} onBlur={event => { if (!header.current?.contains(event.relatedTarget as Node | null)) setOpen(false); }}>
      {links.map((link,index) => <a key={link.path} href={withBase(link.path)} aria-current={currentPath() === link.path || (link.path === "/projects" && currentPath().startsWith("/projects/")) ? "page" : undefined} onClick={() => setOpen(false)}><span aria-hidden="true">0{index + 1} / </span>{link.label}</a>)}
    </nav>
  </header>;
}
