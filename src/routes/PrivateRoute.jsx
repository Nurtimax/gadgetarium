import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoute = ({ Component, role = [], fallbackPath = "/admin" }) => {
  const { data, isAuthenticated } = useSelector((state) => state.auth);

  const { roleName } = data || {};
  const checkRole = useMemo(() => {
    return role.join().toLowerCase().split().includes(roleName?.toLowerCase());
  }, [roleName, role]);

  useEffect(() => {
    if (!isAuthenticated) {
      toast.warn("Вы не авторизованы");
    }
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (isAuthenticated && !checkRole) {
    return <Navigate to={fallbackPath} replace />;
  }

  return Component;
};

export default PrivateRoute;
