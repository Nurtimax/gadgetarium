import { Box, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const TableCellImage = ({ productImage, id }) => {
  return (
    <StyledTableCellImage className="flex-start">
      <Link to={`${id}/description`}>
        <img src={productImage} alt="" className="image" />
      </Link>
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
