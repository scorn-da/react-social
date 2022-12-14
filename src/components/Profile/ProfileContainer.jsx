import React from 'react';
import ProfileInfo from "src/components/Profile/ProfileInfo/ProfileInfo";
import PostsCreator from "src/components/Profile/PostsCreator/PostsCreator";
import Posts from "src/components/Profile/Posts/Posts";
import { addPostCreator, updateNewPostCreator } from "src/redux/profileReducer";
import StoreContext from "src/StoreContext";

const ProfileContainer = () => {
  return (
      <StoreContext.Consumer>
        {(store) => {
          const state = store.getState();
          const { posts, newPostText} = state.profilePage;

          const addPost = () => {
            store.dispatch(addPostCreator());
          }

          const onPostChange = (text) => {
            const action = updateNewPostCreator(text);
            store.dispatch(action);
          }

          return (
            <>
              <ProfileInfo bio="Hi! My name is. Hi! My name is. Hi! My name is." />
              <PostsCreator
                newPostText={newPostText}
                addPost={addPost}
                updateNewPostText={onPostChange}
              />
              <Posts posts={posts} />
            </>
          )
        }}
      </StoreContext.Consumer>
  );
};

export default ProfileContainer;
