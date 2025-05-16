// hooks/useJobs.js
import { useState, useEffect } from "react";
import { fetchJobs } from "../services/jobService";

export const useJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchJobs();
        setJobs(data);
      } catch (err) {
        setError(err.message || "Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  return { jobs, loading, error };
};
