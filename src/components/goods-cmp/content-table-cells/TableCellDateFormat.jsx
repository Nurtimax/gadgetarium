import { Box, styled, Typography } from "@mui/material";
import { format } from "date-fns";
import React from "react";

const TableCellDateFormat = ({ createAt }) => {
  const dateFormat = format(new Date(createAt), "dd.mm.yyyy");
  const dateHourFormat = format(new Date(createAt), "hh:mm");
  return (
    <StyledTableCellDateFormat className="flex-start column">
      <Typography classes={{ root: "date" }} variant="body1">
        {dateFormat}
      </Typography>
      <Typography classes={{ root: "date" }} variant="body2">
        {dateHourFormat}
      </Typography>
    </StyledTableCellDateFormat>
  );
};

export default TableCellDateFormat;

const StyledTableCellDateFormat = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  padding: "5px 0",
  "& .date": {
    padding: 0,
  },
}));
