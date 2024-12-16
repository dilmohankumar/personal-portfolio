import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    role: "user",
  });

  const login = (token, role) => {
    setAuth({ isAuthenticated: true, role });
  };

  const logout = () => {
    setAuth({ isAuthenticated: false, role: "" });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
