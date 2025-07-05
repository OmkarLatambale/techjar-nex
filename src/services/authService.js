/* eslint-disable no-useless-catch */
// src/services/authService.js
const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function loginUser({ email, password, role }) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, role }),
    });

    const data = await response.json();

    if (!response.ok) {
      // ✅ Fix: read from .error, not .message
      throw new Error(data.error || data.message || "Login failed");
    }

    return data;
  } catch (error) {
    throw error; // upstream will use this for toast
  }
}
