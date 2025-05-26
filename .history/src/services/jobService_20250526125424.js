// services/jobService.js
import axios from 'axios';

export const fetchJobs = async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/jobs/post-job-jd/`);
  return response.data;
};

export const assignToSubVendor = async (jobId, subVendorId) => {
  // Dummy post request — adjust according to your backend
  return axios.post(`https://ibot-backend.onrender.com/jobs/assign`, {
    jobId,
    subVendorId,
  });
};
