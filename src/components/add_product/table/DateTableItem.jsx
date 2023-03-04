import { Box, styled, Typography } from "@mui/material";
import { format } from "date-fns";
import React from "react";
import { useSelector } from "react-redux";

const DateTableItem = ({ id }) => {
  const { editData } = useSelector((state) => state.addProduct);
  const date = format(editData.date[id], "dd.MM.yyyy");
  const hour = format(editData.date[id], "HH:mm");
  return (
    <StyledDateTableItem>
      <Typography classes={{ root: "date_text" }}>{date}</Typography>
      <Typography classes={{ root: "date_text" }}> {hour}</Typography>
    </StyledDateTableItem>
  );
};

export default DateTableItem;

const StyledDateTableItem = styled(Box)(() => ({
  padding: "15px",
  "& .date_text": {
    padding: 0,
  },
}));
