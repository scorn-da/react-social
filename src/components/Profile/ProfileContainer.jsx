import { connect } from "react-redux";
import Profile from "src/components/Profile/Profile/Profile";
import { addPost, setProfileInfo, updateNewPost } from "src/redux/profileReducer";
import React from "react";
import { withRouter } from "src/utils/functions";
import { usersAPI } from "src/api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    usersAPI.getUserProfile(userId).then(data => {
      this.props.setProfileInfo(data);
    });
  }

  render = () => <Profile {...this.props} />
}

const mapStateToProps = (state) => ({
  profilePage: state.profilePage,
});

const profileContainerWithUrlData = withRouter(ProfileContainer);

export default connect(mapStateToProps, { addPost, updateNewPost, setProfileInfo })(profileContainerWithUrlData);
