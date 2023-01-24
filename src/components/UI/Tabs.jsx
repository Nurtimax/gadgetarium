import { Tabs as MuiTabs, Tab, Box, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function TabPanel({ label, children, param, ...other }) {
  const [searchParams] = useSearchParams();
  const contentStatus = searchParams.get(param) === label;
  if (contentStatus) {
    return <div {...other}>{children}</div>;
  }
}

export default function Tabs({ param, tabs }) {
  const [query, setQuery] = useState(tabs[0].param);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setQuery(searchParams.get(param));
  }, []);

  const handleChange = (_, newParam) => {
    setQuery(newParam);
    setSearchParams({ [param]: newParam });
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
              label={tab.label}
              value={tab.param}
              className="tab"
            />
          ))}
        </TabsStyled>
      </BoxStyled>
      {tabs.map((item) => (
        <TabPanel label={item.param} key={item.label} param={param}>
          {item.Component}
        </TabPanel>
      ))}
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
