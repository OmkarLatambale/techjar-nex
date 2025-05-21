// src/hooks/useAuth.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "..//services/authService";

export function useLogin() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async ({ email, password, role }) => {
    setLoading(true);
    setError("");

    try {
      const data = await loginUser({ email, password, role });

      // Optional: Save token if provided
      // localStorage.setItem("token", data.token);

      if (role === "vendor") {
        navigate("/vendor-dashboard");
      } else {
        navigate("/subvendor-dashboard");
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { login, error, loading };
}
