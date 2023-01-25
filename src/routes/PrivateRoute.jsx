import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component, isLogin, fallbackPath }) => {
  if (!isLogin) {
    return <Navigate to={fallbackPath} replace />;
  }
  return component;
};

export default PrivateRoute;
