import { Box, styled } from "@mui/material";
import React, { useEffect } from "react";
import { memo } from "react";
import { useState } from "react";
import Button from "../button/Button";

const Tabs = ({ contents = [], onChange, checked }) => {
  const [isChecked, setIsChecked] = useState(1);

  const handleChangeButtonTab = (id, label) => {
    setIsChecked(id);
    onChange(label);
  };
  useEffect(() => {
    if (checked) {
      setIsChecked(checked);
    }
  }, [checked]);

  useEffect(() => {
    onChange(contents[0].label);
  }, []);

  return (
    <StyledTabs>
      {contents.map((tab) => (
        <StyledButton
          key={tab.id}
          className={`${isChecked === tab.id ? "active" : ""}`}
          onClick={() => handleChangeButtonTab(tab.id, tab.label)}
        >
          {tab.label}
        </StyledButton>
      ))}
    </StyledTabs>
  );
};

export default memo(Tabs);

const StyledTabs = styled(Box)(() => ({
  display: "flex",
  gap: "12px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: 127,
  padding: "8px 20px",
  color: `${theme.palette.primary.light} !important`,
  background: "#E0E2E7",
  fontWeight: 600,
  fontSize: "16px",
  "&:hover": {
    background: "rgba(0,0,0,0.2)",
  },
  "&.active": {
    background: `${theme.palette.primary.light} !important`,
    color: "white !important",
  },
}));
