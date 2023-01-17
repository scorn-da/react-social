import Users from "src/components/Users/Users/Users";
import {
  follow,
  unfollow,
  getUsers,
  setCurrentPage,
  toggleFollowingProgress,
} from "src/redux/usersReducer";
import { connect } from "react-redux";
import React from "react";
import Loader from "src/components/Loader/Loader";
import { withAuthRedirect } from "src/hoc/withAuthRedirect";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged(pageNumber) {
    this.props.setCurrentPage(pageNumber);

    this.props.getUsers(pageNumber, this.props.pageSize);
  }

  render = () => {
    return (
      <>
        {this.props.isLoading ? <Loader/> : null}
        <Users {...this.props} onPageChanged={this.onPageChanged.bind(this)}/>
      </>);
  }
}

const AuthRedirectComponent = withAuthRedirect(UsersContainer);

const mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage,
    pageSize: state.usersPage.pageSize,
    totalUsers: state.usersPage.totalUsers,
    currentPage: state.usersPage.currentPage,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
})(AuthRedirectComponent);
