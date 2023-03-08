import React from "react";
import { reduxForm } from "redux-form";
import { createFormElement} from "src/components/common/FormControls/FormControls";
import { required } from "src/utils/validators";
import styles from 'src/components/Login/LoginForm/LoginForm.module.css';

const LoginForm = ({ handleSubmit, error }) => {

  return (
    <form onSubmit={handleSubmit}>
      {createFormElement('input', 'Email', [required], {type: 'email', name: 'email'})}
      {createFormElement('input', 'Password', [required], {type: 'password', name: 'password'})}
      {error &&
        <div className={styles.formError}>
          {error}
        </div>
      }
      <div>
        {createFormElement('input', '', [required], {type: 'checkbox', name: 'rememberMe'})}
        <span>remember me</span>
      </div>
      <div>
        <button>
          Login
        </button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login", })(LoginForm);

export default LoginReduxForm;
