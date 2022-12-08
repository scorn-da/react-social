export const actionTypes = {
  ADD_POST: 'ADD-POST',
  SEND_MESSAGE: 'SEND-MESSAGE',
  UPDATE_NEW_POST_TEXT: 'UPDATE-NEW-POST-TEXT',
  UPDATE_NEW_MESSAGE_TEXT: 'UPDATE-NEW-MESSAGE-TEXT',
}

const store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          text: 'abc',
        },
        {
          id: 2,
          text: 'my text',
        },
        {
          id: 3,
          text: 'That\'s interesting',
        },
      ],
      newPostText: 'bla-bla',
    },
    dialogsPage: {
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
    },
  },
  _callSubscriber() {
    console.log('State has been changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === actionTypes.ADD_POST) {
      const newPost = {
        id: 10,
        text: this._state.profilePage.newPostText,
      }
      this._state.profilePage.posts.push(newPost);
      this._callSubscriber(this._state);
    } else if (action.type === actionTypes.UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === actionTypes.UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = actionTypes.messageText;
      this._callSubscriber(this._state);
    } else if (action.type === actionTypes.SEND_MESSAGE) {
      const text = this._state.dialogsPage.newMessageText;
      this._state.dialogsPage.messages.push({ id: 6, text: text, });
      this._callSubscriber(this._state);
    }
  },
};

export const addPostCreator = () => {
  return {
    type: actionTypes.ADD_POST,
  }
}

export const sendMessageCreator = () => {
  return {
    type: actionTypes.SEND_MESSAGE,
  }
}

export const updateNewPostCreator = (text) => {
  return {
    type: actionTypes.UPDATE_NEW_POST_TEXT,
    newPostText: text,
  }
}

export const updateNewMessageCreator = (text) => {
  return {
    type: actionTypes.UPDATE_NEW_MESSAGE_TEXT,
    newPostText: text,
  }
}

window.state = store;
export default store;
