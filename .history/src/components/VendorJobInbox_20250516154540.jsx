// import React, { useState } from "react";
// import { useJobs } from "../hooks/useJobs";

// const VendorJobInbox = () => {
//   const { jobs, loading, error } = useJobs();
//   const [selectedJobId, setSelectedJobId] = useState(null);

//   const handleConfirm = (id) => {
//     alert(`Job ID ${id} confirmed for portal.`);
//     // TODO: Call API to update job status if needed
//   };

//   const handleReject = (id) => {
//     alert(`Job ID ${id} rejected.`);
//     // TODO: Call API to update job status or remove job
//   };

//   const handleAssign = (id) => {
//     alert(`Job ID ${id} assigned to subvendor.`);
//     // TODO: Call API to assign job to subvendor
//   };

//   return (
//     <div className="min-h-screen bg-[#1e222a] text-[#DFD0B8] p-8">
//       <h1 className="text-3xl font-bold text-[#DFD0B8] mb-6 border-b-2 border-[#393e46] pb-2">
//         Posted Jobs
//       </h1>

//       {loading && <div className="text-gray-400 mb-4">Loading jobs...</div>}
//       {error && <div className="text-red-500 mb-4">Error loading jobs: {error}</div>}
//       {!loading && !error && jobs.length === 0 && (
//         <div className="text-gray-400">No jobs posted yet.</div>
//       )}

//       <div className="grid gap-6">
//         {jobs.map((job) => (
//           <div
//             key={job.id}
//             className="bg-[#393e46] text-[#DFD0B8] p-6 rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer"
//             onClick={() =>
//               setSelectedJobId((prev) => (prev === job.id ? null : job.id))
//             }
//           >
//             <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
//             <p><span className="font-semibold">Company:</span> {job.company}</p>
//             <p><span className="font-semibold">Location:</span> {job.location}</p>
//             <p><span className="font-semibold">Job Type:</span> {job.type}</p>
//             <p><span className="font-semibold">Description:</span> {job.description}</p>

//             <div className="mt-2">
//               <p className="font-semibold">Eligible Courses:</p>
//               <ul className="list-disc list-inside text-sm">
//                 {job.responsibilities?.map((item, index) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </ul>
//             </div>

//             <div className="mt-2">
//               <p className="font-semibold">Eligibility Criteria:</p>
//               <ul className="list-disc list-inside text-sm">
//                 {job.requirements?.map((item, index) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </ul>
//             </div>

//             {selectedJobId === job.id && (
//               <div className="flex flex-col sm:flex-row gap-4 mt-6">
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleConfirm(job.id);
//                   }}
//                   className="bg-[#1e222a] hover:bg-black text-[#DFD0B8] px-4 py-2 rounded-md transition"
//                 >
//                   Confirm Job
//                 </button>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleReject(job.id);
//                   }}
//                   className="bg-[#1e222a] hover:bg-black text-[#DFD0B8] px-4 py-2 rounded-md transition"
//                 >
//                   Reject Job
//                 </button>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleAssign(job.id);
//                   }}
//                   className="bg-[#1e222a] hover:bg-black text-[#DFD0B8] px-4 py-2 rounded-md transition"
//                 >
//                   Assign to Subvendor
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VendorJobInbox;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const jobData = [
  {
    id: 1,
    title: "Software Engineer - NexAI",
    ctc: "6 LPA",
    overview: "Exciting opportunity to work with AI-powered platforms.",
    description:
      "You will be working on cutting-edge technologies to automate interviews using AI. You’ll collaborate with cross-functional teams and vendors.",
    criteria: "Minimum 60% in 10th, 12th, and Graduation. No active backlogs.",
    eligibleCourses: "B.E / B.Tech (CSE, IT, ECE), MCA",
    location: "Bangalore, India",
    datePosted: "May 10, 2025",
  },
  {
    id: 2,
    title: "Backend Developer - TechNova",
    ctc: "8 LPA",
    overview: "Build scalable backend APIs for enterprise applications.",
    description:
      "Hands-on experience with Node.js, Express, MongoDB, and RESTful services. Should have built production-grade apps.",
    criteria: "Above 65% aggregate. No history of arrears.",
    eligibleCourses: "B.E / B.Tech (All branches), M.Sc CS, MCA",
    location: "Remote",
    datePosted: "May 12, 2025",
  },
  {
    id: 3,
    title: "Data Analyst - FinScope",
    ctc: "5 LPA",
    overview: "Analyze market trends and help shape financial strategies.",
    description:
      "Required strong skills in Python, SQL, Excel, and PowerBI. Should be comfortable working with large datasets.",
    criteria: "Min. 70% throughout academics.",
    eligibleCourses: "B.Sc Statistics, B.Com, BBA, MBA",
    location: "Mumbai, India",
    datePosted: "May 8, 2025",
  },
];

function JobDashboard() {
  const [selectedJob, setSelectedJob] = useState(jobData[0]);
  const navigate = useNavigate();
  return (
    <>
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
          {jobData.map((job) => (
            <button
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className={`w-full text-left p-3 rounded-lg transition ${
                selectedJob.id === job.id
                  ? "bg-[#dfd0b8] text-[#222831]"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {job.title}
            </button>
          ))}
        </div>

        {/* Right Panel */}
        <div className="bg-[#393e46]">
          <div className="w-3/4 bg-[#dfd0b8] overflow-y-auto p-10 px-15">
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

            <div className="flex gap-8">
              <button
                onClick={() => {
                  navigate("/students");
                }}
                className="cursor-pointer bg-[#393e46] cursor-pointer text-[#dfd0b8] px-6 py-2 rounded hover:bg-[#393e46] hover:text-[#dfd0b8] transition"
              >
                Candidate-List
              </button>
              <button className="bg-[#393e46] text-[#dfd0b8] px-6 py-2 rounded hover:bg-[#393e46] hover:text-[#dfd0b8] transition">
                Send to sub vendor
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default JobDashboard;
