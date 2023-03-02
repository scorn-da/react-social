import { actionTypes } from "src/utils/consts";
import { profileAPI } from "src/api/api";

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
    case actionTypes.ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, { id: 6, text: action.newPostText, }],
      }
    }
    case actionTypes.DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.postId),
      }
    }
    case actionTypes.SET_PROFILE_INFO: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case actionTypes.SET_STATUS: {
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
    type: actionTypes.ADD_POST,
    newPostText: postText,
  }
}

export const setProfileInfo = (profile) => {
  return {
    type: actionTypes.SET_PROFILE_INFO,
    profile,
  }
}

export const setStatus = (status) => {
  return {
    type: actionTypes.SET_STATUS,
    status,
  }
}

export const deletePost = (postId) => {
  return {
    type: actionTypes.DELETE_POST,
    postId
  }
}

export const getUserInfo = (userId) => (dispatch) => {
  profileAPI.getUserProfile(userId).then(data => {
    dispatch(setProfileInfo(data));
  });
}

export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then(data => {
    dispatch(setStatus(data));
  });
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(getUserStatus)
    .then(data => {
      if (data.statusCode === 0) {
        dispatch(setStatus(status));
      }
    });
}

export default profileReducer;
