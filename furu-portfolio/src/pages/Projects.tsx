import ProjectList from "../components/ProjectList";
import { projects } from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";

function Projects() {
  const { t } = useLanguage();

  return (
    <div className="app">
      <Navbar />

      <main className="projects-page">
        <section className="work-section">
          <div className="section-heading">
            <p className="eyebrow">
              {t.projects.eyebrow}
            </p>

            <h1>{t.projects.title}</h1>

            <p>{t.projects.description}</p>
          </div>

          <ProjectList projects={projects} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Projects;