import React from "react";
import ProfileInfo from "src/components/Profile/ProfileInfo/ProfileInfo";
import PostsCreator from "src/components/Profile/PostsCreator/PostsCreator";
import Posts from "src/components/Profile/Posts/Posts";
import { Redirect } from "react-router-dom";

const Profile = ({ profilePage, addPost, updateNewPost, status, updateStatus }) => {
  const { newPostText, posts, profile } = profilePage;

  return (
    <>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatus={updateStatus}
      />
      <PostsCreator
        newPostText={newPostText}
        addPost={addPost}
        updateNewPost={updateNewPost}
      />
      <Posts posts={posts} />
    </>
  );
};

export default Profile;
