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
  const isAdmin = location.pathname.split("/").includes(...roles);

  useEffect(() => {
    if (!roleName) {
      return navigate("/");
    }

    if (roles.includes(roleName?.toLowerCase())) {
      if (!isAdmin) {
        navigate(fallbackPath);
      } else {
        navigate(location.pathname);
      }
    }
    return null;
  }, [roleName, fallbackPath, isAdmin, roles]);

  return RouteComponent;
};

export default PrivateRole;
