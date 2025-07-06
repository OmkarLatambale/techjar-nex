// src/services/loginService.js
const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function loginUser({ email, password, role }) {
  const response = await fetch(`${API_BASE_URL}/api/token/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: email, password, role }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw { response: { status: response.status, data } };
  }

  return data;
}
