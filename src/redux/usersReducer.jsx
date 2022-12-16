import { actionTypes } from "src/utils/consts";

const updateFollowingStatus = (user, followingValue) => {
  return {
    ...user,
    following: followingValue,
  }
}

const initialState = {
  users: [
    {
      id: 1,
      name: 'Vadim',
      age: 23,
      photo: '',
      location: { city: 'Saint P.', country: 'Russia' },
      following: false,
      onlineStatus: 'online',
    },
    {
      id: 2,
      name: 'Anton',
      age: 18,
      photo: '',
      location: { city: 'Moscow', country: 'Russia' },
      following: true,
      onlineStatus: 'offline',
    },
    {
      id: 3,
      name: 'Katya',
      age: 20,
      photo: '',
      location: { city: 'Tokyo', country: 'Japan' },
      following: true,
      onlineStatus: 'offline',
    },
    {
      id: 4,
      name: 'Tanya',
      age: 24,
      photo: '',
      location: { city: 'Novosibirsk', country: 'Russia' },
      following: false,
      onlineStatus: 'online',
    },
    {
      id: 5,
      name: 'Skeler',
      age: 21,
      photo: '',
      location: { city: 'Tel Aviv', country: 'Israel' },
      following: true,
      onlineStatus: 'online',
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action) {
    case actionTypes.FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            updateFollowingStatus(user, true);
          }
          return user;
        }),
      }
    case actionTypes.UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            updateFollowingStatus(user, false);
          }
          return user;
        })
      }
    case actionTypes.SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      }
    default:
      return state;
  }
};

export const followCreator = (userId) => {
  return {
    type: actionTypes.FOLLOW,
    userId,
  }
};

export const unfollowCreator = (userId) => {
  return {
    type: actionTypes.UNFOLLOW,
    userId,
  }
};

export const setUsers = (users) => {
  return {
    type: actionTypes.SET_USERS,
    users,
  }
};

export default usersReducer;
