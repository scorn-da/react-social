import React from 'react';
import styles from 'src/components/Header/Header.module.css';
import { NavLink } from "react-router-dom";
import logo from 'src/assets/images/logo.jpeg';
import userIcon from 'src/assets/images/user_icon.svg';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <a>
        <img src={logo} alt="Company logo"/>
      </a>

      <div className={styles.loginWrapper}>
        {
          props.isAuthed
            ? <div>
                <img src={props.profilePage?.profile?.photos?.small || userIcon} alt=""/> {props.login}
                <button onClick={props.logout}>Logout</button>
              </div>
            : <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  );
};

export default Header;
