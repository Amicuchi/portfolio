import styles from './ServiceCard.module.scss';

const ServiceCard = ({ title, description, image, imageAlt }) => {
  return (
    <div className={styles.card}>
      {image && (
        <div className={styles.cardImageContainer}>
          <img
            src={image}
            alt={imageAlt}
            className={styles.cardImage}
          />
        </div>
      )}
      <div className={styles.cardContent}>
        {title && <h3 className={styles.cardTitle}>{title}</h3>}
        {description && <p className={styles.cardDescription}>{description}</p>}
      </div>
    </div>
  );
};

export default ServiceCard;