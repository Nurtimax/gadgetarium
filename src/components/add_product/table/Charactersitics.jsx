import { Box, styled } from "@mui/material";
import React from "react";

const Charactersitics = ({ item, id }) => {
  return <StyledCharactersitics>{item[id]}</StyledCharactersitics>;
};

export default Charactersitics;

const StyledCharactersitics = styled(Box)(() => ({
  padding: "28.5px",
}));
