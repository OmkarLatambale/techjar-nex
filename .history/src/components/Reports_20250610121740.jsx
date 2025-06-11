import React, { useState } from "react";
import { useReports } from "../hooks/useReports";

const Reports = () => {
  const { reports, loading, error } = useReports();
  const [selectedReport, setSelectedReport] = useState(null);

  return (
    <div className="min-h-screen bg-[#1e222a] text-[#DFD0B8] p-4 flex flex-col md:grid md:grid-cols-3 gap-4">
      {/* Sidebar */}
      <div className="bg-[#2c2f36] p-4 rounded-lg shadow-md md:col-span-1 max-h-[40vh] md:max-h-[100vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4 border-b border-[#393e46] pb-2">
          Students
        </h2>

        {loading && <p className="text-gray-400">Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!loading && !error && reports.length === 0 && (
          <p className="text-gray-400">No reports found.</p>
        )}

        <ul className="space-y-3">
          {reports.map((report) => (
            <li
              key={report.id}
              onClick={() => setSelectedReport(report)}
              className={`p-3 rounded cursor-pointer hover:bg-[#393e46] ${
                selectedReport?.id === report.id ? "bg-[#393e46]" : ""
              }`}
            >
              <p className="font-semibold">{report.candidate_name}</p>
              <p className="text-sm text-gray-400">{report.role}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Report Details */}
      <div className="md:col-span-2 bg-[#393e46] p-6 rounded-lg shadow-md flex-grow overflow-auto">
        {selectedReport ? (
          <>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {selectedReport.candidate_name}
            </h2>
            <p className="mb-1">
              <strong>Role:</strong> {selectedReport.role}
            </p>
            <p className="mb-1">
              <strong>Experience Level:</strong> {selectedReport.experience_level}
            </p>
            <p className="mb-1">
              <strong>Years of Experience:</strong> {selectedReport.years_experience}
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
                {selectedReport.report_text}
              </pre>
            </div>
          </>
        ) : (
          <p className="text-gray-400 text-center md:text-left">
            Select a student from the left panel to view their interview report.
          </p>
        )}
      </div>
    </div>
  );
};

export default Reports;