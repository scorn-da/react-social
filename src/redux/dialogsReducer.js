import { actionTypes } from "../utils/consts";

const dialogsReducer = (state, action) => {

  switch (action.type) {
    case actionTypes.UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = actionTypes.messageText;
      return state;
    case actionTypes.SEND_MESSAGE:
      const text = state.newMessageText;
      state.messages.push({ id: 6, text: text, });
      return state;
    default:
      return state;
  }
}
export const sendMessageCreator = () => {
  return {
    type: actionTypes.SEND_MESSAGE,
  }
}

export const updateNewMessageCreator = (text) => {
  return {
    type: actionTypes.UPDATE_NEW_MESSAGE_TEXT,
    newPostText: text,
  }
}

export default dialogsReducer;
