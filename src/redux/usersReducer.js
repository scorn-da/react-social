import { actionTypes } from "src/utils/consts";
import { usersAPI } from "src/api/api";
import { updateObjectInArray } from "src/utils/functions";

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
  isLoading: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: true }),
      }
    case actionTypes.UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: false }),
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
    case actionTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case actionTypes.TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state;
  }
};

export const followSucced = (userId) => {
  return {
    type: actionTypes.FOLLOW,
    userId,
  }
};

export const unfollowSucced = (userId) => {
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

export const setCurrentPage = (currentPage) => {
  return {
    type: actionTypes.SET_CURRENT_PAGE,
    currentPage,
  }
};

export const setTotalUsers = (usersTotal) => {
  return {
    type: actionTypes.SET_USERS_TOTAL,
    usersTotal,
  }
};

export const setIsLoading = (isLoading) => {
  return {
    type: actionTypes.SET_IS_LOADING,
    isLoading,
  }
};

export const toggleFollowingProgress = (isFetching, userId) => {
  return {
    type: actionTypes.TOGGLE_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId,
  }
};

export const requestUsers = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    dispatch(setCurrentPage(page));

    const response = await usersAPI.getUsers(page, pageSize);
    dispatch(setIsLoading(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsers(response.totalCount));
  }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, userId));

  const response = await apiMethod(userId);
  if (response.resultCode === 0) {
    dispatch(toggleFollowingProgress(false, userId));
    dispatch(actionCreator(userId));
  }
}

export const follow = (userId) => {
  return async (dispatch) => {
    const apiMethod = usersAPI.followUser.bind(usersAPI);
    await followUnfollowFlow(dispatch, userId, apiMethod, followSucced);
  }
}

export const unfollow = (userId) => {
  return async (dispatch) => {
    const apiMethod = usersAPI.unfollowUser.bind(usersAPI);
    await followUnfollowFlow(dispatch, userId, apiMethod, unfollowSucced);
  }
}

export default usersReducer;
