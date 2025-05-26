// src/hooks/useJobDescription.js
import { useState } from "react";
import { generateJobDescriptionAPI } from "../services/jdService";

export const useJobDescription = () => {
  const [generatedDesc, setGeneratedDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateJD = async ({
    organization_name,
    job_industry,
    job_title,
    skills,
    job_location,
    ctc,
    eligibility_criteria,
    requirements,
    email,
  }) => {
    setLoading(true);
    setError("");

    try {
      const description = await generateJobDescriptionAPI({
        organization_name,
        job_industry,
        job_title,
        skills,
        job_location,
        ctc,
        eligibility_criteria,
        requirements,
        email,
      });

      setGeneratedDesc(description || "No description returned.");
    } catch (err) {
      setError(err.message || "Failed to generate job description.");
      setGeneratedDesc("Failed to generate job description.");
    } finally {
      setLoading(false);
    }
  };

  return { generatedDesc, loading, error, generateJD };
};








