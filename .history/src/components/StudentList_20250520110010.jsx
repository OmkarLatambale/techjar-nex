import React from "react";
import { students } from "Data/studentData";
import { job } from "Data/jobData";

const handleSendMail = (email) => {
  alert(`Mail sent to ${email}`);
};

const handleSendMailToAll = () => {
  const allEmails = students.map((student) => student.email).join(", ");
  alert(`Mail sent to all: ${allEmails}`);
};

const getSkillMatch = (studentSkills) => {
  const matched = job.skillsRequired.filter((skill) =>
    studentSkills.includes(skill)
  );
  return {
    matchedSkills: matched,
    percentage: ((matched.length / job.skillsRequired.length) * 100).toFixed(0),
  };
};

function StudentList() {
  return (
    <div className="p-6 bg-[#222831] min-h-screen">
      <div className="flex items-center gap-2 mb-10">
        <img src={botImage} alt="logo" className="w-10 h-10" />
        <span className="text-2xl font-bold text-[#DFD0B8]">NEX.AI</span>
      </div>

      <h1 className="text-2xl font-bold mb-4 text-[#dfd0b8]">
        Shortlisted Students - {job.title}
      </h1>

      <div className="grid gap-4">
        {students.map((student, index) => {
          const match = getSkillMatch(student.skills);
          return (
            <div
              key={index}
              className="bg-[#393e46] shadow-md rounded-lg p-4 border border-[#948979] text-[#dfd0b8]"
            >
              <p>
                <strong>Name:</strong> {student.name}
              </p>
              <p>
                <strong>Email:</strong> {student.email}
              </p>
              <p>
                <strong>Contact:</strong> {student.contact}
              </p>
              <p>
                <strong>Skill Match:</strong>{" "}
                <span
                  className={`font-semibold ${
                    match.percentage >= 75
                      ? "text-green-400"
                      : match.percentage >= 50
                      ? "text-yellow-400"
                      : "text-red-400"
                  }`}
                >
                  {match.percentage}%
                </span>{" "}
                ({match.matchedSkills.join(", ")})
              </p>
              <a
                href={student.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#948979] hover:underline"
              >
                View Resume
              </a>

              <div className="mt-2">
                <button
                  onClick={() => handleSendMail(student.email)}
                  className="bg-[#222831] text-white px-4 py-2 rounded hover:bg-[#948979] hover:text-[#222831] transition"
                >
                  Send Mail
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <button
          onClick={handleSendMailToAll}
          className="border border-[#948979] text-white px-4 py-2 rounded-xl hover:bg-[#948979] hover:text-[#222831] transition"
        >
          Send Mail to All
        </button>
      </div>
    </div>
  );
}

export default StudentList;
