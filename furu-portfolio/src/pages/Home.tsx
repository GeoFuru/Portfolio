import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectList from "../components/ProjectList";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

import { publicProjects } from "../utils/projects";
import { useLanguage } from "../i18n/useLanguage";

const focusedProjects = publicProjects.filter((project) => project.featured);

function Home() {
  const { t } = useLanguage();

  return (
    <div className="app home-page">
      <Navbar />

      <main>
        <section className="home-hero">
          <Hero />
        </section>

        <section id="work" className="work-section">
          <div className="section-heading">
            <p className="eyebrow">{t.home.selectedWork}</p>
            <h2>{t.home.title}</h2>
            <p>{t.home.description}</p>
          </div>

          <ProjectList
            projects={focusedProjects}
            layout="expand"
          />
        </section>

        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
