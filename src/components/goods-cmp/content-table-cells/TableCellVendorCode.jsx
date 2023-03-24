import { Box, styled } from "@mui/material";
import React from "react";

const TableCellVendorCode = ({ productVendorCode }) => {
  return (
    <StyledTableCellVendorCode className="flex-start">
      {productVendorCode}
    </StyledTableCellVendorCode>
  );
};

export default TableCellVendorCode;

const StyledTableCellVendorCode = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  padding: "5px 0",
}));
