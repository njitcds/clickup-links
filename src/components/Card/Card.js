import React from 'react';
import styles from './Card.module.css';

const Card = ({ icon, emoji, image_url, title, description, link, style }) => {
  const renderIcon = () => {
    switch (icon) {
      case 'emoji':
        return <span>{emoji}</span>;
      case 'image':
        return <img src={image_url} alt={"👤"} />;
      default:
        return null;
    }
  };

  return (
    // apply incoming inline styles to the anchor element
    <a href={link} className={styles.card} style={style} target="_blank" rel="noopener noreferrer">
      <div className={styles.cardIcon}>{renderIcon()}</div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </a>
  );
};

export default Card;