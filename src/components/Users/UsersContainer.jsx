import Users from "src/components/Users/Users/Users";
import { followCreator, setUsers, unfollowCreator } from "src/redux/usersReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage,
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
      dispatch(setUsers(users));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
