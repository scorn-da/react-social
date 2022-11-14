import React from 'react';
import styles from './PostsCreator.module.css';

const PostsCreator = ({ addPost }) => {
  const newPostField = React.createRef();

  const handleClick = () => {
    const text = newPostField.current.value;
    addPost(text);
  };

  return (
      <form className={styles.creator}>
        <textarea rows="4" ref={newPostField} />
        <div className={styles.buttonsWrapper}>
          <button onClick={handleClick}>Add a post</button>
          <button>Clear</button>
        </div>
      </form>
  );
};

export default PostsCreator;
