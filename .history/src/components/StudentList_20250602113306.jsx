import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const StudentList = () => {
  const query = useQuery();
  const jobId = query.get("jobId");

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch students for jobId on mount
  useEffect(() => {
    if (!jobId) return;
    setLoading(true);
    fetch(`https://ibot-backend.onrender.com/jobs/jdresponse/?jobId=${jobId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch students");
        return res.json();
      })
      .then((data) => {
        setStudents(data.students || []); // Adjust this depending on your API response structure
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [jobId]);

  const handleSendMail = (email) => {
    alert(`Mail sent to ${email}`);
  };

  const handleSendMailToAll = () => {
    const allEmails = students.map((student) => student.email).join(", ");
    alert(`Mail sent to all: ${allEmails}`);
  };

  // Handle single or multiple resume uploads
  const handleFileUpload = async (event) => {
    if (!jobId) {
      alert("No Job ID provided!");
      return;
    }
    const files = event.target.files;
    if (!files.length) return;

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("jobId", jobId);
    // Append all files to formData
    for (let i = 0; i < files.length; i++) {
      formData.append("resumes", files[i]); // Assuming your backend expects 'resumes' field for files
    }

    try {
      const res = await fetch(
        "https://ibot-backend.onrender.com/jobs/jdresponse/",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        const errMsg = await res.text();
        throw new Error(errMsg || "Upload failed");
      }

      const data = await res.json();

      // Assuming API responds with updated students list
      setStudents(data.students || []);
      alert("Resumes uploaded successfully!");
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
      event.target.value = null; // Reset file input
    }
  };

  return (
    <div className="p-6 bg-[#222831] min-h-screen">
      <div className="flex items-center gap-2 mb-10">
        <img src="/src/assets/botImage.png" alt="logo" className="w-10 h-10" />
        <span className="text-2xl font-bold text-[#DFD0B8]">NEX.AI</span>
      </div>

      <h1 className="text-2xl font-bold mb-4 text-[#dfd0b8]">
        Shortlisted Students
      </h1>

      <div className="mb-6">
        <label
          htmlFor="upload-resume"
          className="cursor-pointer bg-[#1e222a] text-[#DFD0B8] px-4 py-2 rounded hover:bg-black transition"
        >
          {uploading ? "Uploading..." : "Upload Resume(s)"}
        </label>
        <input
          id="upload-resume"
          type="file"
          accept=".pdf,.doc,.docx"
          multiple
          className="hidden"
          onChange={handleFileUpload}
          disabled={uploading}
        />
      </div>

      {loading && <p className="text-gray-400">Loading students...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && students.length === 0 && (
        <p className="text-gray-400">No students found for this job.</p>
      )}

      <div className="grid gap-4">
        {students.map((student, index) => (
          <div
            key={index}
            className="bg-[#393e46] shadow-md rounded-lg p-4 border border-[#948979] text-[#dfd0b8]"
          >
            <p>
              <strong>Name:</strong> {student.name}
            </p>
            <p>
              <strong>Email:</strong> {student.email}
            </p>
            <p>
              <strong>Contact:</strong> {student.contact}
            </p>
            <a
              href={student.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#948979] hover:underline"
            >
              View Resume
            </a>
            <div className="mt-2">
              <button
                onClick={() => handleSendMail(student.email)}
                className="bg-[#222831] text-white px-4 py-2 rounded hover:bg-[#948979] hover:text-[#222831] transition"
              >
                Send Mail
              </button>
            </div>
          </div>
        ))}
      </div>

      {students.length > 0 && (
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
