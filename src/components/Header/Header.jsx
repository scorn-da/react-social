import React from 'react';
import styles from 'src/components/Header/Header.module.css';
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <a>
        <img src="https://graphicsfamily.com/wp-content/uploads/edd/2022/03/Logo-Mockup-on-Gray-Wall-1180x787.jpg"
          alt="Company logo"/>
      </a>

      <div className={styles.loginWrapper}>
        {
          props.isAuthed ? <div>{props.login}</div>: <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  );
};

export default Header;
