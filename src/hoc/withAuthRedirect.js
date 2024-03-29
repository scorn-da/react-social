import { Navigate } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuthed) return <Navigate to={'/login'} />;

      return <Component {...this.props} />
    }
  }

  const mapStateToPropsForRedirect = (state) => ({
    isAuthed: state.auth.isAuthed,
  });

  const ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedRedirectComponent;
}
