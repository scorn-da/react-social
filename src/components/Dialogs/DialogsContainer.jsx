import React from 'react';
import styles from 'src/components/Dialogs/Dialogs.module.css';
import Dialog from "src/components/Dialogs/Dialog/Dialog";
import Message from "src/components/Dialogs/Message/Message";
import MessagesCreator from "src/components/Dialogs/MessagesCreator/MessagesCreator";

import { sendMessageCreator, updateNewMessageCreator } from "src/redux/dialogsReducer";

const DialogsContainer = ({ store }) => {
  const state = store.getState().dialogsPage;
  const { dialogs, messages, newMessageText } = state;

  const sendMessage = () => {
    store.dispatch(sendMessageCreator());
  }

  const updateNewMessageText = (text) => {
    store.dispatch(updateNewMessageCreator(text));
  }

  return (
    <section className={styles.dialogsWrapper}>
      <ul className={styles.dialogs}>
        {dialogs.map(dialog => <Dialog name={dialog.name} key={dialog.id}/>)}
      </ul>
      <ul className={styles.messages}>
        {messages.map(message => <Message text={message.text} key={message.id}/>)}
      </ul>
      <MessagesCreator className={styles.messagesCreator} newMessageText={newMessageText} sendMessage={sendMessage}
                       updateNewMessageText={updateNewMessageText}/>
    </section>
  );
};

export default DialogsContainer;
