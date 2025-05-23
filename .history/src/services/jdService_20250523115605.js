// src/services/jdService.js
export const generateJobDescriptionAPI = async ({
  organization_name,
  job_industry,
  job_title,
  skills,
  job_location,
  ctc,
  eligibility_criteria,
  requirements,
}) => {
  const response = await fetch("http://localhost:5000/generate_jd", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      organization_name,
      job_industry,
      job_title,
      skills,
      job_location,
      ctc,
      eligibility_criteria,
      requirements,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to generate job description.");
  }

  return response.json();
};

// export const generateJobDescriptionAPI = async ({
//   orgName,
//   industry,
//   title,
//   skills,
//   location,
//   ctc,
//   eligibilityCriteria,
//   requirements,
// }) => {
//   const prompt = `
// Generate a professional and well-formatted job description for the following role. Use section headings (like **Job Title**, **Location**, **CTC**, etc.) in bold markdown style:

// - Organization Name: ${orgName}
// - Industry: ${industry}
// - Job Title: ${title}
// - Skills Required: ${skills}
// - Location: ${location}
// - CTC Offered: ${ctc}
// - Eligibility Criteria: ${eligibilityCriteria}
// - Requirements: ${requirements}

// Avoid introductory or generic preambles. Focus on a clean, company-ready layout.
// `;

//   const response = await fetch("https://api.openai.com/v1/chat/completions", {
//     method: "POST",
//     headers: {
//       "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       model: "gpt-3.5-turbo",
//       messages: [
//         {
//           role: "user",
//           content: prompt,
//         },
//       ],
//       max_tokens: 800,
//       temperature: 0.7,
//     }),
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data?.error?.message || "Failed to generate job description.");
//   }

//   return { description: data.choices[0].message.content.trim() };
// };
