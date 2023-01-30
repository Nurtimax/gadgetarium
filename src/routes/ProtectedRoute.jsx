import React from "react";
import Modal from "../components/UI/Modal";

const ProtectedRoute = ({ component, isLogin }) => {
  if (isLogin) {
    return <Modal />;
  }
  return component;
};

export default ProtectedRoute;
