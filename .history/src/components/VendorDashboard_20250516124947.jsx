// import React from "react";
// import { UserRound } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import useKpis from "../hooks/useKpis";

// const VendorDashboard = () => {
//   const navigate = useNavigate();
//   const { kpis, loading, error } = useKpis();

//   return (
//     <div className="min-h-screen bg-[#1e222a] text-[#DFD0B8] p-8">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-10">
//         <div className="flex items-center gap-3">
//           <img
//             src="/src/assets/botImage.png"
//             alt="logo"
//             className="w-12 h-12 object-contain"
//           />
//           <span className="text-3xl font-bold text-[#DFD0B8]">NEX.AI</span>
//         </div>
//         <div className="flex gap-10">
//           <button
//             className="border px-4 py-1 rounded-md"
//             onClick={() => navigate("/vendor-jobs")}
//           >
//             Jobs
//           </button>
//           <button className="border px-4 py-1 rounded-md">Student-List</button>
//         </div>
//         <div className="flex items-center gap-2 text-lg font-semibold">
//           Hi, Vendor
//           <UserRound className="w-6 h-6" />
//         </div>
//       </div>

//       {/* KPI boxes */}
//       <div className="flex justify-between items-start mt-10">
//         <div className="flex flex-col gap-6 w-72 mx-auto mt-10 ml-30">
//           <div className="border border-[#DFD0B8] p-6 text-center rounded-md">
//             <div className="text-sm mb-2">Active job listings</div>
//             <div className="text-3xl font-bold">
//               {loading ? (
//                 "Loading KPIs..."
//               ) : error ? (
//                 "Error loading KPIs"
//               ) : (
//                 kpis.activeListings
//               )}
//             </div>
//           </div>
//           <div className="border border-[#DFD0B8] p-6 text-center rounded-md">
//             <div className="text-sm mb-2">Total number of job openings posted</div>
//             <div className="text-3xl font-bold">
//               {loading ? (
//                 "Loading KPIs..."
//               ) : error ? (
//                 "Error loading KPIs"
//               ) : (
//                 kpis.totalJobsPosted
//               )}
//             </div>
//           </div>
//           <div className="border border-[#DFD0B8] p-6 text-center rounded-md">
//             <div className="text-sm mb-2">Number of candidates in the pipeline</div>
//             <div className="text-3xl font-bold">
//               {loading ? (
//                 "Loading KPIs..."
//               ) : error ? (
//                 "Error loading KPIs"
//               ) : (
//                 kpis.candidatesInPipeline
//               )}
//             </div>
//           </div>
//           <div className="border border-[#DFD0B8] p-6 text-center rounded-md">
//             <div className="text-sm mb-2">Applications processed</div>
//             <div className="text-3xl font-bold">
//               {loading ? (
//                 "Loading KPIs..."
//               ) : error ? (
//                 "Error loading KPIs"
//               ) : (
//                 kpis.applicationsProcessed
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="mr-5">
//           <img
//             src="/src/assets/1.png"
//             alt="Illustration"
//             className="max-w-md object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VendorDashboard;

import React, { useEffect, useState } from "react";
import { fetchKPIs } from "../services/kpiService";
import { UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VendorDashboard = () => {
  const navigate = useNavigate();
  const [kpis, setKpis] = useState({
    activeListings: 0,
    totalJobsPosted: 0,
    candidatesInPipeline: 0,
    applicationsProcessed: 0,
  });

  useEffect(() => {
    const loadKPIs = async () => {
      try {
        const data = await fetchKPIs();
        setKpis(data);
      } catch (error) {
        console.error("Failed to fetch KPIs:", error);
      }
    };
    loadKPIs();
  }, []);

  return (
    <div className="min-h-screen bg-[#1e222a] text-[#DFD0B8] p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-3">
          <img
            src="/src/assets/botImage.png"
            alt="logo"
            className="w-12 h-12 object-contain"
          />
          <span className="text-3xl font-bold text-[#DFD0B8]">NEX.AI</span>
        </div>

        <button
          className="border px-4 py-1 w-15 rounded-md"
          onClick={() => navigate("/vendor-jobs")}
        >
          Jobs
        </button>

        <div className="flex items-center gap-2 text-lg font-semibold">
          Hi, Vendor
          <UserRound className="w-6 h-6" />
        </div>
      </div>

      {/* KPI boxes */}
      <div className="flex justify-between items-start mt-10">
        <div className="flex flex-col gap-6 w-72 mx-auto mt-10 ml-30">
          <div className="border border-[#DFD0B8] p-6 text-center rounded-md">
            <div className="text-sm mb-2">Active job listings</div>
            <div className="text-3xl font-bold">{kpis.activeListings}</div>
          </div>
          <div className="border border-[#DFD0B8] p-6 text-center rounded-md">
            <div className="text-sm mb-2">
              Total number of job openings posted
            </div>
            <div className="text-3xl font-bold">{kpis.totalJobsPosted}</div>
          </div>
          <div className="border border-[#DFD0B8] p-6 text-center rounded-md">
            <div className="text-sm mb-2">
              Number of candidates in the pipeline
            </div>
            <div className="text-3xl font-bold">
              {kpis.candidatesInPipeline}
            </div>
          </div>
          <div className="border border-[#DFD0B8] p-6 text-center rounded-md">
            <div className="text-sm mb-2">Applications processed</div>
            <div className="text-3xl font-bold">
              {kpis.applicationsProcessed}
            </div>
          </div>
        </div>

        <div className="mr-5">
          <img
            src="/src/assets/1.png"
            alt="Illustration"
            className="max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
