import React from 'react';
import classNames from "classnames";
import styles from "src/components/Dialogs/MessagesCreator/MessagesCreator.module.css";
import { Field, reduxForm } from "redux-form";
import { Element } from "src/components/common/FormControls/FormControls";
import { maxLengthCreator, required } from "src/utils/validators";

const maxLength500 = maxLengthCreator(500);

const MessagesCreator = (props) => {
  const { className, handleSubmit } = props;

  return (
    <form className={classNames(styles.creator, className)} onSubmit={handleSubmit}>
      <Field component={Element} element="textarea" name="message" placeholder="Enter a message text" validate={[required, maxLength500]} />
      <div className={styles.buttonsWrapper}>
        <button>Send</button>
      </div>
    </form>
  );
};

const MessageCreatorForm = reduxForm({
  form: 'dialogsMessageForm',
})(MessagesCreator)

export default MessageCreatorForm;
