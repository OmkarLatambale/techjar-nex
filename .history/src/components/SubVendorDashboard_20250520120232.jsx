import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { UserRound } from "lucide-react";

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

  // ✅ Remove job when marked completed
  const handleComplete = () => {
    const updatedJobs = jobs.filter((job) => job.id !== selectedJob.id);
    setJobs(updatedJobs);
    localStorage.setItem("subVendorJobs", JSON.stringify(updatedJobs));
    setSelectedJob(updatedJobs[0] || null);
    alert("Job marked as completed and removed.");
  };

  // ✅ Upload resume file
  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log(`Resume uploaded for job ID ${selectedJob.id}:`, file.name);
      alert(
        `Resume "${file.name}" uploaded successfully for job ID ${selectedJob.id}.`
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#1e222a] text-[#DFD0B8] p-8 overflow-x-hidden">
      <div className="flex justify-between items-center mb-10 animate-fade-in">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            src="/src/assets/botImage.png"
            alt="logo"
            className="w-12 h-12 object-contain"
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-[#DFD0B8]"
          >
            NEX.AI
          </motion.span>
        </div>

        {/* Right: Jobs + Vendor */}
        <div className="flex items-center gap-6">
          <div className="relative group">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex items-center gap-2 text-lg font-semibold cursor-pointer"
            >
              Hi, SUB-Vendor
              <UserRound className="w-6 h-6" />
            </motion.div>

            {/* Dropdown */}
            <div className="absolute right-0 mt-2 w-40 bg-[#2c2f36] text-[#DFD0B8] border border-[#DFD0B8] rounded-md shadow-md opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 invisible">
              <div
                onClick={() => {
                  // Replace with your actual logout logic
                  navigate("/login");
                }}
                className="px-4 py-2 hover:bg-[#3c4049] cursor-pointer"
              >
                Logout
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Left Panel */}
      <div>
        <div className="w-1/4 bg-[#393e46] text-white p-5 space-y-3 overflow-y-auto">
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

              {/* ✅ Action Buttons */}
              <div className="flex gap-4 mt-6">
                <button
                  onClick={handleComplete}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
                >
                  Completed
                </button>

                <label className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow cursor-pointer">
                  Upload Resume
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          ) : (
            <div className="text-[#dfd0b8] text-center mt-20 text-lg">
              No job selected.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SubVendorDashboard;
