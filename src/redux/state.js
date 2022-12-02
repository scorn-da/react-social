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
    if (action.type === 'ADD-POST') {
      const newPost = {
        id: 10,
        message: this._state.profilePage.newPostText,
      }
      this._state.profilePage.posts.push(newPost);
      this._callSubscriber(this._state);
    } else if (action.type = 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

window.state = store;
export default store;
