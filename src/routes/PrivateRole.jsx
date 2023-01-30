import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRole = ({
  RouteComponent,
  roles = [],
  fallbackPath = "admin",
}) => {
  const user = JSON.parse(localStorage.getItem("role"));
  const navigate = useNavigate();

  const { roleName } = user || {};
  useEffect(() => {
    if (roles.includes(roleName)) {
      navigate(fallbackPath);
    }
  }, []);

  return RouteComponent;
};

export default PrivateRole;
