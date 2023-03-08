import React from 'react';
import LoginReduxForm from "src/components/Login/LoginForm/LoginForm";
import { login, logout } from "src/redux/auth";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuthed) {
    return <Navigate to={'/profile/'} />;
  }

  return (
    <div>
      <h1>LOGIN!</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthed: state.auth.isAuthed,
});

export default connect(mapStateToProps, { login, logout })(Login);
