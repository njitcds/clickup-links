
import React from 'react';
import styles from './Header.module.css';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => { window.location.href = '/clickup-links'; }} style={{cursor: "pointer"}}>
      <img src="/clickup-links/logo.png" alt="CDS Logo" className={styles.cdsLogo} />
        <span>NJIT CDS Master Calendar</span>
      </div>
      <nav className={styles.navLinks}>
        <a href="#/faqs">🙋🏻‍♂️ FAQs</a>
        <ThemeToggle />
        {/* <button className={styles.ctaButton}>Get Started</button> */}
      </nav>
    </header>
  );
};

export default Header;

