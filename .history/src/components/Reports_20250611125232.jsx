// import React, { useState } from "react";
// import { useReports } from "../hooks/useReports";

// const Reports = () => {
//   const { reports, loading, error } = useReports();
//   const [selectedReport, setSelectedReport] = useState(null);

//   return (
//     <div className="min-h-screen bg-[#1e222a] text-[#DFD0B8] p-4 flex flex-col md:grid md:grid-cols-3 gap-4">
//       {/* Sidebar */}
//       <div className="bg-[#2c2f36] p-4 rounded-lg shadow-md md:col-span-1 max-h-[40vh] md:max-h-[100vh] overflow-y-auto">
//         <h2 className="text-xl font-semibold mb-4 border-b border-[#393e46] pb-2">
//           Students
//         </h2>

//         {loading && <p className="text-gray-400">Loading...</p>}
//         {error && <p className="text-red-500">Error: {error}</p>}
//         {!loading && !error && reports.length === 0 && (
//           <p className="text-gray-400">No reports found.</p>
//         )}

//         <ul className="space-y-3">
//           {reports.map((report) => (
//             <li
//               key={report.id}
//               onClick={() => setSelectedReport(report)}
//               className={`p-3 rounded cursor-pointer hover:bg-[#393e46] ${
//                 selectedReport?.id === report.id ? "bg-[#393e46]" : ""
//               }`}
//             >
//               <p className="font-semibold">{report.candidate_name}</p>
//               <p className="text-sm text-gray-400">{report.role}</p>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Report Details */}
//       <div className="md:col-span-2 bg-[#393e46] p-6 rounded-lg shadow-md flex-grow overflow-auto">
//         {selectedReport ? (
//           <>
//             <h2 className="text-2xl md:text-3xl font-bold mb-2">
//               {selectedReport.candidate_name}
//             </h2>
//             <p className="mb-1">
//               <strong>Role:</strong> {selectedReport.role}
//             </p>
//             <p className="mb-1">
//               <strong>Experience Level:</strong>{" "}
//               {selectedReport.experience_level}
//             </p>
//             <p className="mb-1">
//               <strong>Years of Experience:</strong>{" "}
//               {selectedReport.years_experience}
//             </p>
//             <p className="mb-1">
//               <strong>Interview Duration:</strong>{" "}
//               {Math.floor(
//                 (new Date(selectedReport.end_time) -
//                   new Date(selectedReport.start_time)) /
//                   60000
//               )}{" "}
//               min
//             </p>
//             <p className="mb-1">
//               <strong>Average Rating:</strong>{" "}
//               {selectedReport.average_rating.toFixed(1)}/10
//             </p>
//             <div className="mt-4">
//               <h3 className="font-semibold mb-2 text-[#DFD0B8]">
//                 Full Interview Report:
//               </h3>
//               <pre className="bg-[#2c2f36] p-4 rounded text-sm whitespace-pre-wrap">
//                 {selectedReport.report_text}
//               </pre>
//             </div>
//           </>
//         ) : (
//           <p className="text-gray-400 text-center md:text-left">
//             Select a student from the left panel to view their interview report.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Reports;

import React, { useState } from "react";
import { useReports } from "../hooks/useReports";

const Reports = () => {
  const { groupedReports, loading, error } = useReports();
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedReport, setSelectedReport] = useState(null);

  const companyNames = Object.keys(groupedReports);
  // const stripHtmlTags = (html) => {
  //   const doc = new DOMParser().parseFromString(html, "text/html");
  //   return doc.body.textContent || "";
  // };
  const formatHtmlReport = (html) => {
    if (!html) return "";

    // Replace <br> and <br/> with newline
    let text = html.replace(/<br\s*\/?>/gi, "\n");

    // Replace <p> with double newline
    text = text.replace(/<\/p>/gi, "\n\n").replace(/<p[^>]*>/gi, "");

    // Replace <strong> or <b> with **text** for bold
    text = text.replace(/<strong>(.*?)<\/strong>/gi, "**$1**");
    text = text.replace(/<b>(.*?)<\/b>/gi, "**$1**");

    // Remove remaining tags
    text = text.replace(/<[^>]+>/g, "");

    // Decode HTML entities using browser's parser
    const doc = new DOMParser().parseFromString(text, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <div className="min-h-screen bg-[#1e222a] text-[#DFD0B8] p-4 flex flex-col md:grid md:grid-cols-3 gap-4">
      {/* Left Sidebar: Company List */}
      <div className="bg-[#2c2f36] p-4 rounded-lg shadow-md md:col-span-1 max-h-[40vh] md:max-h-[100vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4 border-b border-[#393e46] pb-2">
          Companies
        </h2>

        {loading && <p className="text-gray-400">Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!loading && !error && companyNames.length === 0 && (
          <p className="text-gray-400">No companies found.</p>
        )}

        <ul className="space-y-3">
          {companyNames.map((company) => (
            <li
              key={company}
              onClick={() => {
                setSelectedCompany(company);
                setSelectedReport(null);
              }}
              className={`p-3 rounded cursor-pointer hover:bg-[#393e46] ${
                selectedCompany === company ? "bg-[#393e46]" : ""
              }`}
            >
              <p className="font-semibold">{company}</p>
              <p className="text-sm text-gray-400">
                {groupedReports[company]?.length} candidate(s)
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Middle Column: Candidates List */}
      <div className="bg-[#2c2f36] p-4 rounded-lg shadow-md max-h-[40vh] md:max-h-[100vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4 border-b border-[#393e46] pb-2">
          {selectedCompany
            ? `${selectedCompany} - Candidates`
            : "Select a company"}
        </h2>
        {selectedCompany &&
          groupedReports[selectedCompany]?.map((report) => (
            <div
              key={report.id}
              className="flex items-center justify-between p-2 border-b border-[#393e46]"
            >
              <div>
                <p className="font-semibold">{report.candidate_name}</p>
                <p className="text-sm text-gray-400">{report.role}</p>
              </div>
              <button
                onClick={() => setSelectedReport(report)}
                className="bg-[#DFD0B8] text-black text-sm font-semibold px-3 py-1 rounded hover:bg-[#c6b79f]"
              >
                View Report
              </button>
            </div>
          ))}
      </div>

      {/* Right Panel: Full Report */}
      <div className="md:col-span-1 bg-[#393e46] p-6 rounded-lg shadow-md flex-grow overflow-auto">
        {selectedReport ? (
          <>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {selectedReport.candidate_name}
            </h2>
            <p className="mb-1">
              <strong>Role:</strong> {selectedReport.role}
            </p>
            <p className="mb-1">
              <strong>Years of Experience:</strong>{" "}
              {selectedReport.years_experience}
            </p>
            <p className="mb-1">
              <strong>Interview Duration:</strong>{" "}
              {Math.floor(
                (new Date(selectedReport.end_time) -
                  new Date(selectedReport.start_time)) /
                  60000
              )}{" "}
              min
            </p>
            <p className="mb-1">
              <strong>Average Rating:</strong>{" "}
              {selectedReport.average_rating.toFixed(1)}/10
            </p>
            <div className="mt-4">
              <h3 className="font-semibold mb-2 text-[#DFD0B8]">
                Full Interview Report:
              </h3>
              <pre className="bg-[#2c2f36] p-4 rounded text-sm whitespace-pre-wrap">
                {htmlToFormattedText(selectedReport.report_text)}
              </pre>
            </div>
          </>
        ) : (
          <p className="text-gray-400 text-center md:text-left">
            Select a candidate to view their report.
          </p>
        )}
      </div>
    </div>
  );
};

export default Reports;
