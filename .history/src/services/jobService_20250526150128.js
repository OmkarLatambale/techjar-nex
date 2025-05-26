// services/jobService.js

import axios from 'axios';

export const postJob = async (jobData) => {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/jobs/post-job-jd/`, jobData);
  return response.data;
};

// Keep this only if you're showing job listings
export const fetchJobs = async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`);
  return response.data;
};
