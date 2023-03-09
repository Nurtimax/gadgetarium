import useBreadcrumbs from "use-react-router-breadcrumbs";
import React from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumbs, styled } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { BREADCRUMBS } from "../../utils/constants/breadcrumbs";

const BreadCrumbs = () => {
  const breadcrumbs = useBreadcrumbs(BREADCRUMBS);

  return (
    <Breadcrumbs separator={<KeyboardDoubleArrowRightIcon fontSize="6px" />}>
      {breadcrumbs.length > 1 &&
        breadcrumbs.map(({ match, breadcrumb }) => (
          <StyledLink
            key={match.pathname}
            to={match.pathname}
            className={({ isActive }) => (isActive ? "active" : "no-active")}
          >
            {breadcrumb}
          </StyledLink>
        ))}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;

const StyledLink = styled(NavLink)(({ theme }) => ({
  "&.active": {
    color: theme.palette.primary.main,
  },

  "&.no-active": {
    color: "#91969E",
  },
}));
