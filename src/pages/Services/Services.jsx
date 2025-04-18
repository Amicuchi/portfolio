import useLanguage from "../../hooks/useLanguage";
import ServiceCard from "./ServiceCard/ServiceCard";
import WebDevIcon from "../../assets/img_services/desenvolvimentoWeb.webp";
import FrontendIcon from "../../assets/img_services/frontend.webp";
import BackendIcon from "../../assets/img_services/backend.webp";
import styles from "./Services.module.scss";

const Services = () => {
  const { texts } = useLanguage();

  const serviceKeys = ["webDev", "frontendDev", "backendDev"];

  const serviceIcons = {
    webDev: WebDevIcon,
    frontendDev: FrontendIcon,
    backendDev: BackendIcon,
  };

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={`${styles.serviceTitle}`}>
          <h2 className={styles.title}>{texts.services.title}</h2>
          <p className={styles.subtitle}>{texts.services.subtitle}</p>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.grid}>
          {serviceKeys.map((key) => (
            <ServiceCard
              key={key}
              title={texts.services[key].title}
              description={texts.services[key].description}
              image={serviceIcons[key]}
              imageAlt={texts.services[key].title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
