import React from 'react';
import styles from 'src/components/Profile/PostsCreator/PostsCreator.module.css';
import { reduxForm } from "redux-form";
import { required } from "src/utils/validators";
import { createFormElement} from "src/components/common/FormControls/FormControls";

const PostsCreator = ({ handleSubmit }) => {
  return (
    <form className={styles.creator} onSubmit={handleSubmit}>
      {createFormElement('textarea', 'Enter a post text', [required], {name: 'postText'})}
      <div className={styles.buttonsWrapper}>
        <button>Add a post</button>
        <button>Clear</button>
      </div>
    </form>
  );
};

const PostsCreatorForm = reduxForm({
  form: 'postForm',
})(PostsCreator)

export default PostsCreatorForm;
