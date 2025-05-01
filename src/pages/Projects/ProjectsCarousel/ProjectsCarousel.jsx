import { useEffect, useState } from "react";
import translations from "../../../locales/translations";
import FlippableProjectCard from "../FlippableProjectCard/FlippableProjectCard";
import useLanguage from "../../../hooks/useLanguage";
import styles from "./ProjectsCarousel.module.scss";

// importação das imagens dos projetos
import cestaVivaImage from "../../../assets/img_projects/CestaViva.png";
import focusFeedImage from "../../../assets/img_projects/FocusFeed.png";
import sgaImage from "../../../assets/img_projects/sga.png";
import numerosDestinoImage from "../../../assets/img_projects/DestinyNumbers.png";
import todoAppImage from "../../../assets/img_projects/ToDoList.png";
import musicPlayerImage from "../../../assets/img_projects/MusicPlayer.png";
import peterAmicuchiImage from "../../../assets/img_projects/PeterAmicuchi.png";

const ProjectsCarousel = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const imageMap = {
    "cesta-viva-image": cestaVivaImage,
    "focus-feed-image": focusFeedImage,
    "sga-image": sgaImage,
    "numeros-destino-image": numerosDestinoImage,
    "todo-app-image": todoAppImage,
    "music-player-image": musicPlayerImage,
    "peter-amicuchi-image": peterAmicuchiImage,
  };

  const projects = t.projects.projectsList;

  const total = projects.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Adiciona um listener para o evento de resize da janela
    window.addEventListener('resize', updateWindowWidth);

    // Remove o listener quando o componente é desmontado para evitar vazamentos de memória
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []); // O array de dependências vazio garante que este efeito seja executado apenas uma vez (na montagem e desmontagem)

  const getVisibleCards = () => {
    const isMobile = windowWidth < 768;
    const isTablet = windowWidth >= 768 && windowWidth < 1024;

    const visibleRange = isMobile ? 0 : isTablet ? 1 : 2;

    const visibleCards = [];

    for (let i = -visibleRange; i <= visibleRange; i++) {
      let index = (currentIndex + i + total) % total;
      visibleCards.push({
        project: projects[index],
        position: i,
        index,
      });
    }

    return visibleCards;
  };

  const getPositionClassName = (position) => {
    switch (position) {
      case 0:
        return styles.position0;
      case -1:
        return styles.positionMinus1;
      case -2:
        return styles.positionMinus2;
      case 1:
        return styles.position1;
      case 2:
        return styles.position2;
      default:
        return "";
    }
  };

  return (
    <section className={styles.carouselContainer}>
      <button
        className={`${styles.carouselButton} ${styles.prev}`}
        onClick={prevSlide}
        aria-label="Projeto anterior"
      >
        &#10094;
      </button>

      <div
        className={styles.carouselViewport}
        role="region"
        aria-label="Carrossel de projetos"
      >
        {getVisibleCards().map((item) => (
          <div
            key={`project-${item.index}`}
            className={`${styles.cardWrapper} ${getPositionClassName(
              item.position
            )}`}
          >
            <FlippableProjectCard
              title={item.project.title}
              description={item.project.description}
              image={imageMap[item.project.image] || item.project.image}
              imageAlt={item.project.title}
              link={item.project.url || item.project.github}
              linkText={
                item.project.url ? t.projects.viewProject : t.projects.viewCode
              }
            />
          </div>
        ))}
      </div>

      <button
        className={`${styles.carouselButton} ${styles.next}`}
        onClick={nextSlide}
        aria-label="Próximo projeto"
      >
        &#10095;
      </button>
    </section>
  );
};

export default ProjectsCarousel;
