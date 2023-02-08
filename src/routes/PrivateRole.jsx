import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PrivateRole = ({
  RouteComponent,
  roles = [],
  fallbackPath = "admin",
}) => {
  const user = JSON.parse(localStorage.getItem("role"));
  const navigate = useNavigate();
  const location = useLocation();
  const isAdmin = location.pathname.split("/").includes(...roles);

  const { roleName } = user || {};
  useEffect(() => {
    if (roles.includes(roleName)) {
      if (!isAdmin) {
        navigate(fallbackPath);
      } else {
        navigate(location.pathname);
      }
    }
  }, []);

  return RouteComponent;
};

export default PrivateRole;
