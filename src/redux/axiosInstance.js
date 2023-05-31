import axios from 'axios';
import { useSelector } from 'react-redux';

// Create a new instance of Axios
export const getInstance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000,
});

export const postInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Create a new instance of Axios
export const useTokenInstance = (token) => {
  const instance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      Authorization: token ? `Bearer ${token}` : '*',
    },
    timeout: 5000,
  });
  return instance;
};

export default {
  getInstance,
  postInstance,
  useTokenInstance
};
