import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setIsLoading,
  setTotalUsers,
  setUsers,
  unfollow,
} from "src/redux/usersReducer";
import Users from "src/components/Users/Users/Users";
import Loader from "src/components/Loader/Loader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsLoading(true);
    axios(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setIsLoading(false);
      this.props.setUsers(response.data.items);
      this.props.setTotalUsers(response.data.totalCount);
    });
  }

  onPageChanged(pageNumber) {
    this.props.setIsLoading(true);
    this.props.setCurrentPage(pageNumber);
    axios(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setIsLoading(false);
    });
  }

  render = () => {
    return (
      <>
        {this.props.isLoading ? <Loader /> : null}
        <Users props={this.props} onPageChanged={this.onPageChanged} />
      </>);
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

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsers,
  setIsLoading,
})(UsersContainer);
