import { actionTypes } from "src/utils/consts";

const initialState = {
  posts: [
    {
      id: 1,
      text: 'abc',
    },
    {
      id: 2,
      text: 'my text',
    },
    {
      id: 3,
      text: 'That\'s interesting',
    },
  ],
  newPostText: 'bla-bla',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST: {
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, { id: 6, text: state.newPostText, }],
      }
    }
    case actionTypes.UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newPostText,
      };
    }
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
