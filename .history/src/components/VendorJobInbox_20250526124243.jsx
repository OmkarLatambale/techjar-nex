import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useJobs } from "../hooks/useJobs";
import { assignToSubVendor } from "../services/jobService";

function JobDashboard() {
  const { jobs, loading, error } = useJobs();
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (jobs.length > 0) {
      setSelectedJob(jobs[0]); // default select first job when loaded
    }
  }, [jobs]);

  const handleAssignToSubVendor = async () => {
    try {
      await assignToSubVendor(selectedJob.id, "sub-vendor-123"); // Use actual subVendorId from context or state
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
        <div className="flex items-center gap-2">
          <img
            src="/src/assets/botImage.png"
            alt="logo"
            className="w-10 h-10"
          />
          <span className="text-2xl font-bold text-[#DFD0B8]">NEX.AI</span>
        </div>
        <h2 className="text-xl font-bold mb-4">Job List</h2>
        {jobs.map((job) => (
          <button
            key={job.id}
            onClick={() => setSelectedJob(job)}
            className={`w-full text-left p-3 rounded-lg transition ${
              selectedJob?.id === job.id
                ? "bg-[#dfd0b8] text-[#222831]"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            {job.title}
          </button>
        ))}
      </div>

      {/* Right Panel */}
      <div className="bg-[#393e46] flex-1 p-5 overflow-y-auto max-h-screen">
        {selectedJob && (
          <div className="w-full bg-[#dfd0b8] p-10 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-[#222831] mb-2">
              {selectedJob.title}
            </h2>
            <div className="text-sm text-[#222831] mb-4">
              📅 Posted on: {selectedJob.datePosted}
            </div>

            <div className="mb-3">
              <strong>💰 CTC:</strong> {selectedJob.ctc}
            </div>

            <div className="mb-3">
              <strong>📍 Location:</strong> {selectedJob.location}
            </div>

            <div className="mb-3">
              <strong>🛠️ Skills:</strong> {selectedJob.skills.join(", ")}
            </div>

            <div className="mb-3">
              <strong>📝 Overview:</strong>
              <p className="ml-2 text-[#222831]">{selectedJob.overview}</p>
            </div>

            <div className="mb-3">
              <strong>📄 Description:</strong>
              <p className="ml-2 text-[#222831]">{selectedJob.description}</p>
            </div>

            <div className="mb-3">
              <strong>✅ Criteria:</strong>
              <p className="ml-2 text-[#222831]">{selectedJob.criteria}</p>
            </div>

            <div className="mb-6">
              <strong>🎓 Eligible Courses:</strong>
              <p className="ml-2 text-[#222831]">
                {selectedJob.eligibleCourses}
              </p>
            </div>

            <div className="flex gap-8">
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
                Send to sub vendor
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobDashboard;
