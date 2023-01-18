import { Box, styled, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { adminPage, userPages } from "../../utils/constants";

const NavLinks = ({ setValue, value, admin }) => {
  const pageIsAdmin = !admin ? userPages : adminPage;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="flex center">
      <Tabs
        textColor="inherit"
        value={value}
        onChange={handleChange}
        indicatorColor="none"
        classes={{ flexContainer: "gap" }}
      >
        {pageIsAdmin?.map((adminList) => (
          <TabStyled
            key={adminList.id}
            value={adminList.theme}
            label={
              <Link to={adminList.theme}>
                <Typography component="p" variant="body1">
                  {adminList.theme}
                </Typography>
              </Link>
            }
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default NavLinks;

const TabStyled = styled(Tab)(() => ({
  "&.Mui-selected": {
    background: "#f8f7f733",
    borderRadius: "3px",
  },
}));
