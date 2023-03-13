import React from 'react';
import Header from './Header';
import { connect } from "react-redux";
import { logout } from 'src/redux/auth';

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuthed: state.auth.isAuthed,
  login: state.auth.login,
  profilePage: state.profilePage,
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
