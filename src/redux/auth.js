import { authAPI, securityAPI } from "src/api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'react-social/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'react-social/auth/GET_CAPTCHA_URL_SUCCESS';

const initialState = {
  userId: null,
  email: null,
  login: null,
  captchaUrl: null,
  isLoading: false,
  isAuthed: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
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

export const getCaptchaUrlSuccess = (captchaUrl) => {
  return {
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {
      captchaUrl,
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

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe, captcha);

  if (response.data.resultCode === 0) {
    dispatch(getAuthedData(email, password, rememberMe, true));
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
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
