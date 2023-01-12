import React from 'react';
import Header from './Header';
import { connect } from "react-redux";
import { setAuthedUserData } from 'src/redux/auth';
import { usersAPI } from "src/api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.getAuth().then(data => {
      if(data.resultCode === 0) {
        const { id, email, login } = data.data;
        this.props.setAuthedUserData(id, email, login);
      }
    })
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuthed: state.auth.isAuthed,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthedUserData })(HeaderContainer);
