// import { nav } from "framer-motion/client";
// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const students = [
//   {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     contact: "9876543210",
//     resume: "https://example.com/resume/john",
//   },
//   {
//     name: "Jane Smith",
//     email: "jane.smith@example.com",
//     contact: "9876543211",
//     resume: "https://example.com/resume/jane",
//   },
//   {
//     name: "Amit Kumar",
//     email: "amit.kumar@example.com",
//     contact: "9876543212",
//     resume: "https://example.com/resume/amit",
//   },
// ];

// const handleSendMail = (email) => {
//   alert(`Mail sent to ${email}`);
// };

// const handleSendMailToAll = () => {
//   const allEmails = students.map((student) => student.email).join(", ");
//   alert(`Mail sent to all: ${allEmails}`);
// };

// function StudentList() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const jobId = location.state?.jobId;

//   const handleupload = (jobId) => {
//     if (!jobId) {
//       alert("Job ID not found. Please navigate properly.");
//       return;
//     }
//     navigate("/upload", { state: { jobId } });
//   };
//   return (
//     <div className="p-6 bg-[#222831]">
//       <div className="flex items-center justify-between mb-10">
//         {/* Left side: logo + title */}
//         <div className="flex items-center gap-2">
//           <img src="/assets/botImage.png" alt="logo" className="w-10 h-10" />
//           <span className="text-2xl font-bold text-[#DFD0B8]">NEX.AI</span>
//         </div>

//         {/* Right side: upload button */}
//         <div>
//           <button
//             onClick={handleupload}
//             className="px-4 py-2 bg-[#DFD0B8] text-black rounded hover:bg-[#cbbda3]"
//           >
//             Upload
//           </button>
//         </div>
//       </div>

//       <h1 className="text-2xl font-bold mb-4 text-[#dfd0b8]">
//         Shortlisted Students
//       </h1>
//       <div className="grid gap-4">
//         {students.map((student, index) => (
//           <div
//             key={index}
//             className="bg-[#393e46] shadow-md rounded-lg p-4 border border-[#948979] text-[#dfd0b8]"
//           >
//             <p>
//               <strong>Name:</strong> {student.name}
//             </p>
//             <p>
//               <strong>Email:</strong> {student.email}
//             </p>
//             <p>
//               <strong>Contact:</strong> {student.contact}
//             </p>
//             <a
//               href={student.resume}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[#948979] hover:underline"
//             >
//               View Resume
//             </a>
//             <div className="mt-2">
//               <button
//                 onClick={() => handleSendMail(student.email)}
//                 className="bg-[#222831] text-white px-4 py-2 rounded hover:bg-[#948979] hover:text-[#222831] transition"
//               >
//                 Send Mail
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="mt-6">
//         <button
//           onClick={handleSendMailToAll}
//           className="border border-[#948979] text-white px-4 py-2 rounded-xl hover:bg-[#948979] hover:text-[#222831] transition"
//         >
//           Send Mail to All
//         </button>
//       </div>
//     </div>
//   );
// }
// export default StudentList;
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const StudentList = () => {
  const location = useLocation();
  const jobId = location.state?.jobId;
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
          resume: item.interview_link || "#", // fallback if no resume
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
            Send All Mail
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {students.map((student, idx) => (
          <div key={idx} className="bg-[#2c2f36] p-4 rounded shadow-md">
            <p className="font-bold text-lg">{student.name}</p>
            <p className="text-sm">Email: {student.email}</p>
            <p className="text-sm">Contact: {student.contact}</p>
            <p className="text-sm">
              Organization Name: {student.organization_name}
            </p>
            <p className="text-sm">
              Match Score: {student.match_score || "N/A"}
            </p>
            <p className="text-sm">
              Match Score: {student.match_score || "N/A"}
            </p>
            <p className="text-sm flex-wrap">
              Interview Link: {student.resume || "N/A"}
            </p>

            <a
              href={student.resume}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 text-sm underline block mt-1"
            >
              View Resume
            </a>
            <button
              onClick={() => handleSendMail(student.email)}
              className="mt-2 bg-[#1e222a] text-[#DFD0B8] px-3 py-1 rounded hover:bg-black w-full"
            >
              Send Mail
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
