import { connect } from "react-redux";
import Profile from "src/components/Profile/Profile/Profile";
import { addPost, updateNewPost } from "src/redux/profileReducer";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
}

const ProfileContainer = connect(mapStateToProps, { addPost, updateNewPost })(Profile);

export default ProfileContainer;
