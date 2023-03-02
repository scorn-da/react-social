import { getAuthedData } from "src/redux/auth";

const INITIALIZED_SUCCESSFULLY = 'react-social/appReducer/INITIALIZED_SUCCESSFULLY';

const initialState = {
  initialized: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESSFULLY:
      return {
        ...state,
        initialized: true,
      }
    default:
      return state;
  }
};

export const initializedSuccessfully = () => ({ type: INITIALIZED_SUCCESSFULLY });

export const initialize = () => (dispatch) => {
  const promise = dispatch(getAuthedData());
  promise.then(() => {
    initializedSuccessfully();
  })
}

export default appReducer;
