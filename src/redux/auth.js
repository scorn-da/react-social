import { authAPI } from "src/api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'react-social/auth/SET_USER_DATA';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isLoading: false,
  isAuthed: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
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
    type: SET_USER_DATA,
    payload: {
      userId,
      email,
      login,
      isAuthed,
    }
  }
};

export const getAuthedData = () => async (dispatch) => {
  const response = await authAPI.getAuth();

  if (response.resultCode === 0) {
    const { id, email, login } = response.data;
    dispatch(setAuthedUserData(id, email, login, true));
  }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe);

  if (response.data.resultCode === 0) {
    dispatch(getAuthedData(email, password, rememberMe, true));
  } else {
    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
    dispatch(stopSubmit('login', { _error: message }));
  }
}

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(getAuthedData(null, null, null, false));
  }
}

export default authReducer;
