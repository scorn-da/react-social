import React from 'react';
import styles from './Post.module.css';

const Post = ({id, text}) => {
  return (
      <li key={id}>{text}</li>
  );
};

export default Post;
