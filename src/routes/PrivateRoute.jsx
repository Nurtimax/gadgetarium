import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Component, role = [], fallbackPath = "/admin" }) => {
  const { data, isAuthenticated } = useSelector((state) => state.auth);

  const { roleName } = data || {};
  const checkRole = useMemo(() => {
    return role.join().toLowerCase().split().includes(roleName?.toLowerCase());
  }, [roleName, role]);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (isAuthenticated && !checkRole) {
    return <Navigate to={fallbackPath} replace />;
  }

  return Component;
};

export default PrivateRoute;
