// src/hooks/useLogin.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

export function useLogin() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async ({ email, password, role }) => {
    setLoading(true);
    setError("");

    try {
      const data = await loginUser({ email, password, role });

      if (role === "vendor") {
        navigate("/vendor-dashboard");
      } else {
        navigate("/subvendor-dashboard");
      }

      return data;
    } catch (err) {
      // ✅ extract backend error message from response
      const message =
        err?.response?.data?.error || err?.message || "Login failed";
      setError(message);

      // 🚨 Throw plain string instead of Error object
      throw message;
    } finally {
      setLoading(false);
    }
  };

  return { login, error, loading };
}
