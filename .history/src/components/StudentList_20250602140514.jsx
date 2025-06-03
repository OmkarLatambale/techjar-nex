import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { uploadResume, fetchCandidatesByJobId } from "../services/jobService";

const StudentList = () => {
  const { jobId } = useParams(); // 👈 Get jobId from URL
  const [selectedFile, setSelectedFile] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("Please select a resume file.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", selectedFile);
    formData.append("jobId", jobId); // 👈 Send jobId automatically

    try {
      setLoading(true);
      await uploadResume(formData);

      const data = await fetchCandidatesByJobId(jobId);
      setCandidates(data);
    } catch (err) {
      console.error(err);
      alert("Upload or fetch failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload Resume for Job ID: {jobId}</h2>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
        <br />
        <br />
        <button type="submit">Upload Resume</button>
      </form>

      {loading && <p>Loading candidates...</p>}

      {!loading && candidates.length > 0 && (
        <>
          <h3>Candidate List</h3>
          <ul>
            {candidates.map((c) => (
              <li key={c._id}>
                {c.name} - {c.email}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default StudentList;
