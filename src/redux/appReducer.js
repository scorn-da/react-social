import { actionTypes } from "src/utils/consts";
import { getAuthedData } from "src/redux/auth";

const initialState = {
  initialized: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INITIALIZED_SUCCESSFULLY:
      return {
        ...state,
        initialized: true,
      }
    default:
      return state;
  }
};

export const initializedSuccessfully = () => ({ type: actionTypes.INITIALIZED_SUCCESSFULLY });

export const initialize = () => (dispatch) => {
  const promise = dispatch(getAuthedData());
  promise.then(() => {
    initializedSuccessfully();
  })
}

export default appReducer;
