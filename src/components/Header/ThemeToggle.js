import React, { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    // Default to dark theme
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'light' ? false : true;
    }
    return true;
  });

  useEffect(() => {
    if (dark) {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <label htmlFor="theme" className={styles.theme}>
      <span className={styles.theme__toggleWrap}>
        <input
          id="theme"
          className={styles.theme__toggle}
          type="checkbox"
          role="switch"
          name="theme"
          value="dark"
          checked={dark}
          onChange={() => setDark((v) => !v)}
        />
        <span className={styles.theme__fill}></span>
        <span className={styles.theme__icon}>
          <span className={styles.theme__iconPart}></span>
          <span className={styles.theme__iconPart}></span>
          <span className={styles.theme__iconPart}></span>
          <span className={styles.theme__iconPart}></span>
          <span className={styles.theme__iconPart}></span>
          <span className={styles.theme__iconPart}></span>
          <span className={styles.theme__iconPart}></span>
          <span className={styles.theme__iconPart}></span>
          <span className={styles.theme__iconPart}></span>
        </span>
      </span>
    </label>
  );
};

export default ThemeToggle;
