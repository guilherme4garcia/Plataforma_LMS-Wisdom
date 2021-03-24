import axios from 'axios';

const api = axios.create({
  baseURL: 'api_aqui/',
});

export default api;
