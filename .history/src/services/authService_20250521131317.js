
import axios from 'axios';

const API_URL = process.env.VITE_API_URL || 'http://localhost:5000/api';

export const loginVendor = async (credentials) => {
  const response = await axios.post(`${http://127.0.0.1:8000/api/login/}/vendor/login`, credentials);
  return response.data;
};
