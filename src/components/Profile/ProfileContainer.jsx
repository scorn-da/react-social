import { connect } from "react-redux";
import Profile from "src/components/Profile/Profile/Profile";
import { addPost, getUserInfo, updateNewPost } from "src/redux/profileReducer";
import React from "react";
import { withRouter } from "src/utils/functions";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    this.props.getUserInfo(userId);
  }

  render = () => <Profile {...this.props} />
}

const mapStateToProps = (state) => ({
  profilePage: state.profilePage,
});

const profileContainerWithUrlData = withRouter(ProfileContainer);

export default connect(mapStateToProps, { addPost, updateNewPost, getUserInfo })(profileContainerWithUrlData);
