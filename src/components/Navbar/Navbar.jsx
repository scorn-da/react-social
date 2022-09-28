import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink to="/profile" className={({ isActive }) => isActive ? styles.active : ""}>Profile</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/dialogs" className={({ isActive }) => isActive ? styles.active : ""}>Dialogs</NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;