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
//       {error && (
//         <div className="text-red-500 mb-4">Error loading jobs: {error}</div>
//       )}
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
//             <p>
//               <span className="font-semibold">Company:</span> {job.company}
//             </p>
//             <p>
//               <span className="font-semibold">Location:</span> {job.location}
//             </p>
//             <p>
//               <span className="font-semibold">Job Type:</span> {job.type}
//             </p>
//             <p>
//               <span className="font-semibold">Description:</span>{" "}
//               {job.description}
//             </p>

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

// import React from "react";
// import { useJobs } from "../hooks/useJobs";

// const VendorJobInbox = () => {
//   const { jobs, loading, error } = useJobs();

//   if (loading) return <p>Loading jobs...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Vendor Job Inbox</h2>
//       {jobs.length === 0 ? (
//         <p>No jobs available</p>
//       ) : (
//         <ul className="space-y-4">
//           {jobs.map((job, index) => (
//             <li key={job._id || index} className="border p-4 rounded shadow">
//               <h3 className="text-xl font-semibold">{job.job_title}</h3>
//               <p><strong>Organization:</strong> {job.organization_name}</p>
//               <p><strong>Email:</strong> {job.email}</p>
//               <p><strong>Posted:</strong> {new Date(job.posted_at).toLocaleString()}</p>
//               <p><strong>Description:</strong> {job.generated_jd}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default VendorJobInbox;

// import React, { useState } from "react";
// import { useJobs } from "../hooks/useJobs";
// import { useNavigate } from "react-router-dom";
// import { nav } from "framer-motion/client";

// const VendorJobInbox = () => {
//   const { jobs, loading, error } = useJobs();
//   const [selectedJob, setSelectedJob] = useState(null);
//   const navigate = useNavigate();
//   const handleSendToSubvendor = (id) => {};

//   const handleViewCandidates = (id) => {
//     navigate("/students", { state: { jobId: id } });
//   };

//   return (
//     <div className="min-h-screen bg-[#1e222a] text-[#DFD0B8] p-4 flex flex-col md:grid md:grid-cols-3 gap-4">
//       {/* Scrollable Sidebar */}
//       <div className="bg-[#2c2f36] p-4 rounded-lg shadow-md md:col-span-1 max-h-[40vh] md:max-h-[100vh] overflow-y-auto">
//         <h2 className="text-xl font-semibold mb-4 border-b border-[#393e46] pb-2">
//           Job Listings
//         </h2>

//         {loading && <p className="text-gray-400">Loading...</p>}
//         {error && <p className="text-red-500">Error: {error}</p>}
//         {!loading && !error && jobs.length === 0 && (
//           <p className="text-gray-400">No jobs found.</p>
//         )}

//         <ul className="space-y-3">
//           {jobs.map((job) => (
//             <li
//               key={job._id}
//               onClick={() => setSelectedJob(job)}
//               className={`p-3 rounded cursor-pointer hover:bg-[#393e46] ${
//                 selectedJob?._id === job._id ? "bg-[#393e46]" : ""
//               }`}
//             >
//               <p className="font-semibold">{job.job_title}</p>
//               <p className="text-sm text-gray-400">{job.organization_name}</p>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Job Detail Panel */}
//       <div className="md:col-span-2 bg-[#393e46] p-6 rounded-lg shadow-md flex-grow overflow-auto">
//         {selectedJob ? (
//           <>
//             <h2 className="text-2xl md:text-3xl font-bold mb-2">
//               {selectedJob.job_title}
//             </h2>
//             <p className="mb-1 text-sm md:text-base">
//               <span className="font-semibold">Organization:</span>{" "}
//               {selectedJob.organization_name}
//             </p>
//             <p className="mb-1 text-sm md:text-base">
//               <span className="font-semibold">Email:</span> {selectedJob.email}
//             </p>
//             <p className="mb-1 text-sm md:text-base">
//               <span className="font-semibold">Posted At:</span>{" "}
//               {new Date(selectedJob.posted_at).toLocaleString()}
//             </p>
//             <div className="mt-4 text-sm md:text-base">
//               <span className="font-semibold block mb-1 text-[#DFD0B8]">
//                 Description:
//               </span>
//               <ul className="list-disc pl-6 space-y-1 text-[#DFD0B8]">
//                 {selectedJob.generated_jd
//                   .split(/\.\s*|\n+/)
//                   .filter((line) => line.trim() !== "")
//                   .map((line, index) => (
//                     <li key={index}>{line.trim()}</li>
//                   ))}
//               </ul>
//             </div>

//             <div className="mt-6 flex flex-col sm:flex-row gap-4">
//               <button
//                 onClick={() => handleViewCandidates(selectedJob._id)}
//                 className="bg-[#1e222a] hover:bg-black text-[#DFD0B8] px-4 py-2 rounded-md w-full sm:w-auto"
//               >
//                 Candidate List
//               </button>
//               <button
//                 onClick={() => handleSendToSubvendor(selectedJob._id)}
//                 className="bg-[#1e222a] hover:bg-black text-[#DFD0B8] px-4 py-2 rounded-md w-full sm:w-auto"
//               >
//                 Send to Subvendor
//               </button>
//             </div>
//           </>
//         ) : (
//           <p className="text-gray-400 text-center md:text-left">
//             Select a job from the left panel to view details.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VendorJobInbox;

import React, { useState } from "react";
import { useJobs } from "../hooks/useJobs";
import { useNavigate } from "react-router-dom";

const VendorJobInbox = () => {
  const { jobs, loading, error } = useJobs();
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  const handleSendToSubvendor = (id) => {
    alert(`Send to subvendor clicked for job ID: ${id}`);
  };

  const handleViewCandidates = () => {
    navigate("/students");
  };
  const handleUpload = (id) => {
    console.log("Navigating with jobId:", id);
    navigate("/upload", { state: { jobId: id } });
  };

  return (
    <div className="min-h-screen bg-[#1e222a] text-[#DFD0B8] p-4 flex flex-col md:grid md:grid-cols-3 gap-4">
      {/* Sidebar */}
      <div className="bg-[#2c2f36] p-4 rounded-lg shadow-md md:col-span-1 max-h-[40vh] md:max-h-[100vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4 border-b border-[#393e46] pb-2">
          Job Listings
        </h2>

        {loading && <p className="text-gray-400">Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!loading && !error && jobs.length === 0 && (
          <p className="text-gray-400">No jobs found.</p>
        )}

        <ul className="space-y-3">
          {jobs.map((job) => (
            <li
              key={job._id}
              onClick={() => setSelectedJob(job)}
              className={`p-3 rounded cursor-pointer hover:bg-[#393e46] ${
                selectedJob?._id === job._id ? "bg-[#393e46]" : ""
              }`}
            >
              <p className="font-semibold">{job.job_title}</p>
              <p className="text-sm text-gray-400">{job.organization_name}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Job Details */}
      <div className="md:col-span-2 bg-[#393e46] p-6 rounded-lg shadow-md flex-grow overflow-auto">
        {selectedJob ? (
          <>
            {console.log(
              "Selected job before upload:",
              selectedJob.organization_name
            )}
            {console.log("Selected job before upload:", selectedJob._id)}
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {selectedJob.job_title}
            </h2>
            <p className="mb-1">
              <strong>Organization:</strong> {selectedJob.organization_name}
            </p>
            <p className="mb-1">
              <strong>Email:</strong> {selectedJob.email}
            </p>
            <p className="mb-1">
              <strong>Posted At:</strong>{" "}
              {new Date(selectedJob.posted_at).toLocaleString()}
            </p>

            <div className="mt-4">
              <h3 className="font-semibold mb-2 text-[#DFD0B8]">
                Description:
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                {selectedJob.generated_jd
                  .split(/\.\s*|\n+/)
                  .filter((line) => line.trim() !== "")
                  .map((line, idx) => (
                    <li key={idx}>{line.trim()}</li>
                  ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleViewCandidates(selectedJob._id)}
                className="bg-[#1e222a] hover:bg-black text-[#DFD0B8] px-4 py-2 rounded-md w-full sm:w-auto"
              >
                Candidate List
              </button>
              <button
                onClick={() => handleSendToSubvendor(selectedJob)}
                className="bg-[#1e222a] hover:bg-black text-[#DFD0B8] px-4 py-2 rounded-md w-full sm:w-auto"
              >
                Send to Subvendor
              </button>
              <button
                onClick={() => handleUpload(selectedJob._id)}
                className="bg-[#1e222a] hover:bg-black text-[#DFD0B8] px-4 py-2 rounded-md w-full sm:w-auto"
              >
                Upload Resumes
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-400 text-center md:text-left">
            Select a job from the left panel to view details.
          </p>
        )}
      </div>
    </div>
  );
};

export default VendorJobInbox;
