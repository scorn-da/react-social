import React from 'react';
import classNames from "classnames";
import styles from "src/components/Dialogs/MessagesCreator/MessagesCreator.module.css";
import { reduxForm } from "redux-form";
import { createFormElement} from "src/components/common/FormControls/FormControls";
import { maxLengthCreator, required } from "src/utils/validators";

const maxLength500 = maxLengthCreator(500);

const MessagesCreator = (props) => {
  const { className, handleSubmit } = props;

  return (
    <form className={classNames(styles.creator, className)} onSubmit={handleSubmit}>
      {createFormElement('textarea', 'Enter a message text', [required, maxLength500], {name: 'message'})}
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
