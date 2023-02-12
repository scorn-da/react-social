import { actionTypes } from "src/utils/consts";
import { authAPI } from "src/api/api";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isLoading: false,
  isAuthed: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
};

export const setAuthedUserData = (userId, email, login, isAuthed) => {
  return {
    type: actionTypes.SET_USER_DATA,
    payload: {
      userId,
      email,
      login,
      isAuthed,
    }
  }
};

export const getAuthedData = () => (dispatch) => {
  authAPI.getAuth().then(data => {
    if(data.resultCode === 0) {
      const { id, email, login } = data.data;
      dispatch(setAuthedUserData(id, email, login, true));
    }
  })
}

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then(data => {
    if(data.resultCode === 0) {
      dispatch(getAuthedData(email, password, rememberMe, true));
    }
  })
}

export const logout = () => (dispatch) => {
  authAPI.logout().then(data => {
    if(data.resultCode === 0) {
      dispatch(getAuthedData(null, null, null, false));
    }
  })
}

export default authReducer;
