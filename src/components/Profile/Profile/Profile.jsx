import React from "react";
import ProfileInfo from "src/components/Profile/ProfileInfo/ProfileInfo";
import PostsCreator from "src/components/Profile/PostsCreator/PostsCreator";
import Posts from "src/components/Profile/Posts/Posts";

const Profile = ({ profilePage, addPost, updateNewPost }) => {
  const { newPostText, posts } = profilePage;

  return (
    <>
      <ProfileInfo bio="Hi! My name is. Hi! My name is. Hi! My name is." />
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
