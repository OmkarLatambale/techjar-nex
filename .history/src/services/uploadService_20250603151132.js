export const uploadResumes = async (files, jobId) => {
  const formData = new FormData();
  files.forEach((file) => formData.append("resumes", file));
  formData.append("job_Id", jobId); // Attach job ID

  const response = await fetch("https://ibot-backend.onrender.com/resumes/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || "Upload failed");
  }

  return response.json();
};
