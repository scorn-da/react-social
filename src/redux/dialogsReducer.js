import { actionTypes } from "src/utils/consts";

const initialState = {
  dialogs: [
    { name: "Vasya", id: 1, },
    { name: "Fedya", id: 2, },
    { name: "Masha", id: 3, },
  ],
  messages: [
    { text: "My message", id: 1, },
    { text: "My new message", id: 2, },
    { text: "My current message", id: 3, },
  ],
  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
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
