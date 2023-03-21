import { Box, styled } from "@mui/material";
import React from "react";
import { DeleteIcon, EditIcon } from "../../../assets";

const TableCellEditAndDelete = () => {
  return (
    <StyledTableCellEditAndDelete className="flex-start gap2">
      <Box className="pointer edit_icon">
        <EditIcon />
      </Box>
      <Box className="pointer delete_icon">
        <DeleteIcon />
      </Box>
    </StyledTableCellEditAndDelete>
  );
};

export default TableCellEditAndDelete;

const StyledTableCellEditAndDelete = styled(Box)(() => ({
  height: "100%",
  width: " 100%",
  padding: "5px 0",
}));
