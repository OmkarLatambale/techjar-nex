export const generateJobDescription = async (jobData) => {
  try {
    const response = await axios.post(`${BASE_URL}/jobs/post-job/`, jobData);
    console.log("API response:", response.data);
    return response.data.generated_description;
  } catch (error) {
    console.error("API error:", error.response?.data);
    throw new Error(
      error.response?.data?.message || "Failed to generate job description"
    );
  }
};
