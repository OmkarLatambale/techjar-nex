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

// Handles API calls related to jobs and candidates

export const fetchCandidatesByJobId = async (jobId) => {
  const response = await fetch(`https://ibot-backend.onrender.com/jobs/candidates/${jobId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch candidates');
  }
  return response.json();
};

export const uploadResume = async (jobId, formData) => {
  // formData should contain the resume file(s) and jobId as needed by backend
  const response = await fetch(`https://ibot-backend.onrender.com/jobs/jdresponse/`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload resume');
  }
  return response.json();
};
