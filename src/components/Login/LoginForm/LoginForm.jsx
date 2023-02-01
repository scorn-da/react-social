import React from "react";
import { Field, reduxForm } from "redux-form";
import { Element } from "src/components/common/FormControls/FormControls";
import { required } from "src/utils/validators";

const LoginForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit }>
      <p>
        <Field component={Element} elementType="input" type="text" placeholder="Login" name="login" validate={[required]} />
      </p>
      <p>
        <Field component={Element} elementType="input" type="password" placeholder="Password" name="password" validate={[required]} />
      </p>
      <p>
        <Field type="checkbox" component="input" name="rememberMe" />
        <span>remember me</span>
      </p>
      <p>
        <button>
          Login
        </button>
      </p>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login", })(LoginForm);

export default LoginReduxForm;
