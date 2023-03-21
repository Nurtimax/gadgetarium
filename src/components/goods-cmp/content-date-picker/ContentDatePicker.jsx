import { Box, Grid, styled } from "@mui/material";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actionGoodSlice } from "../../../redux/slices/goods-slice";
import DatePicker from "../../orders/DatePicker";

const ContentDatePicker = () => {
  const [dates, setDates] = useState([null, null]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (dates[0]) {
      const dateFormat = format(new Date(dates[0]), "yyyy-mm-dd");
      dispatch(
        actionGoodSlice.changeParams({ key: "startDate", value: dateFormat })
      );
    }
  }, [dates[0]]);

  useEffect(() => {
    if (dates[1]) {
      const dateFormat = format(new Date(dates[1]), "yyyy-mm-dd");
      dispatch(
        actionGoodSlice.changeParams({ key: "endDate", value: dateFormat })
      );
    }
  }, [dates[1]]);

  return (
    <Grid item xs={12}>
      <StyledContentDatePicker>
        <DatePicker date={dates} setDate={setDates} />
      </StyledContentDatePicker>
    </Grid>
  );
};

export default ContentDatePicker;

const StyledContentDatePicker = styled(Box)(() => ({}));
