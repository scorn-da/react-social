import { connect } from "react-redux";
import Profile from "src/components/Profile/Profile/Profile";
import { addPostCreator, updateNewPostCreator } from "src/redux/profileReducer";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostCreator());
    },
    updateNewPostText: (text) => {
      const action = updateNewPostCreator(text);
      dispatch(action);
    },
  };
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
