// services/jobService.js
const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchJobs = async () => {
  const res = await fetch(`${BASE_URL}/jobs`);
  if (!res.ok) throw new Error("Failed to fetch jobs");
  return await res.json();
};

export const confirmJob = async (jobId) => {
  return await fetch(`${BASE_URL}/jobs/${jobId}/confirm`, {
    method: "POST",
  });
};

export const rejectJob = async (jobId) => {
  return await fetch(`${BASE_URL}/jobs/${jobId}/reject`, {
    method: "POST",
  });
};

export const assignToSubVendor = async (jobId, subVendorId) => {
  return await fetch(`${BASE_URL}/jobs/${jobId}/assign`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ subVendorId }),
  });
};
