import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SuccessAnimation from "./SuccessAnimation"; // ✅ import animation

const Jobpost = () => {
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState(""); // ✅ email state
  const [industry, setIndustry] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [skills, setSkills] = useState(""); // ✅ skills state
  const [location, setLocation] = useState("");
  const [ctc, setCtc] = useState(""); // ✅ ctc state
  const [overview, setOverview] = useState("");
  const [courses, setCourses] = useState("");
  const [criteria, setCriteria] = useState("");
  const [showSuccess, setShowSuccess] = useState(false); // ✅ animation toggle

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      id: Date.now(),
      company: orgName,
      email,
      industry,
      type: jobType,
      title: jobTitle,
      skills: skills.split(",").map((s) => s.trim()), // ✅ store skills as array
      location,
      ctc,
      description: overview,
      requirements: [criteria],
      responsibilities: [courses],
    };

    const existingJobs = JSON.parse(localStorage.getItem("companyJobs")) || [];
    const updatedJobs = [...existingJobs, newJob];
    localStorage.setItem("companyJobs", JSON.stringify(updatedJobs));

    setShowSuccess(true); // ✅ trigger animation

    // Clear fields
    setOrgName("");
    setEmail("");
    setIndustry("");
    setJobType("");
    setJobTitle("");
    setSkills("");
    setLocation("");
    setCtc("");
    setOverview("");
    setCourses("");
    setCriteria("");
  };

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  return (
    <div className="min-h-screen bg-[#1e222a] text-[#DFD0B8] relative">
      {showSuccess && <SuccessAnimation />}

      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-6 border-b border-[#393E46]">
        <div className="flex items-center gap-2">
          <img src="/src/assets/botImage.png" alt="logo" className="w-10 h-10" />
          <span className="text-2xl font-bold text-[#DFD0B8]">NEX.AI</span>
        </div>
        <ul className="flex items-center gap-10 text-sm font-medium">
          <li><Link to="/" className="hover:text-[#948979]">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#948979]">About us</Link></li>
          <li><Link to="/contact" className="hover:text-[#948979]">Contact us</Link></li>
        </ul>
      </nav>

      {/* Content */}
      <div className="px-10 py-12 flex flex-col lg:flex-row gap-12">
        {/* Preview Section */}
        <div className="w-full lg:w-1/2 border-r border-[#393E46] pr-6">
          <h2 className="text-2xl font-bold mb-4">Ready to Hire?</h2>
          <p className="mb-6 text-sm">Provide the details below to publish your opening and connect with the right candidates through our System.</p>
          <div className="bg-[#2b2f38] rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold">{jobTitle || "Job Title Preview"}</h3>
            <p><strong>Company:</strong> {orgName || "Organization Name"}</p>
            <p><strong>Email:</strong> {email || "example@email.com"}</p>
            <p><strong>Type:</strong> {jobType || "Job Type"}</p>
            <p><strong>Industry:</strong> {industry || "Industry"}</p>
            <p><strong>Location:</strong> {location || "Job Location"}</p>
            <p><strong>CTC:</strong> {ctc || "Expected CTC"}</p>
            <p><strong>Skills:</strong> {skills || "Required Skills (comma-separated)"}</p>
            <p><strong>Courses:</strong> {courses || "Eligible Courses"}</p>
            <p><strong>Criteria:</strong> {criteria || "Eligibility Criteria"}</p>
            <p><strong>Overview:</strong> {overview || "Company overview goes here..."}</p>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="w-full lg:w-1/2 space-y-5">
          <input
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
            className="w-full px-4 py-2 bg-[#2b2f38] rounded-md"
            placeholder="Organization Name"
            required
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-[#2b2f38] rounded-md"
            placeholder="Email Address"
            type="email"
            required
          />
          <input
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full px-4 py-2 bg-[#2b2f38] rounded-md"
            placeholder="Select Job Industry"
            required
          />
          <input
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="w-full px-4 py-2 bg-[#2b2f38] rounded-md"
            placeholder="Select Job Type"
            required
          />
          <input
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full px-4 py-2 bg-[#2b2f38] rounded-md"
            placeholder="Job Title"
            required
          />
          {/* ✅ Skills Field Below Job Title */}
          <input
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full px-4 py-2 bg-[#2b2f38] rounded-md"
            placeholder="Skills (e.g. JavaScript, Python, SQL)"
            required
          />
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 bg-[#2b2f38] rounded-md"
            placeholder="Job Location"
            required
          />
          <input
            value={ctc}
            onChange={(e) => setCtc(e.target.value)}
            className="w-full px-4 py-2 bg-[#2b2f38] rounded-md"
            placeholder="CTC Offered"
            required
          />
          <textarea
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
            rows={3}
            className="w-full px-4 py-2 bg-[#2b2f38] rounded-md"
            placeholder="Company Overview"
            required
          />
          <input
            value={courses}
            onChange={(e) => setCourses(e.target.value)}
            className="w-full px-4 py-2 bg-[#2b2f38] rounded-md"
            placeholder="Eligible Courses"
            required
          />
          <input
            value={criteria}
            onChange={(e) => setCriteria(e.target.value)}
            className="w-full px-4 py-2 bg-[#2b2f38] rounded-md"
            placeholder="Eligibility Criteria"
            required
          />
          <button
            type="submit"
            className="mt-4 w-full bg-transparent border border-[#948979] hover:bg-[#393E46] py-2 rounded-full"
          >
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default Jobpost;
