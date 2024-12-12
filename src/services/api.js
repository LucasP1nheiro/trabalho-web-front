import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

// Request interceptor for adding auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Ensure proper headers for CORS
  config.headers['Content-Type'] = 'application/json';
  config.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000';

  return config;
});

export default api;