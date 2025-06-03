import { useState } from 'react';
import { uploadResume } from '../services/fileUploadService';

export const useFileUpload = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async (files, jobId) => {
    const formData = new FormData();
    files.forEach((file) => formData.append("resumes", file));
    formData.append("jobId", jobId); // send jobId

    setLoading(true);
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to upload");
      }

      const result = await res.json();
      setStatus("Upload successful!");
    } catch (err) {
      console.error(err);
      setStatus("Upload failed!");
    } finally {
      setLoading(false);
    }
  };

  return { handleUpload, status, loading };
};
