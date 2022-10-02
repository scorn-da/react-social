import React from 'react';
import styles from './PostsCreator.module.css';

const PostsCreator = () => {
  return (
      <form className={styles.creator}>
        <textarea rows="4" />
        <div className={styles.buttonsWrapper}>
          <button>Add a post</button>
          <button>Clear</button>
        </div>
      </form>
  );
};

export default PostsCreator;
