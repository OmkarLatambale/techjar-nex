// src/hooks/useLogin.js
import { useState } from "react";
import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

export const useLogin = () => {
  const { login: setAuth } = useAuth();
  const [loading, setLoading] = useState(false);

  const loginHandler = async ({ email, password, role }) => {
    setLoading(true);

    try {
      const response = await loginUser({ email, password, role });

      const { access, refresh, email: userEmail, username, role: userRole } = response;

      if (!access) {
        return { status: 401, data: { message: "Invalid credentials" } };
      }

      // Save in context
      setAuth({
        token: access,
        refreshToken: refresh,
        user: {
          email: userEmail,
          username,
          role: userRole,
        },
      });

      return { status: 200, data: response };
    } catch (error) {
      const status = error?.response?.status || 500;
      const message =
        error?.response?.data?.message ||
        error?.response?.data?.detail ||
        "Login failed";

      return { status, data: { message } };
    } finally {
      setLoading(false);
    }
  };

  return { login: loginHandler, loading };
};

export default useLogin;
