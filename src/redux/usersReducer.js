import { actionTypes } from "src/utils/consts";

const updateFollowingStatus = (user, followingValue) => {
  return {
    ...user,
    following: followingValue,
  }
}

const initialState = {
  users: [
    /*{
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
    },*/
  ],
  pageSize: 5,
  totalUsers: 20,
  currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
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
        users: [...action.users],
      }
    case actionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      }
    case actionTypes.SET_USERS_TOTAL:
      return {
        ...state,
        totalUsers: action.usersTotal,
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

export const setUsersCreator = (users) => {
  return {
    type: actionTypes.SET_USERS,
    users,
  }
};

export const setCurrentPageCreator = (currentPage) => {
  return {
    type: actionTypes.SET_CURRENT_PAGE,
    currentPage,
  }
};

export const setTotalUsersCreator = (usersTotal) => {
  return {
    type: actionTypes.SET_USERS_TOTAL,
    usersTotal,
  }
};

export default usersReducer;
