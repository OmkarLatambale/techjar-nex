
import axios from 'axios';

const API_URL = process.env.VITE_API_URL || 'http://localhost:5000/api';

export const loginVendor = async (credentials) => {
  const response = await axios.post(`${API_URL}/vendor/login`, credentials);
  return response.data;
};
