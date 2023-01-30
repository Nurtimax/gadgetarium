import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component, isLogin, fallbackPath }) => {
  if (isLogin) {
    return <Navigate to={fallbackPath} />;
  }
  return component;
};

export default ProtectedRoute;
