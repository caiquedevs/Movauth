import axios from 'axios';

const api = axios.create({
  baseURL: 'https://movacar-api.herokuapp.com',
});

export default api;
