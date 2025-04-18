import { useState, useEffect, useCallback } from "react";
import useLanguage from "../../hooks/useLanguage";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { smoothScrollTo } from "../../utils/smoothScrollTo";
import styles from "./Header.module.scss";
import Logo from "./Logo/Logo";

/** Componente de botão para o menu mobile
 *  Esse componente é usado para alternar entre o menu aberto e fechado no mobile
 *  Foi criado para evitar a duplicação de código entre o botão de menu aberto e fechado */
const MobileMenuButton = ({ isOpen, toggleMenu, isScrolled }) => (
  <button
    className={`${styles.menuButton} ${isOpen ? styles.open : ""} ${
      isScrolled ? styles.scrolled : ""
    }`}
    onClick={toggleMenu}
    aria-label="Menu"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6"
    >
      {isOpen ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      )}
    </svg>
  </button>
);

/** Componente de link de navegação */
const NavLink = ({ targetId, children, onClick }) => (
  <a
    href={`#${targetId === "#" ? "" : targetId}`} // href para semântica e fallback
    className={styles.navLink}
    onClick={(e) => onClick(e, targetId)}
  >
    {children}
  </a>
);

const Header = () => {
  const { texts } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detectar scroll para mudar o estilo da navbar
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 500);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Handler de clique para os links de navegação
  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    // Chama a função de rolagem suave do utilitário
    const scrollInitiated = smoothScrollTo(targetId);

    // Fecha o menu mobile SOMENTE se a rolagem foi iniciada (ou seja, o link é válido)
    // E se o menu estiver aberto
    if (scrollInitiated && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            className={`${styles.logo} ${isScrolled ? styles.scrolled : ""}`}
          >
            <Logo isScrolled={isScrolled} />
            Anderson Amicuchi
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <NavLink targetId="#" onClick={handleNavClick}>
            {texts.nav.home}
          </NavLink>
          <NavLink targetId="about" onClick={handleNavClick}>
            {texts.nav.about}
          </NavLink>
          <NavLink targetId="services" onClick={handleNavClick}>
            {texts.nav.services}
          </NavLink>
          <NavLink targetId="projects" onClick={handleNavClick}>
            {texts.nav.projects}
          </NavLink>
          <NavLink targetId="skills" onClick={handleNavClick}>
            {texts.nav.skills}
          </NavLink>
          <NavLink targetId="contact" onClick={handleNavClick}>
            {texts.nav.contact}
          </NavLink>
        </nav>
        <div className={styles.headerActions}>
          <div className={styles.mobileLanguageSwitcher}>
            <LanguageSwitcher isScrolled={isScrolled} />
          </div>

          {/* Mobile Menu Button */}
          <MobileMenuButton
            isOpen={isMobileMenuOpen}
            isScrolled={isScrolled}
            toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menu"
            aria-expanded={isMobileMenuOpen}
          />
        </div>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay com Blur */}
          <div
            className={styles.menuOverlay}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className={styles.overlayLanguageSwitcher}>
              <LanguageSwitcher isScrolled={isScrolled} />
            </div>
            {/* Menu Mobile */}
            <nav className={styles.mobileNav}>
              <NavLink targetId="#" onClick={handleNavClick}>
                {texts.nav.home}
              </NavLink>
              <NavLink targetId="about" onClick={handleNavClick}>
                {texts.nav.about}
              </NavLink>
              <NavLink targetId="services" onClick={handleNavClick}>
                {texts.nav.services}
              </NavLink>
              <NavLink targetId="projects" onClick={handleNavClick}>
                {texts.nav.projects}
              </NavLink>
              <NavLink targetId="skills" onClick={handleNavClick}>
                {texts.nav.skills}
              </NavLink>
              <NavLink targetId="contact" onClick={handleNavClick}>
                {texts.nav.contact}
              </NavLink>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
