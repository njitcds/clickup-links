import React from 'react';
import Card from '../Card/Card';
import styles from './Section.module.css';

const Section = ({ title, cards }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.cardGrid}>
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Section;