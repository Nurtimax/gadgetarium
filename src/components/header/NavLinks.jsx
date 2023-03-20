import { styled, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavLinks = ({ page = [], ...rest }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = page.find((item) => `/${item.to}` === location.pathname);
  const tabsValue = params?.theme ? params.theme : page[0].theme;

  const isChoosed = useMemo(() => {
    return params?.theme;
  }, [params?.theme]);

  const [value, setValue] = useState(tabsValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const params = page.find((item) => item.theme === newValue);
    navigate(`${params.to}`);
  };

  useEffect(() => {
    setValue(
      location.pathname === "/"
        ? "Главная"
        : location.pathname === "/admin"
        ? "Товары"
        : value
    );
  }, [location.pathname, value]);

  return (
    <Tabs
      {...rest}
      textColor="inherit"
      value={isChoosed ? isChoosed : value}
      onChange={handleChange}
      indicatorColor="none"
      classes={{ flexContainer: "gap", root: "navlink_tabs" }}
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
  );
};

export default NavLinks;

const TabStyled = styled(Tab)(() => ({
  "&.Mui-selected": {
    background: "#f8f7f733",
    borderRadius: "3px",
  },
  "& .MuiButtonBase-root": {},
}));
