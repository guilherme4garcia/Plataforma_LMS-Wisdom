/* eslint-disable global-require */
/* eslint-disable no-param-reassign */
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: { Authorization: '' },
});

api.interceptors.request.use(async (config) => {
  try {
    const token = localStorage.getItem('@Wisdom:token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  } catch (error) {
    console.log(error);
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 403) {
      const { useAuth } = require('~/hooks/AuthContext');
      const { signOut } = useAuth();
      signOut();
    }
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);

export default api;
