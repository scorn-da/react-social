import React from 'react';
import classNames from "classnames";
import styles from "src/components/Dialogs/MessagesCreator/MessagesCreator.module.css";

const MessagesCreator = ({ className, newMessageText, updateNewMessage, sendMessage }) => {
  const onSendMessageClick = (evt) => {
    evt.preventDefault();
    sendMessage();
  }

  const onMessageChange = (evt) => {
    const text = evt.target.value;
    updateNewMessage(text);
  }

  return (
    <form className={classNames(styles.creator, className)}>
      <textarea value={newMessageText} onChange={onMessageChange} placeholder="Enter a message text" />
      <div className={styles.buttonsWrapper}>
        <button onClick={onSendMessageClick}>Send</button>
      </div>
    </form>
  );
};

export default MessagesCreator;
