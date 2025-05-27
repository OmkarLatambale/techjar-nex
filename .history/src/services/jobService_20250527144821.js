import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; // Should be: https://ibot-backend.onrender.com

export const postJob = async (jobData) => {
  const response = await axios.post(`${API_URL}/jobs/post-job-jd/`, jobData);
  return response.data;
};

export const getJobsForVendor = async () => {
  const response = await axios.get(`${API_URL}/jobs/jobpostlist/`);
  return response.data;
};

export const assignToSubVendor = async (jobId, subVendorId) => {
  const response = await axios.post(`${API_URL}/jobs/${jobId}/assign`, {
    subVendorId,
  });
  return response.data;
};
