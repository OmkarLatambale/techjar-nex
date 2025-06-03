export const uploadResume = async (files) => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append('resume', file); // or 'files[]' if API expects multiple resumes
  });

  const response = await fetch('https://ibot-backend.onrender.com/jobs/jdresponse/', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Upload failed');
  }

  return await response.json();
};
