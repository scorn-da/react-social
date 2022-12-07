import React from 'react';
import styles from './PostsCreator.module.css';
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/state.js";

const PostsCreator = ({newPostText, dispatch}) => {
  const newPostField = React.createRef();

  const onPostChange = () => {
    const text = newPostField.current.value;
    const action = updateNewPostActionCreator(text);
    dispatch(action);
  }

  const onAddButtonClick = (evt) => {
    evt.preventDefault();
    dispatch(addPostActionCreator());
    dispatch(updateNewPostActionCreator(''));
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
