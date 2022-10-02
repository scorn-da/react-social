import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = () => {
  const dialogs = [
    { name: "Vasya", id: 1, },
    { name: "Fedya", id: 2, },
    { name: "Masha", id: 3, },
  ];

  const messages = [
    { text: "My message", id: 1, },
    { text: "My new message", id: 2, },
    { text: "My current message", id: 3, },
  ];

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
