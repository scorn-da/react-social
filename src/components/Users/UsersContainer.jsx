import Users from "src/components/Users/Users/Users";
import {
  followCreator,
  setCurrentPageCreator,
  setTotalUsersCreator,
  setUsersCreator,
  unfollowCreator
} from "src/redux/usersReducer";
import { connect } from "react-redux";

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

export default connect(mapStateToProps, mapDispatchToProps)(Users);
