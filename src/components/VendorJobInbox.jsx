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

import React, { useEffect, useState } from "react";

const VendorJobInbox = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedJobs = localStorage.getItem("companyJobs");
    if (storedJobs) {
      setJobs(JSON.parse(storedJobs));
    }
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Jobs Inbox</h2>
      {jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <ul className="space-y-4">
          {jobs.map((job, index) => (
            <li key={index} className="border p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.company} - {job.location}</p>
              <p className="mt-2">{job.description}</p>
              <p className="text-sm mt-1">Type: {job.type}</p>
              <p className="text-sm mt-1">Industry: {job.industry}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VendorJobInbox;
