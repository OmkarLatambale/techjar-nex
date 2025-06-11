import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const StudentList = () => {
  const location = useLocation();
  const jobId = location.state?.organizationName;
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          "https://ibot-backend.onrender.com/jobs/match-results/"
        );
        const data = response.data;

        // Optional: filter by jobId if needed
        const filtered = jobId
          ? data.filter((student) => student.job_id === String(jobId))
          : data;

        const formatted = filtered.map((item) => ({
          name: item.user_name,
          email: item.email,
          contact: item.phone_number,
          resume: item.interview_link || "#",
          organization_name: item.organization_name,
          match_score: item.match_score || "N/A",
          status: item.status || "N/A",
        }));

        setStudents(formatted);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch students");
        setLoading(false);
      }
    };

    fetchStudents();
  }, [jobId]);

  const handleSendMail = (email) => {
    alert(`Mail sent to ${email}`);
  };

  const handleSendMailToAll = () => {
    const allEmails = students.map((s) => s.email).join(", ");
    alert(`Mail sent to all: ${allEmails}`);
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

        <div className="flex gap-4">
          <button
            onClick={handleSendMailToAll}
            className="bg-[#393e46] px-4 py-2 rounded-md hover:bg-[#555]"
          >
            Send All
          </button>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {students.map((student, idx) => (
          <div
            key={idx}
            className="bg-[#2c2f36] p-4 rounded shadow-md overflow-auto flex-wrap"
          >
            <p className="font-bold text-lg">{student.name}</p>
            <p className="text-sm">Email: {student.email}</p>
            <p className="text-sm">Contact: {student.contact}</p>
            <p className="text-sm">
              Organization Name: {student.organization_name}
            </p>
            <p className="text-sm">
              Match Score: {student.match_score || "N/A"}
            </p>
            <p className="text-sm">Match Status: {student.status || "N/A"}</p>
            <button
              onClick={() => handleSendMail(student.email)}
              className="mt-2 bg-[#1e222a] text-[#DFD0B8] px-3 py-1 rounded hover:bg-black w-full"
            >
              Send Mail
            </button>
          </div>
        ))}
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* {students.map((student, idx) => (
          <div
            key={idx}
            className="bg-[#2c2f36] p-4 rounded shadow-md overflow-auto flex-wrap"
          >
            <p className="font-bold text-lg">{student.name}</p>
            <p className="text-sm">Email: {student.email}</p>
            <p className="text-sm">Contact: {student.contact}</p>
            <p className="text-sm">
              Organization Name: {student.organization_name}
            </p>
            <p className="text-sm">
              Match Score: {student.match_score || "N/A"}
            </p>
            <p className="text-sm">Match Status: {student.status || "N/A"}</p>
            <button
              onClick={() => handleSendMail(student.email)}
              className="mt-2 bg-[#1e222a] text-[#DFD0B8] px-3 py-1 rounded hover:bg-black w-full"
            >
              Send Mail
            </button>
          </div>
        ))} */}
        hello
      </div>
    </div>
  );
};

export default StudentList;
