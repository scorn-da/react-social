import React from 'react';
import styles from 'src/components/Profile/PostsCreator/PostsCreator.module.css';

const PostsCreator = ({ newPostText, updateNewPost, addPost }) => {
  const newPostField = React.createRef();

  const onPostChange = () => {
    const text = newPostField.current.value;
    updateNewPost(text);
  }

  const onAddButtonClick = (evt) => {
    evt.preventDefault();
    addPost();
  };

  return (
    <form className={styles.creator}>
      <textarea rows="4" ref={newPostField} onChange={onPostChange} value={newPostText}/>
      <div className={styles.buttonsWrapper}>
        <button onClick={onAddButtonClick} type="button">Add a post</button>
        <button type="button">Clear</button>
      </div>
    </form>
  );
};

export default PostsCreator;
