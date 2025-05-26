// hooks/useJobDescription.js
import { useState } from "react";
import { generateJobDescription } from "../services/jobService";

export const useJobDescription = () => {
  const [generatedDesc, setGeneratedDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateJD = async (jobData) => {
    setLoading(true);
    setError(null);
    try {
      const description = await generateJobDescription(jobData);
      setGeneratedDesc(description);
    } catch (err) {
      setError(err.message);
      setGeneratedDesc("");
    } finally {
      setLoading(false);
    }
  };

  return { generatedDesc, loading, error, generateJD };
};
