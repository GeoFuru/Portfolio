import { useLanguage } from "../i18n/useLanguage";
import { withBase } from "../utils/paths";

function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="navbar">
      <a href={withBase("/")} className="logo">
        GeoFuru
      </a>

      <nav className="nav-links">
        <a href={withBase("/projects")}>{t.nav.projects}</a>
        <a href={withBase("/gallery")}>{t.nav.gallery}</a>
        <a href={withBase("/about")}>{t.nav.about}</a>

        <button
          type="button"
          className="language-switch"
          onClick={() =>
            setLanguage(language === "en" ? "es" : "en")
          }
          aria-label={t.language.switchLanguage}
        >
          {language === "en" ? "ES" : "EN"}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
