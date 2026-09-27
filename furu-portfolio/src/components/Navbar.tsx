import { useLanguage } from "../i18n/LanguageContext";

function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="navbar">
      <a href="/" className="logo">
        FURU
      </a>

      <nav className="nav-links">
        <a href="/projects">{t.nav.projects}</a>
        <a href="#about">{t.nav.about}</a>

        <button
          type="button"
          className="language-switch"
          onClick={() =>
            setLanguage(language === "en" ? "es" : "en")
          }
          aria-label="Change language"
        >
          {language === "en" ? "ES" : "EN"}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;