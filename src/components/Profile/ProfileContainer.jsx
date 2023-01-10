import { connect } from "react-redux";
import Profile from "src/components/Profile/Profile/Profile";
import { addPost, setProfileInfo, updateNewPost } from "src/redux/profileReducer";
import React from "react";
import axios from "axios";
import { withRouter } from "src/utils/functions";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    axios(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
      this.props.setProfileInfo(response.data);
    });
  }

  render = () => <Profile {...this.props} />
}

const mapStateToProps = (state) => ({
  profilePage: state.profilePage,
});

const profileContainerWithUrlData = withRouter(ProfileContainer);

export default connect(mapStateToProps, { addPost, updateNewPost, setProfileInfo })(profileContainerWithUrlData);
