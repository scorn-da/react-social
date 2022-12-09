import React from 'react';
import styles from './MessagesCreator.module.css';
import { sendMessageCreator, updateNewMessageCreator, } from "../../../redux/dialogsReducer";
import classNames from "classnames";

const MessagesCreator = ({ className,  newMessageText, dispatch }) => {
  const onSendMessageClick = (evt) => {
    evt.preventDefault();
    dispatch(sendMessageCreator() )
  }

  const onMessageChange = (evt) => {
    const text = evt.target.value;
    dispatch(updateNewMessageCreator(text));
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
