import React, { useState, useNavigate } from "react";
import { useFileUpload } from "../hooks/useFileUpload";

const [selectedFiles, setSelectedFiles] = useState([]);
const { handleUpload, status, loading } = useFileUpload();

const navigate = useNavigate();
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
function upload() {
  return (
    <div className="p-4 border rounded w-full max-w-md mx-auto">
      <input type="file" multiple onChange={handleFileChange} />
      <button
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={onSubmit}
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>

      {status && <p className="mt-2 text-sm">{status}</p>}
    </div>
  );
}

export default upload;
