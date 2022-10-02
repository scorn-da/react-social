import React from 'react';
import styles from './Profile.module.css';
import Posts from "./Posts/Posts";
import PostsCreator from "./PostsCreator/PostsCreator";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
      <>
        <ProfileInfo bio="Hi! My name is. Hi! My name is. Hi! My name is." />
        <PostsCreator />
        <Posts />
      </>
  );
};

export default Profile;
