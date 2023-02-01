import styles from "src/components/Dialogs/Dialogs.module.css";
import Dialog from "src/components/Dialogs/Dialog/Dialog";
import Message from "src/components/Dialogs/Message/Message";
import React from "react";
import MessageCreatorForm from "src/components/Dialogs/MessagesCreator/MessagesCreator";

const Dialogs = ({ dialogsPage, sendMessage }) => {
  const { dialogs, messages } = dialogsPage;

  const addNewMessage = (values) => {
    sendMessage(values.message);
  }

  return (
    <section className={styles.dialogsWrapper}>
      <ul className={styles.dialogs}>
        {dialogs.map(dialog => <Dialog name={dialog.name} key={dialog.id}/>)}
      </ul>
      <ul className={styles.messages}>
        {messages.map(message => <Message text={message.text} key={message.id}/>)}
      </ul>
      <MessageCreatorForm className={styles.messagesCreator} onSubmit={addNewMessage} />
    </section>
  )
}

export default Dialogs;
