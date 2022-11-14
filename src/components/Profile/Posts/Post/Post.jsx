import React from 'react';
import styles from './Post.module.css';

const Post = ({ text }) => {
  return (
      <li>{text}</li>
  );
};

export default Post;
