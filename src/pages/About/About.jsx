import useLanguage from "../../hooks/useLanguage";
import perfil from "../../assets/perfil-removebg.png";
import styles from "./About.module.scss";

const About = () => {
  const { texts, language } = useLanguage();

  // Determina o caminho do currículo com base no idioma
  const getCvPath = () => {
    if (language === "pt") {
      return "../../assets/AndersonAmicuchi_PT-br.pdf"; // Caminho para o currículo em português
    } else if (language === "en") {
      return "../../assets/AndersonAmicuchi_EN.pdf"; // Caminho para o currículo em inglês
    } else {
      return "../../assets/AndersonAmicuchi_EN.pdf"; // Caminho padrão caso o idioma não seja reconhecido
    }
  };

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{texts.about.title}</h2>
          <p className={styles.subtitle}>{texts.about.subtitle}</p>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.content}>
          {/* Imagem de Perfil */}
          <div className={styles.imageContainer}>
            <img
              src={perfil}
              alt={texts.about.profileAlt || "Foto de Perfil"}
              className={styles.image}
            />
          </div>

          {/* Descrição e Estatísticas */}
          <div className={styles.infoContainer}>
            {Array.isArray(texts.about.description) ? (
              texts.about.description.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))
            ) : (
              <p className={styles.paragraph}>{texts.about.description}</p>
            )}

            {/* Botão Download CV */}
            <div className={styles.buttonContainer}>
              <a href={getCvPath()} download className={styles.button}>
                {texts.about.downloadCv}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
