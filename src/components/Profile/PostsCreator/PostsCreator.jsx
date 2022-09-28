import React from 'react';
import styles from './PostsCreator.module.css';

const PostsCreator = () => {
  return (
      <form className={styles.creator}>
        <textarea></textarea>
        <button>Add a post</button>
        <button>Clear</button>
      </form>
  );
};

export default PostsCreator;