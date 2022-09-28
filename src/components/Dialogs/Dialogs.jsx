import React from 'react';
import styles from './Dialogs.module.css';

const Dialogs = () => {
  return (
      <section className={styles.dialogsWrapper}>
        <ul className={styles.dialogs}>
          <li className={styles.dialog + ' ' + styles.active} key="d1">
            Name 1
          </li>
          <li className={styles.dialog} key="d2">
            Name 2
          </li>
        </ul>
        <ul className={styles.messages}>
          <li className={styles.message} key="m1">
            Message 1
          </li>
          <li className={styles.message} key="m2">
            Message 2
          </li>
        </ul>
      </section>
  );
};

export default Dialogs;
