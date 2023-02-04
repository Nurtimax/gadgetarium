import { Box, styled, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavLinks = ({ page = [] }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = page.find((item) => `/${item.to}` === location.pathname);
  const tabsValue = params?.theme ? params.theme : page[0].theme;

  const [value, setValue] = useState(tabsValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const params = page.find((item) => item.theme === newValue);
    navigate(`${params.to}`);
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
        {page?.map((adminList) => (
          <TabStyled
            key={adminList.id}
            value={adminList.theme}
            label={
              <Link to={adminList.to}>
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
