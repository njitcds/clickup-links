import React from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";

const Section = ({ title, cards }) => {
  const queryParams = new URLSearchParams(window.location.search);
  const selectedElementName = queryParams.get("selectedElementName");

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.cardGrid}>
        {cards.map((card, index) => (
          <Card
            key={index}
            // pass inline styles via the `style` prop so the Card component can apply them
            style={
              selectedElementName === title
                ? {
                    border: '5px solid #7f56d9',
                    boxShadow: '0 0 30px #7f56d9',
                  }
                : {}
            }
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
