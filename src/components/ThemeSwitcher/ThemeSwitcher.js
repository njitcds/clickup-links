import React from 'react';
import styles from './ThemeSwitcher.module.css';
import { Sun, Moon } from 'lucide-react'; // A popular icon library

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  // Before we can use icons, we need to install the library
  // In your terminal, run: npm install lucide-react
  return (
    <div className={styles.switcherContainer}>
      <Sun size={16} color={theme === 'light-mode' ? '#242d49' : '#a7a9be'}/>
      <label className={styles.switch}>
        <input 
          type="checkbox" 
          onChange={toggleTheme}
          checked={theme === 'dark-mode'}
        />
        <span className={styles.slider}></span>
      </label>
      <Moon size={16} color={theme === 'dark-mode' ? 'white' : '#a7a9be'}/>
    </div>
  );
};

export default ThemeSwitcher;