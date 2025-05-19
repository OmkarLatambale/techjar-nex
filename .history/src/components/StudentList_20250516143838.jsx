// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// const students = [
//   {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     contact: "9876543210",
//     resume: "https://example.com/resume/john",
//   },
//   {
//     name: "Jane Smith",
//     email: "jane.smith@example.com",
//     contact: "9876543211",
//     resume: "https://example.com/resume/jane",
//   },
//   {
//     name: "Amit Kumar",
//     email: "amit.kumar@example.com",
//     contact: "9876543212",
//     resume: "https://example.com/resume/amit",
//   },
// ];

// const handleSendMail = (email) => {
//   alert(`Mail sent to ${email}`);
// };

// const handleSendMailToAll = () => {
//   const allEmails = students.map((student) => student.email).join(", ");
//   alert(`Mail sent to all: ${allEmails}`);
// };

// export default function StudentList() {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Shortlisted Students</h1>
//       <div className="grid gap-4">
//         {students.map((student, index) => (
//           <Card key={index} className="shadow-md">
//             <CardContent className="p-4">
//               <p>
//                 <strong>Name:</strong> {student.name}
//               </p>
//               <p>
//                 <strong>Email:</strong> {student.email}
//               </p>
//               <p>
//                 <strong>Contact:</strong> {student.contact}
//               </p>
//               <a
//                 href={student.resume}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-500 hover:underline"
//               >
//                 View Resume
//               </a>
//               <div className="mt-2">
//                 <Button onClick={() => handleSendMail(student.email)}>
//                   Send Mail
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//       <div className="mt-6">
//         <Button
//           onClick={handleSendMailToAll}
//           className="bg-green-600 hover:bg-green-700"
//         >
//           Send Mail to All
//         </Button>
//       </div>
//     </div>
//   );
// }
