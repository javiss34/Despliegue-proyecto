import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  // baseURL: 'http://TU_IP_ELASTICA_DE_AWS:3000/api',
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  console.log('Request endpoint:', `${config.baseURL}${config.url}`);
  console.log('Request data:', config.data);
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
