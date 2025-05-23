/* eslint-disable no-useless-catch */
// src/services/authService.js
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

export async function loginUser({ email, password, role }) {
  try {
    const response = await fetch(`${API_BASE_URL}/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, role }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    return data;
  } catch (error) {
    // Just rethrow the error to handle it upstream
    throw error;
  }
}
