import React from "react";
import ProfileInfo from "src/components/Profile/ProfileInfo/ProfileInfo";
import Posts from "src/components/Profile/Posts/Posts";
import PostsCreatorForm from "src/components/Profile/PostsCreator/PostsCreator";

const Profile = ({ profilePage, addPost, status, updateStatus }) => {
  const { posts, profile } = profilePage;

  const addNewPost = (values) => {
    addPost(values.postText);
  }

  return (
    <>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatus={updateStatus}
      />
      <PostsCreatorForm
        onSubmit={addNewPost}
      />
      <Posts posts={posts} />
    </>
  );
};

export default Profile;
