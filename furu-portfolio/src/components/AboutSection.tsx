import { useLanguage } from "../i18n/useLanguage";
import { withBase } from "../utils/paths";

function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="about-section">
      <p className="eyebrow">{t.about.eyebrow}</p>

      <h2>{t.about.title}</h2>

      <p>{t.about.description}</p>

      <a href={withBase("/about")} className="about-more-link">
        {t.about.moreLink}
      </a>
    </section>
  );
}

export default AboutSection;