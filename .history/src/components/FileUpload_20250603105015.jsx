// components/FileUpload.jsx

import React, { useState } from "react";
import { useFileUpload } from "../hooks/useFileUpload";
import { useLocation } from "react-router-dom";

function FileUpload() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { handleUpload, status, loading } = useFileUpload();
  const location = useLocation();
  const jobId = location.state?.jobId;

  const [selectedFiles, setSelectedFiles] = useState([]);
  const { handleUpload, status, loading } = useFileUpload();

  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files));
  };

  const onSubmit = () => {
    if (!jobId) {
      alert("Job ID not found. Please navigate properly.");
      return;
    }

    if (selectedFiles.length > 0) {
      handleUpload(selectedFiles, jobId); // Pass jobId to hook
    } else {
      alert("Please select a file to upload");
    }
  };

  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files));
  };

  const onSubmit = () => {
    if (selectedFiles.length > 0) {
      handleUpload(selectedFiles);
    } else {
      alert("Please select a file to upload");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#222831] p-4">
      <div className="bg-[#dfd0b8] shadow-md rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4 text-center text-[#222831]">
          Upload Resume
        </h2>

        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="w-full mb-4 border border-[#948979] p-2 rounded"
        />

        <button
          onClick={onSubmit}
          disabled={loading}
          className={`w-full py-2 rounded text-[#222831] font-semibold transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-transparent  border border-[#948979] hover:bg-[#222831] hover:text-[#dfd0b8]"
          }`}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>

        {status && (
          <p className="mt-4 text-sm text-center text-green-700 font-medium">
            {status}
          </p>
        )}

        {selectedFiles.length > 0 && (
          <ul className="mt-4 text-sm text-gray-700 list-disc list-inside">
            {selectedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default FileUpload;
