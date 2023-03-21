import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { priceProductSeparate } from "../../../utils/helpers/general";

const TableCellCurrentPrice = ({ currentPrice }) => {
  return (
    <StyledTableCellCurrentPrice className="flex-start">
      <Typography classes={{ root: "current_price" }} variant="body1">
        {priceProductSeparate(currentPrice)}c
      </Typography>
    </StyledTableCellCurrentPrice>
  );
};

export default TableCellCurrentPrice;

const StyledTableCellCurrentPrice = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  padding: "5px 0",
  "& .current_price": {
    padding: 0,
    color: theme.palette.secondary.light,
  },
}));
