import React from 'react';
import styles from './Profile.module.css';
import Posts from "./Posts/Posts";
import PostsCreator from "./PostsCreator/PostsCreator";

const Profile = () => {
  return (
      <>
        <img src="https://phonoteka.org/uploads/posts/2021-05/1621731417_1-phonoteka_org-p-izumrudnie-listya-fon-1.jpg"
             alt=""/>
        <PostsCreator/>
        <Posts/>
      </>
  );
};

export default Profile;