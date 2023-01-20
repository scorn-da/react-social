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
  newPostText: 'bla-bla',
  profile: null,
  status: '',
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

export const addPost = () => {
  return {
    type: actionTypes.ADD_POST,
  }
}

export const updateNewPost = (text) => {
  return {
    type: actionTypes.UPDATE_NEW_POST_TEXT,
    newPostText: text,
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
