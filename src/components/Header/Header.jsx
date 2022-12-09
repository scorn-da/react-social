import React from 'react';
import styles from 'src/components/Header/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a>
        <img src="https://graphicsfamily.com/wp-content/uploads/edd/2022/03/Logo-Mockup-on-Gray-Wall-1180x787.jpg"
          alt="Company logo"/>
      </a>
    </header>
  );
};

export default Header;
