import React from 'react';
import styles from './Card.module.css';

const Card = ({ icon, title, description, link, style }) => {
  return (
    // apply incoming inline styles to the anchor element
    <a href={link} className={styles.card} style={style} target="_blank" rel="noopener noreferrer">
      <div className={styles.cardIcon}>{icon}</div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </a>
  );
};

export default Card;