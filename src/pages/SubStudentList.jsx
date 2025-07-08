// src/pages/SubStudentList.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SubStudentList = () => {
  const location = useLocation();
  const jobId = location.state?.jobId;
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchShortlistedStudents = async () => {
      if (!jobId) return;
      try {
        const response = await axios.get(
          `${API_URL}/jobs/subvendor/shortlisted/${jobId}/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const formatted = response.data.map((item) => ({
          id: item.id,
          name: item.user_name,
          email: item.email,
          contact: item.phone_number,
          interview_link: item.interview_link || "Not available",
          match_score: item.match_score || "N/A",
          status: item.status || "N/A",
        }));

        setStudents(formatted);
        setError("");
      } catch (err) {
        console.error("Failed to fetch shortlisted students", err);
        setError("Failed to fetch students");
      } finally {
        setLoading(false);
      }
    };

    fetchShortlistedStudents();
  }, [jobId, API_URL, token]);

  const handleCopy = (link) => {
    navigator.clipboard.writeText(link);
    alert("Interview link copied to clipboard!");
  };

  if (loading) return <div className="text-white p-6">Loading students...</div>;
  if (error) return <div className="text-red-400 p-6">{error}</div>;

  return (
    <div className="min-h-screen p-6 bg-[#222831] text-[#DFD0B8]">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-2">
          <img src="/assets/botImage.png" alt="logo" className="w-10 h-10" />
          <span className="text-2xl font-bold">NEX.AI</span>
        </div>
        <div className="text-sm text-gray-400">
          Job ID: <span className="text-[#DFD0B8] font-semibold">{jobId}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {students.map((student, idx) => (
          <div
            key={idx}
            className="bg-[#2c2f36] p-4 rounded shadow-md overflow-auto"
          >
            <p className="font-bold text-lg">{student.name}</p>
            <p className="text-sm">Email: {student.email}</p>
            <p className="text-sm">Contact: {student.contact}</p>
            <p className="text-sm">Match Score: {student.match_score}</p>
            <p className="text-sm">Status: {student.status}</p>

            {student.interview_link !== "Not available" ? (
              <div className="mt-3 text-sm break-all">
                <p className="text-[#DFD0B8] font-semibold mb-1">Interview Link:</p>
                <div className="bg-[#393e46] px-2 py-1 rounded">
                  <span>{student.interview_link}</span>
                  <button
                    className="ml-2 bg-blue-500 text-white px-2 py-0.5 rounded text-xs hover:bg-blue-600"
                    onClick={() => handleCopy(student.interview_link)}
                  >
                    Copy
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-yellow-400 mt-2 text-sm">No interview link available.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubStudentList;
