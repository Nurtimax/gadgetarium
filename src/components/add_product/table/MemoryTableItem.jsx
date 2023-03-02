import { Box, styled } from "@mui/material";
import React from "react";

const MemoryTableItem = () => {
  return <StyledMemoryTableItem>128 ГБ</StyledMemoryTableItem>;
};

export default MemoryTableItem;

const StyledMemoryTableItem = styled(Box)(() => ({
  padding: "20px",
}));
