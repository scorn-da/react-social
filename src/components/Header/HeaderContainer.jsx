import React from 'react';
import Header from './Header';
import { connect } from "react-redux";
import { getAuthedData } from 'src/redux/auth';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthedData();
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuthed: state.auth.isAuthed,
  login: state.auth.login,
});

export default connect(mapStateToProps, { getAuthedData })(HeaderContainer);
