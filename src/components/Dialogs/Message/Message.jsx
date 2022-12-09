import React from 'react';
import styles from 'src/components/Dialogs/Message/Message.module.css';

const Message = ({ text, id}) => {
  return (
    <li className={styles.message} key={id}>
      {text}
    </li>
  );
};

export default Message;
