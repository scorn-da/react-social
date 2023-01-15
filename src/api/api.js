import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API_KEY': '89d414f2-0dbc-4866-90b0-d7b723fefc70',
  }
})

export const usersAPI = {
  getUsers: (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
  },
  getAuth: () => {
    return instance.get('auth/me').then((response) => response.data);
  },
  getUserProfile: (userId) => {
    return instance.get(`profile/${userId}`).then(response => response.data);
  },
  unfollowUser: (userId) => {
    return instance.delete(`follow/${userId}`);
  },
  followUser: (userId) => {
    return instance.post(`follow/${userId}`);
  }
}
