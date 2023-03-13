import React from "react";
import ProfileInfo from "src/components/Profile/ProfileInfo/ProfileInfo";
import Posts from "src/components/Profile/Posts/Posts";
import PostsCreatorForm from "src/components/Profile/PostsCreator/PostsCreator";

const Profile = ({ isOwner, profilePage, addPost, status, updateStatus, savePhoto, saveProfile, }) => {
  const { posts, profile } = profilePage;

  const addNewPost = (values) => {
    addPost(values.postText);
  }

  return (
    <>
      <ProfileInfo
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        savePhoto={savePhoto}
        saveProfile={saveProfile}
      />
      <PostsCreatorForm
        onSubmit={addNewPost}
      />
      <Posts posts={posts} />
    </>
  );
};

export default Profile;
