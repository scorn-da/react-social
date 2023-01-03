import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  followCreator,
  setCurrentPageCreator,
  setTotalUsersCreator,
  setUsersCreator,
  unfollowCreator
} from "src/redux/usersReducer";
import Users from "src/components/Users/Users/Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    axios(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsers(response.data.totalCount);
    });
  }

  onPageChanged(pageNumber) {
    this.props.setCurrentPage(pageNumber);
    axios(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
    });
  }

  render = () => {
    return <Users props={this.props} onPageChanged={this.onPageChanged} />;
  }
}

const mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage,
    pageSize: state.usersPage.pageSize,
    totalUsers: state.usersPage.totalUsers,
    currentPage: state.usersPage.currentPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersCreator(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageCreator(pageNumber))
    },
    setTotalUsers: (usersTotal) => {
      dispatch(setTotalUsersCreator(usersTotal))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
