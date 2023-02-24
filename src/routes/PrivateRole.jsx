import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PrivateRole = ({
  RouteComponent,
  roles = [],
  fallbackPath = "admin",
  roleName,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAdmin = location.pathname
    .split("/")
    .includes(roleName?.toLowerCase());

  useEffect(() => {
    if (!roleName) {
      navigate("/");
    }

    if (roles.includes(roleName?.toLowerCase())) {
      if (!isAdmin) {
        navigate(fallbackPath);
      } else {
        navigate(location.pathname);
      }
    }
  }, [roleName, fallbackPath, isAdmin, roles]);

  return RouteComponent;
};

export default PrivateRole;
