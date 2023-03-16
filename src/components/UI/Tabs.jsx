import { Tabs as MuiTabs, Tab, Box, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Tabs({ tabs = [] }) {
  const [query, setQuery] = useState(tabs[0].param);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const route =
      location.pathname.split("/")[location.pathname.split("/").length - 1];

    setQuery(route);
  }, [location.pathname]);

  const handleChange = (_, newParam) => {
    setQuery(newParam);
    navigate(newParam);
  };

  return (
    <>
      <BoxStyled>
        <TabsStyled
          value={query}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          classes={{ root: "root", flexContainer: "flex" }}
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.label}
              label={<Link to={tab.param}>{tab.label}</Link>}
              value={tab.param}
              className="tab"
            />
          ))}
        </TabsStyled>
      </BoxStyled>
    </>
  );
}

export const BoxStyled = styled(Box)(() => ({
  borderBottom: "1px solid #CDCDCD",
  display: "flex",
  gap: "100px",
}));

export const TabsStyled = styled(MuiTabs)(() => ({
  "& .flex": {
    display: "flex",
    gap: "1.8rem",
  },
  "& .tab": {
    fontFamily: "Inter",
    textTransform: "none",
    color: "#292929",
    fontSize: "18px",
    fontWeight: "500",
  },
}));
