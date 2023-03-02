import profileReducer, { addPost, deletePost } from "src/redux/profileReducer";

const action = addPost('a new post with the text');
const state = {
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
};

it('posts number should be incremented', () => {
  // 1. Test data

  // 2. Action
  const newState = profileReducer(state, action);

  // 3. Expectations
  expect (newState.posts.length).toBe(4);
})

it("after the post's deleting, the length of posts should be decremented", () => {
  const action = deletePost(1);

  const newState = profileReducer(state, action);

  expect (newState.posts.length).toBe(2);
})


it("after deleting the post with incorrect id, the length shouldn't be decremented", () => {
  const action = deletePost(1000000);

  const newState = profileReducer(state, action);

  expect (newState.posts.length).toBe(3);
})

