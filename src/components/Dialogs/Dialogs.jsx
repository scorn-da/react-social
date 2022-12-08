import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import MessagesCreator from "./MessagesCreator/MessagesCreator";

const Dialogs = ({ state, dispatch }) => {
  const { dialogs, messages, newMessageText } = state;

  return (
      <section className={styles.dialogsWrapper}>
        <ul className={styles.dialogs}>
          { dialogs.map(dialog => <Dialog name={dialog.name} key={dialog.id} />) }
        </ul>
        <ul className={styles.messages}>
          { messages.map(message => <Message text={message.text} key={message.id} />) }
        </ul>
        <MessagesCreator className={styles.messagesCreator} newMessageText={newMessageText} dispatch={dispatch} />
      </section>
  );
};

export default Dialogs;
