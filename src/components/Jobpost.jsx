import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SuccessAnimation from "./SuccessAnimation";
import { useJobDescription } from "../hooks/useJobDescription";
import ReactMarkdown from "react-markdown"; // <- ✅ ADD THIS

const Jobpost = () => {
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [industry, setIndustry] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [skills, setSkills] = useState("");
  const [location, setLocation] = useState("");
  const [ctc, setCtc] = useState("");
  const [eligibility, setEligibility] = useState("");
  const [requirements, setRequirements] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  const { generatedDesc, loading, error, generateJD } = useJobDescription();

  const handleGenerate = async () => {
    await generateJD({
      orgName,
      industry,
      title: jobTitle,
      skills,
      location,
      ctc,
      eligibilityCriteria: eligibility,
      requirements,
    });
    setHasGenerated(true);
  };

  const handlePostJob = () => {
    const newJob = {
      id: Date.now(),
      company: orgName,
      email,
      industry,
      title: jobTitle,
      skills: skills.split(",").map((s) => s.trim()),
      location,
      ctc,
      eligibility,
      description: generatedDesc,
      requirements: [requirements],
    };

    const existingJobs = JSON.parse(localStorage.getItem("companyJobs")) || [];
    localStorage.setItem(
      "companyJobs",
      JSON.stringify([...existingJobs, newJob])
    );

    setShowSuccess(true);
    setOrgName("");
    setEmail("");
    setIndustry("");
    setJobTitle("");
    setSkills("");
    setLocation("");
    setCtc("");
    setEligibility("");
    setRequirements("");
    setHasGenerated(false);
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
          <img
            src="/src/assets/botImage.png"
            alt="logo"
            className="w-10 h-10"
          />
          <span className="text-2xl font-bold text-[#DFD0B8]">NEX.AI</span>
        </div>
        <ul className="flex items-center gap-10 text-sm font-medium">
          <li>
            <Link to="/" className="hover:text-[#948979]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#948979]">
              About us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#948979]">
              Contact us
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-10 px-10 py-12">
        {/* Left: Preview + Post */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="bg-[#2b2f38] rounded-lg p-6 text-sm min-h-[300px]">
            <strong className="block mb-2 text-[#948979]">
              Generated Job Description:
            </strong>
            {loading ? (
              <p className="text-yellow-400">Generating job description...</p>
            ) : error ? (
              <p className="text-red-400">Error: {error}</p>
            ) : (
              <ReactMarkdown
                components={{
                  // eslint-disable-next-line no-unused-vars
                  h1: ({ node, ...props }) => (
                    <h1 className="text-xl font-bold" {...props} />
                  ),
                  // eslint-disable-next-line no-unused-vars
                  h2: ({ node, ...props }) => (
                    <h2 className="text-lg font-semibold mt-4" {...props} />
                  ),
                  // eslint-disable-next-line no-unused-vars
                  p: ({ node, ...props }) => <p className="mb-2" {...props} />,
                  // eslint-disable-next-line no-unused-vars
                  li: ({ node, ...props }) => (
                    <li className="list-disc ml-6" {...props} />
                  ),
                  // eslint-disable-next-line no-unused-vars
                  strong: ({ node, ...props }) => (
                    <strong className="font-bold" {...props} />
                  ),
                }}
              >
                {generatedDesc || "Generated job description will appear here."}
              </ReactMarkdown>
            )}
          </div>

          {hasGenerated && (
            <button
              onClick={handlePostJob}
              className="mt-4 w-full bg-transparent border border-[#948979] hover:bg-[#393E46] py-2 rounded-full"
            >
              Post A Job
            </button>
          )}
        </div>

        {/* Right: Form */}
        <form
          className="w-full lg:w-1/2 space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
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
            type="email"
            className="w-full px-4 py-2 bg-[#2b2f38] rounded-md"
            placeholder="Email Address"
            required
          />
          <input
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full px-4 py-2 bg-[#2b2f38] rounded-md"
            placeholder="Industry"
            required
          />
          <input
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full px-4 py-2 bg-[#2b2f38] rounded-md"
            placeholder="Job Title"
            required
          />
          <input
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full px-4 py-2 bg-[#2b2f38] rounded-md"
            placeholder="Skills (comma-separated)"
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
            value={eligibility}
            onChange={(e) => setEligibility(e.target.value)}
            rows={3}
            className="w-full px-4 py-2 bg-[#2b2f38] rounded-md"
            placeholder="Eligibility Criteria"
            required
          />
          <textarea
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            rows={3}
            className="w-full px-4 py-2 bg-[#2b2f38] rounded-md"
            placeholder="Requirements"
            required
          />

          <button
            type="button"
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-transparent border border-[#948979] hover:bg-[#393E46] py-2 rounded-full"
          >
            {loading ? "Generating..." : "Generate Job"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Jobpost;
