import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { about } from "../data/about";
import { useLanguage } from "../i18n/useLanguage";

function InterestIcon({ index }: { index: number }) {
  const paths = [
    <><circle cx="12" cy="12" r="8.5" /><path d="M3.8 12h16.4M12 3.5c2.3 2.3 3.3 5.1 3.3 8.5s-1 6.2-3.3 8.5c-2.3-2.3-3.3-5.1-3.3-8.5s1-6.2 3.3-8.5Z" /></>,
    <><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 5l-4 14" /></>,
    <><path d="M3 5.5 8.5 3l7 2.5L21 3v15.5L15.5 21l-7-2.5L3 21V5.5Z" /><path d="M8.5 3v15.5M15.5 5.5V21" /></>,
    <><circle cx="12" cy="12" r="2.5" /><ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(-35 12 12)" /><circle cx="19.2" cy="6.8" r="1" /></>,
    <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8m7.2 7.2 2.8 2.8m0-12.8-2.8 2.8m-7.2 7.2-2.8 2.8" /><circle cx="12" cy="12" r="3.5" /></>,
    <><path d="M5 4h14M5 20h14M8 4c0 5 8 6 8 8s-8 3-8 8M16 4c0 5-8 6-8 8s8 3 8 8" /></>,
  ];

  return (
    <svg className="about-interest-icon" aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      {paths[index % paths.length]}
    </svg>
  );
}

function ContactIcon({ label }: { label: string }) {
  if (label === "Email") {
    return <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M3.5 6.5h17v11h-17zM4 7l8 6 8-6" /></svg>;
  }
  if (label === "LinkedIn") {
    return <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M4 9v11M4 5.5v.1M9.5 20v-11h4v1.8c.8-1.4 2-2.1 3.6-2.1 2.5 0 3.9 1.6 3.9 4.6V20M9.5 14c0-3.4 1.3-5.3 4-5.3" /></svg>;
  }
  return <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M8.5 19.5c-4 .9-4-2-5.5-2.5m11 5v-3.1c0-.9.1-1.5-.4-2 3.2-.4 6.6-1.6 6.6-7.2a5.6 5.6 0 0 0-1.5-3.9 5.2 5.2 0 0 0-.1-3.8s-1.2-.4-4.1 1.5a14.2 14.2 0 0 0-7.5 0C4.1 1.6 2.9 2 2.9 2a5.2 5.2 0 0 0-.1 3.8 5.6 5.6 0 0 0-1.5 3.9c0 5.6 3.4 6.8 6.6 7.2-.5.5-.5 1.3-.5 2v3.1" transform="translate(1 -1) scale(.92)" /></svg>;
}

function About() {
  const { language, t } = useLanguage();
  const education = about.education[0];

  return (
    <div className="app">
      <Navbar />

      <main className="about-page">
        <header className="about-hero">
          <div className="about-hero-copy">
            <div className="about-window-bar" aria-hidden="true">
              <span className="about-window-lights"><i /><i /><i /></span>
              <span>GEOFURU://PROFILE</span>
              <span>01</span>
            </div>
            <div className="about-hero-content">
              <p className="eyebrow">{t.aboutPage.eyebrow}</p>
              <h1>{about.name}</h1>
              <p className="about-headline">{about.headline[language]}</p>
              <p className="about-intro">{about.bio[0][language]}</p>
              <nav className="about-hero-links" aria-label={t.aboutPage.contact}>
                {about.contact.map((item) => (
                  <a
                    key={item.label.en}
                    className="about-hero-link"
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  >
                    <ContactIcon label={item.label.en} />
                    <span>{item.label[language]}</span>
                    <small>{item.value}</small>
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <aside className="about-hero-side" aria-hidden="true">
            <span className="about-side-label">PERSONAL PROFILE</span>
            <span className="about-side-rule" />
            <span className="about-side-id">GF—001</span>
          </aside>
        </header>

        <section className="about-bio-section">
          <div className="about-section-heading">
            <p className="eyebrow">{t.aboutPage.bio}</p>
            <h2>{t.aboutPage.bioTitle}</h2>
          </div>
          <div className="about-bio-grid">
            {about.bio.slice(1).map((paragraph, index) => (
              <article className={`about-bio-card about-bio-card-${index + 1}`} key={paragraph.en}>
                <span className="about-bio-index">/{String(index + 2).padStart(2, "0")}</span>
                <p>{paragraph[language]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-interests-section">
          <div className="about-section-heading">
            <p className="eyebrow">{t.aboutPage.interests}</p>
            <h2>{t.aboutPage.interestsTitle}</h2>
          </div>
          <div className="about-interest-grid">
            {about.interests.map((interest, index) => (
              <article className={`about-interest-card about-interest-card-${index + 1}`} key={interest.en}>
                <span className="about-interest-index">0{index + 1}</span>
                <InterestIcon index={index} />
                <span>{interest[language]}</span>
              </article>
            ))}
          </div>
        </section>

        {education && (
          <section className="about-education">
            <div className="about-section-heading">
              <p className="eyebrow">{t.aboutPage.education}</p>
              <h2>{t.aboutPage.educationSubtitle}</h2>
            </div>
            <div className="about-info-panel about-education-panel">
              <span className="about-education-stamp" aria-hidden="true">EDU<br />01</span>
              <p className="eyebrow">{t.aboutPage.education}</p>
              <article className="about-education-card">
                <div className="about-education-icon" aria-hidden="true">
                  <svg viewBox="0 0 32 32" focusable="false">
                    <path d="m3 12 13-7 13 7-13 7-13-7Z" />
                    <path d="M8 15v7c4 4 12 4 16 0v-7M29 12v9" />
                  </svg>
                </div>
                <div className="about-education-copy">
                  <h2>{education.title[language]}</h2>
                  <p className="about-education-institution">{education.institution[language]}</p>
                  <span className="about-education-period">{education.period[language]}</span>
                  {education.description && <p className="about-education-description">{education.description[language]}</p>}
                </div>
              </article>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default About;
