import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = () => {
  return (
      <section className={styles.dialogsWrapper}>
        <ul className={styles.dialogs}>
          <Dialog name="Vasya" id="1" />
          <Dialog name="Fedya" id="2" />
          <Dialog name="Masha" id="3" />
        </ul>
        <ul className={styles.messages}>
          <Message text="My message" id="1" />
          <Message text="My new message" id="2" />
          <Message text="My current message" id="3" />
        </ul>
      </section>
  );
};

export default Dialogs;
