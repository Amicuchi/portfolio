import styles from "./SkillsCard.module.scss";

const SkillCard = ({ 
  title, 
  image, 
  imageAlt 
}) => {
  return (
    <div className={styles.card}>
      {image && (
        <div className={styles.cardImageContainer}>
          <img 
          src={image} 
          alt={imageAlt} 
          className={styles.cardImage} />
        </div>
      )}
      <div className={styles.cardContent}>
        {title && <h3 className={styles.cardTitle}>{title}</h3>}
      </div>
    </div>
  );
};

export default SkillCard;
