import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <img
          src="../../assets/logo_1x1.svg"
          alt=""
          className={styles.logoFooter}
        />        
        <p><span>&copy; 2025 Anderson Amicuchi - Todos os direitos reservados</span></p>
    </footer>
  );
};

export default Footer;
