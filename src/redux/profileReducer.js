import { profileAPI } from "src/api/api";

const ADD_POST = 'react-social/profileReducer/ADD_POST';
const DELETE_POST = 'react-social/profileReducer/DELETE_POST';
const SET_PROFILE_INFO = 'react-social/profileReducer/SET_PROFILE_INFO';
const SET_STATUS = 'react-social/profileReducer/SET_STATUS';

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
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, { id: 6, text: action.newPostText, }],
      }
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.postId),
      }
    }
    case SET_PROFILE_INFO: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
}

export const addPost = (postText) => {
  return {
    type: ADD_POST,
    newPostText: postText,
  }
}

export const setProfileInfo = (profile) => {
  return {
    type: SET_PROFILE_INFO,
    profile,
  }
}

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  }
}

export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId
  }
}

export const getUserInfo = (userId) => async (dispatch) => {
  const response = await profileAPI.getUserProfile(userId);
  dispatch(setProfileInfo(response));
}

export const getUserStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response));
}

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(getUserStatus);

  if (response.statusCode === 0) {
    dispatch(setStatus(status));
  }
}

export default profileReducer;
