import axios from 'axios';

// Create a new instance of Axios
export const getInstance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000,
});

// Create a new instance of Axios
export const getTockenInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Authorization: localStorage.getItem('jwtToken'),
  },
});

export const postTockenInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('jwtToken'),
  },
});

export const postInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default { getInstance, postInstance };
