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
        ...action.data,
        isAuthed: true,
      }
    default:
      return state;
  }
};

export const setAuthedUserData = (userId, email, login) => {
  return {
    type: actionTypes.SET_USER_DATA,
    data: {
      userId,
      email,
      login,
    }
  }
};

export const getAuthedData = () => (dispatch) => {
  authAPI.getAuth().then(data => {
    if(data.resultCode === 0) {
      const { id, email, login } = data.data;
      dispatch(setAuthedUserData(id, email, login));
    }
  })
}

export default authReducer;
