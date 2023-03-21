import { Box, styled } from "@mui/material";
import React from "react";

const TableCellProductCount = ({ productCount }) => {
  return (
    <StyledTableCellProductCount className="flex-start">
      Кол-во товара {productCount}шт.
    </StyledTableCellProductCount>
  );
};

export default TableCellProductCount;

const StyledTableCellProductCount = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  padding: "5px 0",
}));
