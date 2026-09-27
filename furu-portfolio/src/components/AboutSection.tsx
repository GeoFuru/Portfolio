import { useLanguage } from "../i18n/LanguageContext";

function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="about-section">
      <p className="eyebrow">{t.about.eyebrow}</p>

      <h2>{t.about.title}</h2>

      <p>{t.about.description}</p>
    </section>
  );
}

export default AboutSection;