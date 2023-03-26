import { Box, styled } from "@mui/material";
import React from "react";

const ChooseColor = ({ color, checked, choosed }) => {
  return (
    <StyledChooseColor color={color.toString()}>
      <Box
        className={`${Number(checked) === Number(choosed) ? "actived" : ""}`}
      >
        <Box className="color" />
      </Box>
    </StyledChooseColor>
  );
};

export default ChooseColor;

const StyledChooseColor = styled(Box)(({ color, theme }) => ({
  "& .color": {
    background: color,
    width: "26px",
    height: "26px",
    borderRadius: "50%",
    boxShadow: "1px 1px 4px 1px rgba(0,0,0,0.2)",
    display: "flex",
    margin: "2px",
    cursor: "pointer",
  },
  "& .actived": {
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: "50%",
    boxShadow: "1px 1px 4px 1px rgba(0,0,0,0.2)",
  },
}));
