import React from 'react';
import styles from 'src/components/Profile/Profile.module.css';
import ProfileInfo from "src/components/Profile/ProfileInfo/ProfileInfo";
import PostsCreator from "src/components/Profile/PostsCreator/PostsCreator";
import Posts from "src/components/Profile/Posts/Posts";

const Profile = ({ state, dispatch }) => {
  const { posts, newPostText} = state;

  return (
      <>
        <ProfileInfo bio="Hi! My name is. Hi! My name is. Hi! My name is." />
        <PostsCreator
          newPostText={newPostText}
          dispatch={dispatch}
        />
        <Posts posts={posts}/>
      </>
  );
};

export default Profile;
