import React from "react";
import { Field, reduxForm } from "redux-form";
import { Element } from "src/components/common/FormControls/FormControls";
import { required } from "src/utils/validators";

const LoginForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <Field component={Element} element="input" type="text" placeholder="Email" name="email" validate={[required]} />
      </div>
      <div>
        <Field component={Element} element="input" type="password" placeholder="Password" name="password" validate={[required]} />
      </div>
      <div>
        <Field type="checkbox" component="input" name="rememberMe" />
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
