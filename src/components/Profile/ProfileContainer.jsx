import { connect } from "react-redux";
import Profile from "src/components/Profile/Profile/Profile";
import { addPost, getUserInfo, updateNewPost } from "src/redux/profileReducer";
import React from "react";
import { withRouter } from "src/utils/functions";
import { withAuthRedirect } from "src/hoc/withAuthRedirect";
import { compose } from "redux";

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

const mapStateToProps = (state) => ({
  profilePage: state.profilePage,
});

export default compose(
  connect(mapStateToProps, { addPost, updateNewPost, getUserInfo }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
