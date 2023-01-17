import { connect } from "react-redux";
import Profile from "src/components/Profile/Profile/Profile";
import { addPost, getUserInfo, updateNewPost } from "src/redux/profileReducer";
import React from "react";
import { withRouter } from "src/utils/functions";
import { withAuthRedirect } from "src/hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserInfo(userId);
  }

  render () {
    return <Profile {...this.props} />;
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
  profilePage: state.profilePage,
});

const profileContainerWithUrlData = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { addPost, updateNewPost, getUserInfo })(profileContainerWithUrlData);
