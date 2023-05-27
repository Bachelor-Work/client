import axios from 'axios';

// Create a new instance of Axios
const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000,
});

export default instance;