import { profileAPI } from "src/api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'react-social/profileReducer/ADD_POST';
const DELETE_POST = 'react-social/profileReducer/DELETE_POST';
const SET_PROFILE_INFO = 'react-social/profileReducer/SET_PROFILE_INFO';
const SET_STATUS = 'react-social/profileReducer/SET_STATUS';
const SAVE_PHOTO = 'react-social/profileReducer/SAVE_PHOTO';

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
    case SAVE_PHOTO: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
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

export const savePhotoSuccessfully = (photos) => {
  return {
    type: SAVE_PHOTO,
    photos
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

export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);

  if (response.resultCode === 0) {
    dispatch(savePhotoSuccessfully(response.photos))
  }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);

  if (response.resultCode === 0) {
    dispatch(getUserInfo(userId))
  } else {
    dispatch(stopSubmit('profileEditForm', { _error: response.messages[0] }));
    return Promise.reject(response.messages[0]);
  }
}

export default profileReducer;
