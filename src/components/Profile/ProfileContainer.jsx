import { connect } from "react-redux";
import Profile from "src/components/Profile/Profile/Profile";
import { addPost, getUserInfo, getUserStatus, updateStatus } from "src/redux/profileReducer";
import React from "react";
import { withRouter } from "src/utils/functions";
import { withAuthRedirect } from "src/hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.authedUserId;
    }
    this.props.getUserInfo(userId);
    this.props.getUserStatus(userId);
  }

  render () {
    return <Profile {...this.props} updateStatus={this.props.updateStatus} />;
  }
}

const mapStateToProps = (state) => ({
  profilePage: state.profilePage,
  status: state.profilePage.status,
  authedUserId: state.auth.userId,
  isAuthed: state.auth.isAuthed,
});

export default compose(
  connect(mapStateToProps, { addPost, getUserInfo, getUserStatus, updateStatus }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
