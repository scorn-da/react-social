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
    console.warn('Obsolete method has been used. Please, use the ProfileAPI.');
    return profileAPI.getUserProfile(userId);
  },
  unfollowUser: (userId) => {
    return instance.delete(`follow/${userId}`);
  },
  followUser: (userId) => {
    return instance.post(`follow/${userId}`);
  },
}

export const profileAPI = {
  getUserProfile: (userId) => {
    return instance.get(`profile/${userId}`).then(response => response.data);
  },
  getStatus: (userId) => {
    return instance.get(`profile/status/${userId}`).then(response => response.data);
  },
  updateStatus: (status) => {
    return instance.put(`profile/status`, { status }).then(response => response.data);
  },
  savePhoto: (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);
    return instance.put(`profile/photo`, formData, {
      headers:  {
        "Content-Type": "multipart/form-data"
      }
    }).then(response => response.data);
  },
  saveProfile: (profile) => {
    return instance.put(`profile`, profile ).then(response => response.data);
  },
}

export const authAPI = {
  getAuth: () => {
    return instance.get('auth/me').then((response) => response.data);
  },
  login: (email, password, rememberMe = false) => {
    return instance.post('auth/login', { email, password, rememberMe})
  },
  logout: () => {
    return instance.delete('auth/login')
  }
}
