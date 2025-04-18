import styles from "./FlippableProjectCard.module.scss";

const FlippableProjectCard = ({
  title,
  description,
  image,
  link,
  linkText,
  imageAlt,
}) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardInner}>
        
        {/* Frente */}
        <div className={`${styles.cardFace} ${styles.front}`}>
          <img src={image} alt={imageAlt} className={styles.cardImage} />
          <div className={styles.content}>
            <h3>{title}</h3>
          </div>
        </div>

        {/* Verso */}
        <div className={`${styles.cardFace} ${styles.back}`}>
          <div className={styles.content}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default FlippableProjectCard;
