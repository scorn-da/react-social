import React from 'react';
import styles from 'src/components/Login/Login.module.css';
import LoginReduxForm from "src/components/Login/LoginForm/LoginForm";

const Login = () => {
  const onSubmit = (formData) => {

  }

  return (
    <div>
      <h1>LOGIN!</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
