// src/hooks/useJobDescription.js
import { useState } from "react";
import { generateJobDescriptionAPI } from "../services/jdService";

export const useJobDescription = () => {
  const [generatedDesc, setGeneratedDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateJD = async ({
    orgName,
    industry,
    title,
    skills,
    location,
    ctc,
    eligibilityCriteria,
    requirements,
  }) => {
    setLoading(true);
    setError("");
    try {
      const data = await generateJobDescriptionAPI({
        orgName,
        industry,
        title,
        skills,
        location,
        ctc,
        eligibilityCriteria,
        requirements,
      });
      setGeneratedDesc(data.job_description || "No description returned.");
    } catch (err) {
      setError(err.message);
      setGeneratedDesc("Failed to generate job description.");
    } finally {
      setLoading(false);
    }
  };

  return { generatedDesc, loading, error, generateJD };
};





// import { useState } from "react";
// import { generateJobDescriptionAPI } from "../services/jdService";

// export const useJobDescription = () => {
//   const [generatedDesc, setGeneratedDesc] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const generateJD = async (formData) => {
//     try {
//       setLoading(true);
//       setError(null);
//       const desc = await generateJobDescriptionAPI(formData);
//       setGeneratedDesc(desc);
//     } catch (err) {
//       setError(err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     generatedDesc,
//     loading,
//     error,
//     generateJD,
//   };
// };
