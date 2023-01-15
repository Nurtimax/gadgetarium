import { Box, styled, Tab, Tabs } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ setValue, value, pageIsAdmin }) => {
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
            label={<Link to={adminList.theme}>{adminList.theme}</Link>}
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
