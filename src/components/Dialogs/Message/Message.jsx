import React from 'react';
import styles from './Message.module.css';

const Message = ({ text, id}) => {
  return (
    <li className={styles.message} key={id}>
      {text}
    </li>
  );
};

export default Message;
