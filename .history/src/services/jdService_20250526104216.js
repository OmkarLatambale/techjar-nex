// services/jobService.js
import axios from "axios";

const BASE_URL = "https://ibot-backend.onrender.com";

export const generateJobDescription = async (jobData) => {
  try {
    const response = await axios.post(`${BASE_URL}/jobs/post-job/`, jobData);
    return response.data.generated_description; // adjust key if API response differs
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to generate job description"
    );
  }
};
