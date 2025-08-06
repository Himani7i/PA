//src/utils/axios.jsx
import axios from 'axios';
let baseURL = process.env.REACT_APP_API_URL|| 'http://localhost:5000';
if (baseURL.endsWith('/')) baseURL = baseURL.slice(0, -1); 

const API = axios.create({
  baseURL: `${baseURL}/api`, 
  withCredentials: true,
});
export default API;