import { rerenderEntireTree } from "../render";

const state = {
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
};

export const addPost = () => {
  const newPost = {
    id: 10,
    message: state.profilePage.newPostText,
  }
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

window.state = state;

export default state;
