"use client";

import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  isLoggedin: boolean;
  setIsLoggedin: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedin, setIsLoggedin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
