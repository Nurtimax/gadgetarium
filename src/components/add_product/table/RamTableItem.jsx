import { Box, styled } from "@mui/material";
import React from "react";

const RamTableItem = () => {
  return <StyledRamTableItem>RAM 8ГБ</StyledRamTableItem>;
};

export default RamTableItem;

const StyledRamTableItem = styled(Box)(() => ({
  padding: "20px",
}));
