// import React from "react";

// const subVendors = [
//   {
//     name: "Alpha Recruiters",
//     email: "alpha@recruit.com",
//     contact: "9012345678",
//   },
//   {
//     name: "TalentBridge",
//     email: "bridge@talent.com",
//     contact: "9123456789",
//   },
//   {
//     name: "CareerHub",
//     email: "career@hub.com",
//     contact: "9234567890",
//   },
// ];

// const handleAssignJob = (email) => {
//   alert(`Job assigned to ${email}`);
// };

// const handleAssignToAll = () => {
//   const allEmails = subVendors.map((vendor) => vendor.email).join(", ");
//   alert(`Job assigned to all: ${allEmails}`);
// };

// function SubVendorList() {
//   return (
//     <div className="p-6 bg-[#222831]">
//       <div className="flex items-center gap-2 mb-10">
//         <img src="/assets/botImage.png" alt="logo" className="w-10 h-10" />
//         <span className="text-2xl font-bold text-[#DFD0B8]">NEX.AI</span>
//       </div>
//       <h1 className="text-2xl font-bold mb-4 text-[#dfd0b8]">Sub Vendors</h1>
//       <div className="grid gap-4">
//         {subVendors.map((vendor, index) => (
//           <div
//             key={index}
//             className="bg-[#393e46] shadow-md rounded-lg p-4 border border-[#948979] text-[#dfd0b8]"
//           >
//             <p>
//               <strong>Name:</strong> {vendor.name}
//             </p>
//             <p>
//               <strong>Email:</strong> {vendor.email}
//             </p>
//             <p>
//               <strong>Contact:</strong> {vendor.contact}
//             </p>
//             <div className="mt-2">
//               <button
//                 onClick={() => handleAssignJob(vendor.email)}
//                 className="bg-[#222831] text-white px-4 py-2 rounded hover:bg-[#948979] hover:text-[#222831] transition"
//               >
//                 Assign Job
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="mt-6">
//         <button
//           onClick={handleAssignToAll}
//           className="border border-[#948979] text-white px-4 py-2 rounded-xl hover:bg-[#948979] hover:text-[#222831] transition"
//         >
//           Assign Job To All
//         </button>
//       </div>
//     </div>
//   );
// }

// export default SubVendorList;

import React, { useEffect, useState } from "react";
import axios from "axios";

function SubVendorList() {
  const [subVendors, setSubVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleAssignJob = (email) => {
    alert(`Job assigned to ${email}`);
  };

  const handleAssignToAll = () => {
    const allEmails = subVendors.map((vendor) => vendor.email).join(", ");
    alert(`Job assigned to all: ${allEmails}`);
  };

  useEffect(() => {
    const fetchSubVendors = async () => {
      try {
        const response = await axios.get(
          "https://ibot-backend.onrender.com/api/subvendors/"
        );
        setSubVendors(response.data);
      } catch (err) {
        console.error("Error fetching subvendors:", err);
        setError("Failed to load sub vendors.");
      } finally {
        setLoading(false);
      }
    };

    fetchSubVendors();
  }, []);

  return (
    <div className="p-6 bg-[#222831] min-h-screen">
      <div className="flex items-center gap-2 mb-10">
        <img src="/assets/botImage.png" alt="logo" className="w-10 h-10" />
        <span className="text-2xl font-bold text-[#DFD0B8]">NEX.AI</span>
      </div>

      <h1 className="text-2xl font-bold mb-4 text-[#dfd0b8]">Sub Vendors</h1>

      {loading && <p className="text-[#dfd0b8]">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <>
          <div className="grid gap-4">
            {subVendors.map((vendor, index) => (
              <div
                key={index}
                className="bg-[#393e46] shadow-md rounded-lg p-4 border border-[#948979] text-[#dfd0b8]"
              >
                <p>
                  <strong>Email:</strong> {vendor.email}
                </p>
                <p>
                  <strong>Role:</strong> {vendor.role}
                </p>
                <div className="mt-2">
                  <button
                    onClick={() => handleAssignJob(vendor.email)}
                    className="bg-[#222831] text-white px-4 py-2 rounded hover:bg-[#948979] hover:text-[#222831] transition"
                  >
                    Assign Job
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <button
              onClick={handleAssignToAll}
              className="border border-[#948979] text-white px-4 py-2 rounded-xl hover:bg-[#948979] hover:text-[#222831] transition"
            >
              Assign Job To All
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default SubVendorList;
