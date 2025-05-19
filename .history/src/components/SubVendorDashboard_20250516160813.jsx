import React, { useEffect, useState } from "react";

function SubVendorDashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("subVendorJobs")) || [];
    setJobs(storedJobs);
  }, []);

  return (
    <div className="min-h-screen bg-[#222831] text-[#dfd0b8] p-10">
      <h1 className="text-3xl font-bold mb-6">Sub Vendor Dashboard</h1>

      {jobs.length === 0 ? (
        <p>No jobs received yet.</p>
      ) : (
        jobs.map((job) => (
          <div
            key={job.id}
            className="bg-[#393e46] p-6 mb-6 rounded-lg shadow-md space-y-2"
          >
            <h2 className="text-2xl font-semibold">{job.title}</h2>
            <p>📅 Posted on: {job.datePosted}</p>
            <p>💰 CTC: {job.ctc}</p>
            <p>📍 Location: {job.location}</p>
            <p>📝 Overview: {job.overview}</p>
            <p>📄 Description: {job.description}</p>
            <p>✅ Criteria: {job.criteria}</p>
            <p>🎓 Eligible Courses: {job.eligibleCourses}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default SubVendorDashboard;
