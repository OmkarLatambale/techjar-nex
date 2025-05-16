import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:5000/api';

export const fetchKPIs = async () => {
  try {
    const response = await axios.get(`${API_URL}/kpis`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch KPIs", error);
    throw error;
  }
};
