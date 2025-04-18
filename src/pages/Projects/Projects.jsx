import useLanguage from "../../hooks/useLanguage";
import translations from "../../locales/translations";
import styles from "./Projects.module.scss";
import ProjectsCarousel from "./ProjectsCarousel/ProjectsCarousel";

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.title}>{t.projects.title}</h2>
      <p className={styles.subtitle}>{t.projects.subtitle}</p>
      <div className={styles.divider}></div>

      <ProjectsCarousel />
    </section>
  );
};

export default Projects;
