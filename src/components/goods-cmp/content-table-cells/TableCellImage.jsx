import { Box, styled } from "@mui/material";
import React from "react";

const TableCellImage = ({ image }) => {
  return (
    <StyledTableCellImage className="flex-start">
      <img src={image} alt="" className="image" />
    </StyledTableCellImage>
  );
};

export default TableCellImage;

const StyledTableCellImage = styled(Box)(() => ({
  width: "100%",
  height: "55px",
  "& .image": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    mixBlendMode: "darken",
  },
}));
