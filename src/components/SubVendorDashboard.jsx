import React, { useEffect, useState, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SubVendorDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const { auth } = useAuth();
  const navigate = useNavigate();
  const token = auth?.token;
  const hasFetched = useRef(false);

  useEffect(() => {
  if (!token || hasFetched.current) return;

  const fetchAssignedJobs = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/jobs/subvendor/jds/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const extractedJobs = response.data.map((item) => {
        const { id, job_title, posted_at, generated_jd } = item.jd_details;

        // Do NOT include organization_name, email, etc.
        return {
          id,
          job_title,
          posted_at,
          generated_jd,
          assignment_id: item.id,
        };
      });

      setJobs(extractedJobs);
      setSelectedJob(extractedJobs[0] || null);
    } catch (error) {
      console.error("Error fetching subvendor jobs", error);
    }
  };

  hasFetched.current = true;
  fetchAssignedJobs();
}, [token]);

  const handleResumeUpload = async (e) => {
    const files = e.target.files;
    if (!files.length || !selectedJob) return;

    const formData = new FormData();
    formData.append("jobId", selectedJob.id); // Use jobId not job_id

    for (let i = 0; i < files.length; i++) {
      formData.append("resumes", files[i]); // Don't use resumes[]
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/jobs/subvendor/upload-resumes/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.detail || "Upload failed");
      }

      alert("Upload successful");
    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload failed: " + err.message);
    }
  };

  const handleViewCandidates = () => {
    if (selectedJob?.id) {
      navigate("/sub-students", { state: { jobId: selectedJob.id } });
    }
  };

  return (
    <div className="flex h-screen bg-[#222831] text-white">
      {/* Sidebar: Jobs */}
      <aside className="w-1/4 bg-[#393e46] p-5 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Assigned Jobs</h2>
        {jobs.length === 0 ? (
          <p>No jobs assigned yet.</p>
        ) : (
          jobs.map((job, index) => (
            <button
              key={index}
              onClick={() => setSelectedJob(job)}
              className={`block w-full text-left p-2 rounded mb-2 ${
                selectedJob?.id === job.id
                  ? "bg-[#dfd0b8] text-black"
                  : "bg-gray-700"
              }`}
            >
              Job {index + 1}
            </button>
          ))
        )}
      </aside>

      {/* Main Content: Job Details */}
      <main className="flex-1 p-8 overflow-y-auto">
        {selectedJob ? (
          <div className="bg-[#dfd0b8] text-black p-6 rounded shadow-md">
            <h2 className="text-xl font-bold">{selectedJob.job_title}</h2>
            <p className="mt-2">
              📅 Posted At: {new Date(selectedJob.posted_at).toLocaleString()}
            </p>
            <p className="mt-2">📄 Description: {selectedJob.generated_jd}</p>

            <div className="flex gap-4 mt-6 flex-wrap">
              <label className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
                Upload Resumes
                <input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={handleResumeUpload}
                />
              </label>

              <button
                onClick={handleViewCandidates}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                View Candidates
              </button>
            </div>
          </div>
        ) : (
          <p>No job selected.</p>
        )}
      </main>
    </div>
  );
};

export default SubVendorDashboard;
