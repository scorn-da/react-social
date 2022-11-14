import React from 'react';
import styles from './Profile.module.css';
import Posts from "./Posts/Posts";
import PostsCreator from "./PostsCreator/PostsCreator";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ state, updateNewPostText, addPost }) => {
  const { posts, newPostText} = state;

  return (
      <>
        <ProfileInfo bio="Hi! My name is. Hi! My name is. Hi! My name is." />
        <PostsCreator newPostText={newPostText} addPost={addPost} updateNewPostText={updateNewPostText} />
        <Posts posts={posts}/>
      </>
  );
};

export default Profile;
