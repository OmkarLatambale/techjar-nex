// // src/context/AuthContext.jsx
// import React, { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     const user = localStorage.getItem("authUser");

//     if (token && user) {
//       setAuth({ token, user: JSON.parse(user) });
//     }
//   }, []);

//   const login = ({ token, user }) => {
//     localStorage.setItem("authToken", token);
//     localStorage.setItem("authUser", JSON.stringify(user));
//     setAuth({ token, user });
//   };

//   const logout = () => {
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("authUser");
//     setAuth(null);
//   };

//   return (
//     <AuthContext.Provider value={{ auth, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const user = localStorage.getItem("authUser");

    if (token && user) {
      setAuth({ token, user: JSON.parse(user) });
    }
  }, []);

  const login = ({ token, user }) => {
    localStorage.removeItem("token");
    localStorage.setItem("authToken", token);
    localStorage.setItem("authUser", JSON.stringify(user));
    setAuth({ token, user });
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    setAuth(null);
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        token: auth?.token ?? null,     // ✅ expose token directly
        user: auth?.user ?? null,       // ✅ expose user directly
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
