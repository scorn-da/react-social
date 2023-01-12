import { actionTypes } from "src/utils/consts";

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

export default authReducer;
