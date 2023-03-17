import { Box, styled } from "@mui/material";
import { format } from "date-fns";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const DateTableItem = () => {
  const { values } = useSelector((state) => state.addProduct);
  const date = useMemo(() => {
    if (values.dateOfIssue) {
      return format(new Date(values.dateOfIssue), "dd.MM.yyyy");
    }
    return null;
  }, [values.dateOfIssue]);

  return <StyledDateTableItem>{date}</StyledDateTableItem>;
};

export default DateTableItem;

const StyledDateTableItem = styled(Box)(() => ({
  padding: "28.5px",
}));
