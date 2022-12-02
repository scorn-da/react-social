import React from 'react';
import styles from './PostsCreator.module.css';

const PostsCreator = ({ newPostText, dispatch }) => {
  const newPostField = React.createRef();

  const onPostChange = () => {
    const text = newPostField.current.value;
    dispatch({type: 'UPDATE-NEW-POST-TEXT', newPostText: text});
  }

  const onAddButtonClick = (evt) => {
    evt.preventDefault();
    dispatch({type: 'ADD-POST'});
    dispatch({type: 'UPDATE-NEW-POST-TEXT', newPostText: ''});
  };

  return (
      <form className={styles.creator}>
        <textarea rows="4" ref={newPostField} onChange={onPostChange} value={newPostText} />
        <div className={styles.buttonsWrapper}>
          <button onClick={onAddButtonClick} type="button">Add a post</button>
          <button type="button">Clear</button>
        </div>
      </form>
  );
};

export default PostsCreator;
