import { connect } from "react-redux";
import Profile from "src/components/Profile/Profile/Profile";
import { addPost, setProfileInfo, updateNewPost } from "src/redux/profileReducer";
import React from "react";
import axios from "axios";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
      this.props.setProfileInfo(response.data);
    });
  }

  render = () => <Profile {...this.props} />
}

const mapStateToProps = (state) => ({
    profilePage: state.profilePage,
  })

export default connect(mapStateToProps, { addPost, updateNewPost, setProfileInfo })(ProfileContainer);
