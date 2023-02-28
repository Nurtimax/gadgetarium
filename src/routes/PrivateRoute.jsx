import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ Component, role = [], fallbackPath = "/admin" }) => {
  const { data, isAuthenticated } = useSelector((state) => state.auth);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    return navigate(location.pathname);
  }, []);

  const { roleName } = data || {};

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (isAuthenticated && role.includes(roleName.toLowerCase())) {
    return <Navigate to={fallbackPath} replace />;
  }

  return Component;
};

export default PrivateRoute;
