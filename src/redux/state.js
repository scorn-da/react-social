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
  getState() {
    return this._state;
  },
  addPost() {
    const newPost = {
      id: 10,
      message: this._state.profilePage.newPostText,
    }
    this._state.profilePage.posts.push(newPost);
    this._callSubscriber(this._state);
  },
  _callSubscriber() {
    console.log('State has been changed');
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
};

window.state = store;
export default store;
