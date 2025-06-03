export const uploadResumes = async (files, jobId) => {
  const formData = new FormData();

  // Append each file under the "resumes" key
  files.forEach((file) => formData.append("resumes", file));

  // Append the jobId (make sure backend expects the same key name)
  formData.append("jobId", jobId); // 👈 Changed to "jobId" assuming it's standard

  const response = await fetch("https://ibot-backend.onrender.com/jobs/jdresponse/ ", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || "Upload failed");
  }

  return response.json();
};
