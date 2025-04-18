import useLanguage from "../../hooks/useLanguage";
import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher = ({isScrolled}) => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className={styles.languageSwitcher}>
      <button
        onClick={() => changeLanguage("pt")}
        className={`${styles.languageButton} ${language === "pt" ? styles.active : ""} ${isScrolled ? styles.scrolled : ""}`}
        aria-label="Mudar para Português"
      >
        PT
      </button>

      <button
        onClick={() => changeLanguage("en")}
        className={`${styles.languageButton} ${language === "en" ? styles.active : ""} ${isScrolled ? styles.scrolled : ""}`}
        aria-label="Change to English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
