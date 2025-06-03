import React, { useState } from "react";
import { useCandidates } from "../hooks/useCandidates";
import { uploadResume } from "../services/jobService";

const StudentList = ({ jobId }) => {
  const { candidates, loading, error } = useCandidates(jobId);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const handleSendMail = (email) => {
    alert(`Mail sent to ${email}`);
  };

  const handleSendMailToAll = () => {
    const allEmails = candidates.map((c) => c.email).join(", ");
    alert(`Mail sent to all: ${allEmails}`);
  };

  const handleFileUpload = async (event) => {
    const files = event.target.files;
    if (!files.length) return;

    const formData = new FormData();
    // Append each file (assuming multiple file upload)
    for (let i = 0; i < files.length; i++) {
      formData.append("resumes", files[i]);
    }
    formData.append("jobId", jobId);

    setUploading(true);
    setUploadError(null);
    try {
      const response = await uploadResume(jobId, formData);
      alert("Upload successful!");
      // Optionally: refresh candidate list here or update UI accordingly
    } catch (err) {
      setUploadError(err.message);
    } finally {
      setUploading(false);
    }
  };

  if (loading) return <p className="text-gray-400">Loading candidates...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="p-6 bg-[#222831] min-h-screen">
      <div className="flex items-center gap-2 mb-10">
        <img src="/src/assets/botImage.png" alt="logo" className="w-10 h-10" />
        <span className="text-2xl font-bold text-[#DFD0B8]">NEX.AI</span>
      </div>
      <h1 className="text-2xl font-bold mb-4 text-[#dfd0b8]">
        Shortlisted Students
      </h1>

      {/* Upload Resume Input */}
      <div className="mb-6">
        <label
          htmlFor="resume-upload"
          className="cursor-pointer bg-[#393e46] px-4 py-2 rounded-md text-[#DFD0B8] hover:bg-[#575c65]"
        >
          {uploading ? "Uploading..." : "Upload Resume(s)"}
        </label>
        <input
          type="file"
          id="resume-upload"
          multiple
          accept=".pdf,.doc,.docx"
          onChange={handleFileUpload}
          className="hidden"
          disabled={uploading}
        />
        {uploadError && (
          <p className="text-red-500 mt-2">Upload Error: {uploadError}</p>
        )}
      </div>

      <div className="grid gap-4">
        {candidates.length === 0 ? (
          <p className="text-gray-400">No candidates found for this job.</p>
        ) : (
          candidates.map((candidate, index) => (
            <div
              key={index}
              className="bg-[#393e46] shadow-md rounded-lg p-4 border border-[#948979] text-[#dfd0b8]"
            >
              <p>
                <strong>Name:</strong> {candidate.name}
              </p>
              <p>
                <strong>Email:</strong> {candidate.email}
              </p>
              <p>
                <strong>Contact:</strong> {candidate.contact}
              </p>
              <a
                href={candidate.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#948979] hover:underline"
              >
                View Resume
              </a>
              <div className="mt-2">
                <button
                  onClick={() => handleSendMail(candidate.email)}
                  className="bg-[#222831] text-white px-4 py-2 rounded hover:bg-[#948979] hover:text-[#222831] transition"
                >
                  Send Mail
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {candidates.length > 0 && (
        <div className="mt-6">
          <button
            onClick={handleSendMailToAll}
            className="border border-[#948979] text-white px-4 py-2 rounded-xl hover:bg-[#948979] hover:text-[#222831] transition"
          >
            Send Mail to All
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentList;
