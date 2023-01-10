import React from "react";
import ProfileInfo from "src/components/Profile/ProfileInfo/ProfileInfo";
import PostsCreator from "src/components/Profile/PostsCreator/PostsCreator";
import Posts from "src/components/Profile/Posts/Posts";

const Profile = (props) => {
  const { newPostText, posts, profile } = props.profilePage;

  return (
    <>
      <ProfileInfo profile={profile} />
      <PostsCreator
        newPostText={newPostText}
        addPost={props.addPost}
        updateNewPost={props.updateNewPost}
      />
      <Posts posts={posts} />
    </>
  );
};

export default Profile;
