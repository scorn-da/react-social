import profileReducer from "src/redux/profileReducer";
import dialogsReducer from "src/redux/dialogsReducer";

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

window.state = store;
export default store;
