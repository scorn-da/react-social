import Users from "src/components/Users/Users/Users";
import {
  follow,
  setCurrentPage,
  setIsLoading,
  setTotalUsers,
  setUsers,
  unfollow,
} from "src/redux/usersReducer";
import { connect } from "react-redux";
import React from "react";
import Loader from "src/components/Loader/Loader";
import { usersAPI } from "src/api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsLoading(true);

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.setIsLoading(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsers(data.totalCount);
    });
  }

  onPageChanged(pageNumber) {
    this.props.setIsLoading(true);
    this.props.setCurrentPage(pageNumber);

    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.setUsers(data.items);
      this.props.setIsLoading(false);
    });
  }

  render = () => {
    return (
      <>
        {this.props.isLoading ? <Loader /> : null}
        <Users {...this.props} onPageChanged={this.onPageChanged.bind(this)} />
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

export default connect(mapStateToProps, {  follow, unfollow, setUsers, setTotalUsers, setCurrentPage, setIsLoading, })(UsersContainer);
