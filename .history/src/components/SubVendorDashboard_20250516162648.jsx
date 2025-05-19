import React, { useState, useEffect } from "react";

const SubVendorDashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const subVendorJobs =
      JSON.parse(localStorage.getItem("subVendorJobs")) || [];
    setJobs(subVendorJobs);
  }, []);

  // ✅ Handler to remove job when marked completed
  const handleComplete = (jobId) => {
    const updatedJobs = jobs.filter((job) => job.id !== jobId);
    setJobs(updatedJobs);
    localStorage.setItem("subVendorJobs", JSON.stringify(updatedJobs));
    alert("Job marked as completed and removed.");
  };

  // ✅ Handler to upload resume
  const handleResumeUpload = (e, jobId) => {
    const file = e.target.files[0];
    if (file) {
      console.log(`Resume uploaded for job ID ${jobId}:`, file.name);

      // Optional: Store file info in localStorage if needed
      alert(`Resume "${file.name}" uploaded successfully for job ID ${jobId}.`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">
          Sub Vendor Dashboard
        </h1>

        {jobs.length === 0 ? (
          <p className="text-center text-gray-600">No jobs received yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded shadow">
                <h3 className="text-xl font-semibold mb-2">{job.jobTitle}</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Company:</strong> {job.companyName}
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Location:</strong> {job.location}
                </p>

                <div className="flex gap-4">
                  {/* ✅ Completed Button */}
                  <button
                    onClick={() => handleComplete(job.id)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Completed
                  </button>

                  {/* ✅ Upload Resume Button */}
                  <label className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
                    Upload Resume
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleResumeUpload(e, job.id)}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubVendorDashboard;
