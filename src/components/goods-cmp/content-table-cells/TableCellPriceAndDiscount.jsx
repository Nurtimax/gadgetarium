import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { priceProductSeparate } from "../../../utils/helpers/general";

const TableCellPriceAndDiscount = ({ productPrice, amountOfDiscount }) => {
  return (
    <StyledTableCellPriceAndDiscount className="flex-start column">
      <Box>
        <Typography classes={{ root: "price" }} variant="body1">
          {priceProductSeparate(productPrice)}c
        </Typography>
        <Typography classes={{ root: "discount" }} variant="body2">
          {amountOfDiscount ? `${amountOfDiscount}%` : null}
        </Typography>
      </Box>
    </StyledTableCellPriceAndDiscount>
  );
};

export default TableCellPriceAndDiscount;

const StyledTableCellPriceAndDiscount = styled(Box)(({ theme }) => ({
  padding: "5px 0",
  width: "100%",
  height: "100%",
  "& .price, .discount": {
    padding: 0,
    color: theme.palette.secondary.light,
  },
  "& .discount": {
    color: "red",
  },
}));
