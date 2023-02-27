import { useMemo, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PrivateRole = ({
  RouteComponent,
  roles = [],
  fallbackPath,
  roleName = "",
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isAdmin = useMemo(() => {
    return location.pathname.split("/").includes(roleName?.toLowerCase());
  }, [location.pathname, roleName]);

  useEffect(() => {
    if (roleName === "") {
      navigate("/");
    } else if (roles.includes(roleName?.toLowerCase())) {
      if (!isAdmin) {
        navigate(fallbackPath);
      }
    }
  }, [navigate, roleName, roles, fallbackPath, isAdmin]);

  if (isAdmin || roles.includes(roleName?.toLowerCase())) {
    return RouteComponent;
  } else {
    return null;
  }
};

export default PrivateRole;
