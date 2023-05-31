import axios from 'axios';

const baseURL = 'http://localhost:8443';

// Create a new instance of Axios
export const getInstance = axios.create({
  baseURL,
  timeout: 5000,
});

export const postInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Create a new instance of Axios
export const useTokenInstance = (token) => {
  const instance = axios.create({
    baseURL,
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
  useTokenInstance,
};
