import React from 'react';
import styles from 'src/components/Profile/PostsCreator/PostsCreator.module.css';
import { Field, reduxForm } from "redux-form";
import { required } from "src/utils/validators";
import { Element } from "src/components/common/FormControls/FormControls";

const PostsCreator = ({ handleSubmit }) => {
  return (
    <form className={styles.creator} onSubmit={handleSubmit}>
      <Field component={Element} elementType="textarea" name="postText" placeholder="Enter a post text" validate={[required]} />
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
