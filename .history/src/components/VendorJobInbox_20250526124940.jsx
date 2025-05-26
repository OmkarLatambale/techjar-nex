// JobDashboard.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useJobs } from "../hooks/useJobs";
import { assignToSubVendor } from "../services/jobService";

function VendorJobInbox() {
  const { jobs, loading, error } = useJobs();
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (jobs.length > 0) {
      setSelectedJob(jobs[0]);
    }
  }, [jobs]);

  const handleAssignToSubVendor = async () => {
    try {
      await assignToSubVendor(selectedJob.id, "sub-vendor-123");
      navigate("/subvendor-list");
    } catch {
      alert("Failed to assign job to sub vendor");
    }
  };

  if (loading) return <div className="text-white p-5">Loading jobs...</div>;
  if (error) return <div className="text-red-500 p-5">Error: {error}</div>;

  return (
    <div className="flex h-screen font-sans">
      {/* Left Panel */}
      <div className="w-1/4 bg-[#393e46] text-white p-5 space-y-3 overflow-y-auto">
        <div className="flex items-center gap-2 mb-4">
          <img
            src="/src/assets/botImage.png"
            alt="logo"
            className="w-10 h-10"
          />
          <span className="text-2xl font-bold text-[#DFD0B8]">NEX.AI</span>
        </div>
        <h2 className="text-xl font-bold mb-4">Job List</h2>
        {jobs.map((job, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedJob(job)}
            className={`w-full text-left p-3 rounded-lg transition ${
              selectedJob?.job_title === job.job_title
                ? "bg-[#dfd0b8] text-[#222831]"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            <div className="font-semibold">{job.organization_name}</div>
            <div className="text-sm text-gray-300">{job.job_title}</div>
          </button>
        ))}
      </div>

      {/* Right Panel */}
      <div className="bg-[#393e46] flex-1 p-5 overflow-y-auto max-h-screen">
        {selectedJob && (
          <div className="w-full bg-[#dfd0b8] p-10 rounded-lg shadow-lg text-[#222831]">
            <h2 className="text-3xl font-bold mb-2">
              {selectedJob.organization_name}
            </h2>

            <div className="text-sm mb-4">
              📧 {selectedJob.email} &nbsp; | &nbsp; 📅{" "}
              {new Date(selectedJob.posted_at).toLocaleDateString()}
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Role: {selectedJob.job_title}
            </h3>

            <div className="mb-6">
              <strong>📝 Job Description:</strong>
              <p className="ml-2 mt-1">{selectedJob.generated_jd}</p>
            </div>

            <div className="flex gap-6">
              <button
                onClick={() => navigate("/students")}
                className="bg-[#393e46] text-[#dfd0b8] px-6 py-2 rounded hover:bg-[#494e57] transition"
              >
                Candidate-List
              </button>
              <button
                onClick={handleAssignToSubVendor}
                className="bg-[#393e46] text-[#dfd0b8] px-6 py-2 rounded hover:bg-[#494e57] transition"
              >
                Send to Sub Vendor
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VendorJobInbox;
