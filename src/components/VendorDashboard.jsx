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
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const VendorDashboard = () => {
  const navigate = useNavigate();

  const [kpis, setKpis] = useState({
    active_job_listings: 0,
    total_job_openings: 0,
    candidates_in_pipeline: 0,
    applications_processed: 0,
  });

  const [showModal, setShowModal] = useState(false);
  const [subvendor, setSubvendor] = useState({
    name: "",
    email: "",
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

  const handleInputChange = (e) => {
    setSubvendor({ ...subvendor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subvendor submitted:", subvendor);
    // Add your backend submission logic here
    setShowModal(false);
    setSubvendor({ name: "", email: "" });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  };

  return (
    <div className="min-h-screen bg-[#1e222a] text-[#DFD0B8] p-4 sm:p-8 overflow-x-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-10 animate-fade-in gap-4 sm:gap-0">
        <div className="flex items-center gap-3">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            src="/assets/botImage.png"
            alt="logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-3xl font-bold text-[#DFD0B8]"
          >
            NEX.AI
          </motion.span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border px-3 py-1 rounded-md w-28 sm:w-36 cursor-pointer hover:bg-[#DFD0B8] hover:text-[#1e222a] transition text-sm sm:text-base"
            onClick={() => navigate("/vendor-jobs")}
          >
            Jobs
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border px-3 py-1 rounded-md w-28 sm:w-36 cursor-pointer hover:bg-[#DFD0B8] hover:text-[#1e222a] transition text-sm sm:text-base"
            onClick={() => navigate("/vendor-reports")}
          >
            Reports
          </motion.button>

          {/* New: Add Subvendor */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border px-3 py-1 rounded-md w-28 sm:w-36 cursor-pointer hover:bg-[#DFD0B8] hover:text-[#1e222a] transition text-sm sm:text-base"
            onClick={() => setShowModal(true)}
          >
            Add Subvendor
          </motion.button>

          {/* User Dropdown */}
          <div className="relative group">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex items-center gap-1 sm:gap-2 text-base sm:text-lg font-semibold cursor-pointer select-none"
            >
              Hi, Vendor
              <UserRound className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>

            <div className="absolute right-0 mt-2 bg-[#2c2f36] text-[#DFD0B8] border border-[#DFD0B8] rounded-md shadow-md opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 invisible">
              <div
                onClick={() => navigate("/login")}
                className="text-center text-sm px-3 py-1 hover:bg-[#3c4049] cursor-pointer w-full"
              >
                Logout
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="flex justify-between items-start mt-10 flex-wrap gap-10">
        <div className="flex flex-col gap-6 w-72 mx-auto">
          {[
            { label: "Active job listings", value: kpis.active_job_listings },
            { label: "Total number of job openings posted", value: kpis.total_job_openings },
            { label: "Number of candidates in the pipeline", value: kpis.candidates_in_pipeline },
            { label: "Applications processed", value: kpis.applications_processed },
          ].map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="border border-[#DFD0B8] p-5 sm:p-6 text-center rounded-md hover:shadow-xl hover:scale-105 transition-all duration-300 bg-[#2c303a] backdrop-blur-md w-full"
              style={{
                boxShadow: "0 0 12px rgba(223, 208, 184, 0.3)",
              }}
            >
              <div className="text-xs sm:text-sm mb-2">{item.label}</div>
              <div className="text-2xl sm:text-3xl font-bold">{item.value}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full lg:w-1/2 max-w-md"
        >
          <img
            src="/assets/1.png"
            alt="Illustration"
            className="w-full object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>

      {/* Subvendor Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#2c2f36] border border-[#DFD0B8] rounded-lg p-6 w-96 relative">
            <h2 className="text-lg font-bold mb-4 text-center">Add Subvendor</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={subvendor.name}
                onChange={handleInputChange}
                placeholder="Subvendor Name"
                required
                className="p-2 rounded bg-[#1e222a] text-[#DFD0B8] border border-[#DFD0B8]"
              />
              <input
                type="email"
                name="email"
                value={subvendor.email}
                onChange={handleInputChange}
                placeholder="Subvendor Email"
                required
                className="p-2 rounded bg-[#1e222a] text-[#DFD0B8] border border-[#DFD0B8]"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded bg-gray-600 text-white hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-[#DFD0B8] text-[#1e222a] hover:bg-[#c0ae92]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorDashboard;
