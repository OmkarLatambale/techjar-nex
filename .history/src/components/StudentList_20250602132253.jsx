import React, { useState } from "react";
import { uploadResume, fetchCandidatesByJobId } from "../services/jobService";

const StudentList = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jobId, setJobId] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleResumeUpload = async (e) => {
    e.preventDefault();

    if (!selectedFile || !jobId) {
      alert("Please select a file and enter Job ID");
      return;
    }

    const formData = new FormData();
    formData.append("resume", selectedFile);
    formData.append("jobId", jobId);

    try {
      await uploadResume(formData);
      setIsUploaded(true);

      // Fetch candidates after successful upload
      const data = await fetchCandidatesByJobId(jobId);
      setCandidates(data);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload resume.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload Resume</h2>
      <form onSubmit={handleResumeUpload}>
        <input
          type="text"
          placeholder="Enter Job ID"
          value={jobId}
          onChange={(e) => setJobId(e.target.value)}
        />
        <br />
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
        <br />
        <button type="submit">Upload</button>
      </form>

      {isUploaded && (
        <>
          <h3>Candidate List</h3>
          {candidates.length === 0 ? (
            <p>No candidates found.</p>
          ) : (
            <ul>
              {candidates.map((candidate) => (
                <li key={candidate._id}>
                  {candidate.name} - {candidate.email}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default StudentList;
