import { useLanguage } from "../i18n/LanguageContext";

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <p className="eyebrow">{t.hero.eyebrow}</p>

      <h1>
        {t.hero.titleLine1}
        <br />
        {t.hero.titleLine2}
      </h1>

      <p className="hero-description">
        {t.hero.description}
      </p>

      <a href="#work" className="primary-button">
        {t.hero.button}
      </a>
    </section>
  );
}

export default Hero;