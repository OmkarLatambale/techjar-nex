import React from "react";

const students = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    contact: "9876543210",
    resume: "https://example.com/resume/john",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    contact: "9876543211",
    resume: "https://example.com/resume/jane",
  },
  {
    name: "Amit Kumar",
    email: "amit.kumar@example.com",
    contact: "9876543212",
    resume: "https://example.com/resume/amit",
  },
];

const handleSendMail = (email) => {
  alert(`Mail sent to ${email}`);
};

const handleSendMailToAll = () => {
  const allEmails = students.map((student) => student.email).join(", ");
  alert(`Mail sent to all: ${allEmails}`);
};

 function StudentList() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shortlisted Students</h1>
      <div className="grid gap-4">
        {students.map((student, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
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
            <a
              href={student.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Resume
            </a>
            <div className="mt-2">
              <button
                onClick={() => handleSendMail(student.email)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Send Mail
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button
          onClick={handleSendMailToAll}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Send Mail to All
        </button>
      </div>
    </div>
  );
}
export default function StudentList;