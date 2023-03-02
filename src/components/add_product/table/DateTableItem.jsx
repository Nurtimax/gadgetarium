import { Box, styled } from "@mui/material";
import React from "react";

const DateTableItem = () => {
  return <StyledDateTableItem>12.12.2020</StyledDateTableItem>;
};

export default DateTableItem;

const StyledDateTableItem = styled(Box)(() => ({
  padding: "20px",
}));
