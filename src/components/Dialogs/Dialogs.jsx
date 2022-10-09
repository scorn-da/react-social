import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = ({ state }) => {
  const {dialogs, messages} = state;
  return (
      <section className={styles.dialogsWrapper}>
        <ul className={styles.dialogs}>
          { dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} />) }
        </ul>
        <ul className={styles.messages}>
          { messages.map(message => <Message text={message.text} id={message.id} />) }
        </ul>
      </section>
  );
};

export default Dialogs;
