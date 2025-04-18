import useLanguage from "../../hooks/useLanguage";
import { smoothScrollTo } from "../../utils/smoothScrollTo";
import styles from "./Hero.module.scss";

const Hero = () => {
  const { texts } = useLanguage(); // Obtém as traduções através do hook

  // Handler de clique para os botões CTA do Hero
  const handleCTAClick = (e, targetId) => {
    e.preventDefault();
    smoothScrollTo(targetId); // Chama diretamente a função utilitária
  };

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.container}>
        <p className={styles.greeting}>{texts.hero.greeting}</p>
        <h1 className={styles.name}>Anderson Amicuchi</h1>
        <h2 className={styles.role}>{texts.hero.role}</h2>
        <p className={styles.description}>{texts.hero.description}</p>
        <a
          href="#contact"
          onClick={(e) => handleCTAClick(e, "contact")}
          className={styles.primaryButton}
        >
          {texts.hero.ctaPrimary}
        </a>
      </div>
    </section>
  );
};

export default Hero;
