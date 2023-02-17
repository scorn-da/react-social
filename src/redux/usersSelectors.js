export const getUsers = (state) => {
  return state.usersPage.users;
}

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
}

export const getTotalUsers = (state) => {
  return state.usersPage.totalUsers;
}

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
}

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
}
