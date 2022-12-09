import React from 'react';
import styles from 'src/components/Profile/Posts/Post/Post.module.css';

const Post = ({ text }) => {
  return (
      <li>{text}</li>
  );
};

export default Post;
