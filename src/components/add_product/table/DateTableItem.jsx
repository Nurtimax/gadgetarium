import { Box, styled } from "@mui/material";
import { format } from "date-fns";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const DateTableItem = () => {
  const { editData } = useSelector((state) => state.addProduct);
  const date = useMemo(() => {
    if (editData.date) {
      return format(new Date(editData.date), "dd.MM.yyyy");
    }
    return null;
  }, [editData.date]);

  return <StyledDateTableItem>{date}</StyledDateTableItem>;
};

export default DateTableItem;

const StyledDateTableItem = styled(Box)(() => ({
  padding: "28.5px",
}));
