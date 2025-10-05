import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const ProtectedRoutes = ({ children }) => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    toast.error("Please Login First"); // ✅ show toast
    return <Navigate to="/login" replace />; // ✅ only JSX
  }

  return children; // ✅ render children
};

export default ProtectedRoutes;
