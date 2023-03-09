const SEND_MESSAGE = 'react-social/dialogsReducer/SEND_MESSAGE';

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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const text = action.newMessageText;
      return  {
        ...state,
        messages: [...state.messages, { id: 6, text: text, }]
      }
    default:
      return state;
  }
}

export const sendMessage = (text) => {
  return {
    type: SEND_MESSAGE,
    newMessageText: text,
  }
}

export default dialogsReducer;
