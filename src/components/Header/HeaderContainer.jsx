import React from 'react';
import Header from './Header';
import axios from "axios";
import { connect } from "react-redux";
import { setAuthedUserData } from 'src/redux/auth';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true,
    }).then(response => {
      if(response.data.resultCode === 0) {
        const { id, email, login } = response.data.data;
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
