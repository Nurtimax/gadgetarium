import useBreadcrumbs from "use-react-router-breadcrumbs";
import React from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { BREADCRUMBS } from "../../utils/constants";

const BreadCrumbs = () => {
  const breadcrumbs = useBreadcrumbs(BREADCRUMBS);

  return (
    <Breadcrumbs separator={<KeyboardDoubleArrowRightIcon fontSize="6px" />}>
      {breadcrumbs.length > 1 &&
        breadcrumbs.map(({ match, breadcrumb }) => (
          <NavLink key={match.pathname} to={match.pathname}>
            {breadcrumb}
          </NavLink>
        ))}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
