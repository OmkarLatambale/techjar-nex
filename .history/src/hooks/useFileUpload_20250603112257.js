// import { useState } from "react";

// export const useFileUpload = () => {
//   const [status, setStatus] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleUpload = async (files, jobId) => {
//     const formData = new FormData();
//     files.forEach((file) => formData.append("resumes", file));
//     formData.append("jobId", jobId); // include job ID with the form

//     setLoading(true);
//     try {
//       const res = await fetch("/api/upload", {
//         method: "POST",
//         body: formData,
//       });

//       if (!res.ok) {
//         throw new Error("Failed to upload");
//       }

//       const result = await res.json();
//       setStatus("Upload successful!");
//       return result;
//     } catch (err) {
//       console.error("Upload error:", err);
//       setStatus("Upload failed!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { handleUpload, status, loading };
// };


import { useState } from "react";
import axios from "axios";

export const useFileUpload = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async (files, jobId) => {
    const formData = new FormData();
    for (const file of files) {
      formData.append("resumes", file);
    }
    formData.append("jobId", jobId); // Include jobId in request

    try {
      setLoading(true);
      setStatus("");

      const res = await axios.post("http://localhost:3000/upload-resumes", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 200) {
        setStatus("Files uploaded successfully.");
      } else {
        setStatus("Failed to upload files.");
      }
    } catch (error) {
      console.error("Error uploading files:", error);
      setStatus("An error occurred while uploading.");
    } finally {
      setLoading(false);
    }
  };

  return { handleUpload, status, loading };
};
