import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://100.49.136.165:8080/api',
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
