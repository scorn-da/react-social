import React from 'react';
import styles from './Content.module.css';

const Content = ({ children }) => {
  return (
    <section className={styles.content}>
      {children}
    </section>
  );
};

export default Content;