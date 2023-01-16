import { connect } from "react-redux";
import Profile from "src/components/Profile/Profile/Profile";
import { addPost, getUserInfo, updateNewPost } from "src/redux/profileReducer";
import React from "react";
import { withRouter } from "src/utils/functions";
import { Navigate } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    this.props.getUserInfo(userId);
  }

  render () {
    if (!this.props.isAuthed) return <Navigate to={'/login'} />;

    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  profilePage: state.profilePage,
  isAuthed: state.auth.isAuthed,
});

const profileContainerWithUrlData = withRouter(ProfileContainer);

export default connect(mapStateToProps, { addPost, updateNewPost, getUserInfo })(profileContainerWithUrlData);
