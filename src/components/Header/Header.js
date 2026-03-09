
import React from 'react';
import styles from './Header.module.css';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'; // Import the new component
import ThemeToggle from './ThemeToggle';

// The Header now needs to receive props to handle the theme
const Header = ({ theme, toggleTheme }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* SVG Logo */}
        <svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M16 0A16 16 0 1 0 32 16 16 16 0 0 0 16 0zm7.69 22.5a1.69 1.69 0 0 1-2.39 0l-5.3-5.3a1.71 1.71 0 0 1 0-2.39l5.3-5.3a1.69 1.69 0 0 1 2.39 2.39L19.4 16l4.29 4.11a1.69 1.69 0 0 1 0 2.39zm-9.38 0a1.69 1.69 0 0 1-2.39 0L6.62 17.2a1.71 1.71 0 0 1 0-2.39l5.3-5.3A1.69 1.69 0 0 1 14.31 12L10 16.29l4.31 4.11a1.69 1.69 0 0 1 0 2.39z" fill="url(#a)"></path><defs><linearGradient id="a" x1="0" x2="32" y1="0" y2="32" gradientUnits="userSpaceOnUse"><stop stop-color="#7f56d9" offset="0"></stop><stop stop-color="#ff56bb" offset="1"></stop></linearGradient></defs></svg>
        <span>NJIT CDS Click Up Links</span>
      <div className={styles.logo} onClick={() => { window.location.href = '/clickup-links'; }} style={{cursor: "pointer"}}>
      <img src="/clickup-links/logo.png" alt="CDS Logo" className={styles.cdsLogo} />
        <span>NJIT CDS Master Calendar</span>
      </div>
      <nav className={styles.navLinks}>
        <a href="#master-calendar">Master Calendar</a>
        {/* Add the ThemeSwitcher component here */}
        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
        <a href="#/faqs">🙋🏻‍♂️ FAQs</a>
        <ThemeToggle />
        {/* <button className={styles.ctaButton}>Get Started</button> */}
      </nav>
    </header>
  );
};

export default Header;

