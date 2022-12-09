import { actionTypes } from "../utils/consts";

const profileReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST:
      const newPost = {
        id: 6,
        text: state.newPostText,
      }
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case actionTypes.UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addPostCreator = () => {
  return {
    type: actionTypes.ADD_POST,
  }
}

export const updateNewPostCreator = (text) => {
  return {
    type: actionTypes.UPDATE_NEW_POST_TEXT,
    newPostText: text,
  }
}

export default profileReducer;
