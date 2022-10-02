import React from 'react';
import styles from './Dialog.module.css';
import { NavLink } from "react-router-dom";

const Dialog = ({ name, id}) => {
  const path = `/dialogs/${id}`;

  return (
    <li className={styles.dialog} key={id}>
      <NavLink to={path}>{name}</NavLink>
    </li>
  );
};

export default Dialog;
