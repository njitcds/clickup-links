import React, { useId, useState } from 'react';
import styles from './FAQ.module.css';

const FAQItem = ({ question, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  // useId may include ':' in React 18/19; strip for attribute safety
  const rawId = useId().replace(/:/g, '');
  const headingId = `faq-heading-${rawId}`;
  const panelId = `faq-panel-${rawId}`;

  return (
    <div className={styles.item} data-open={open ? 'true' : 'false'}>
      <div className={styles.question} id={headingId}>
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
       >
          <span className={styles.caret} aria-hidden>
            {open ? '▾' : '▸'}
          </span>
          {question}
        </button>
      </div>
      {open && (
        <div id={panelId} role="region" aria-labelledby={headingId} className={styles.body}>
          {children}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
