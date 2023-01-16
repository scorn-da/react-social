import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  timeout: 1000,
  headers: {
    'API-KEY': 'fe291413-1646-410c-9b2e-78c4411af7ab',
  }
})

export const usersAPI = {
  getUsers: (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
  },
  getUserProfile: (userId) => {
    return instance.get(`profile/${userId}`).then(response => response.data);
  },
  unfollowUser: (userId) => {
    return instance.delete(`follow/${userId}`);
  },
  followUser: (userId) => {
    return instance.post(`follow/${userId}`);
  },
}

export const authAPI = {
  getAuth: () => {
    return instance.get('auth/me').then((response) => response.data);
  },
}
