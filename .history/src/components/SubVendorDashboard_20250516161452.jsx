import React, { useEffect, useState } from "react";

function SubVendorDashboard() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("subVendorJobs")) || [];
    setJobs(storedJobs);
    if (storedJobs.length > 0) {
      setSelectedJob(storedJobs[0]);
    }
  }, []);

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
        <h2 className="text-xl font-bold mb-4">Received Jobs</h2>
        {jobs.length === 0 ? (
          <p className="text-sm text-gray-300">No jobs received yet.</p>
        ) : (
          jobs.map((job) => (
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
          ))
        )}
      </div>

      {/* Right Panel */}
      <div className="bg-[#393e46] flex-1 p-5 px-15 justify-center items-center">
        {selectedJob ? (
          <div className="w-full bg-[#dfd0b8] mt-10 overflow-y-auto p-10 px-15 align-center rounded-lg shadow-lg">
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
          </div>
        ) : (
          <div className="text-[#dfd0b8] text-center mt-20 text-lg">
            No job selected.
          </div>
        )}
      </div>
    </div>
  );
}

export default SubVendorDashboard;
