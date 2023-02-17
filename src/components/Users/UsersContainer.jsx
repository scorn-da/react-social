import Users from "src/components/Users/Users/Users";
import {
  follow,
  unfollow,
  requestUsers,
  setCurrentPage,
  toggleFollowingProgress,
} from "src/redux/usersReducer";
import { connect } from "react-redux";
import React from "react";
import Loader from "src/components/common/Loader/Loader";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsers, getUsers } from "src/redux/usersSelectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged(pageNumber) {
    this.props.setCurrentPage(pageNumber);

    this.props.requestUsers(pageNumber, this.props.pageSize);
  }

  render = () => {
    return (
      <>
        {this.props.isLoading ? <Loader/> : null}
        <Users {...this.props} onPageChanged={this.onPageChanged.bind(this)}/>
      </>);
  }
}

const mapStateToProps = (state) => {
  return {
    usersPage: getUsers(state),
    pageSize: getPageSize(state),
    totalUsers: getTotalUsers(state),
    currentPage: getCurrentPage(state),
    followingInProgress: getFollowingInProgress(state),
  }
}

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers,
  })
)(UsersContainer);
