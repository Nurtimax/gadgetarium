import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { InputAdornment, InputBase, styled } from "@mui/material";
import DateFnsUtils from "@date-io/date-fns";
import { ru } from "date-fns/locale";
import { DateIcon } from "../../assets";
import { useState } from "react";

export default function DatePicker({ date, setDate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const openCalendar = (e) => {
    setIsOpen(true);
    setAnchorEl(e.currentTarget);
  };

  return (
    <LocalizationProvider dateAdapter={DateFnsUtils} locale={ru}>
      <StyledDateRangePicker
        calendars={1}
        value={date}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onChange={(nev) => {
          setDate(nev);
        }}
        PaperProps={{ classes: { root: "paper" } }}
        renderInput={({ inputProps, startProps }, endProps) => {
          return (
            <>
              <InputBase
                {...startProps}
                onFocus={openCalendar}
                inputProps={{ ...inputProps, placeholder: "От" }}
                endAdornment={
                  <InputAdornment position="start">
                    <DateIcon />
                  </InputAdornment>
                }
              />

              <InputBase
                {...endProps}
                onFocus={openCalendar}
                inputProps={{ ...inputProps, placeholder: "До" }}
                endAdornment={
                  <InputAdornment position="start">
                    <DateIcon />
                  </InputAdornment>
                }
              />
            </>
          );
        }}
        PopperProps={{
          anchorEl,
        }}
      />
    </LocalizationProvider>
  );
}
const StyledDateRangePicker = styled(DateRangePicker)(({ theme }) => ({
  padding: "20px 0 0 0 ",
  display: "flex",
  gap: "20px",

  "& input": {
    width: "100px",
    padding: "0",
    height: "37px",
  },

  // "& .MuiFormLabel-root": {
  //   transform: "translate(14px, 65%) !important",
  //   lineHeight: "1",
  // },

  "& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected": {
    background: theme.palette.secondary.main,
  },
  "& .MuiDateRangePickerDay-root.MuiDateRangePickerDay-rangeIntervalDayHighlight":
    {
      background: "transparent",
    },
  "& .MuiDateRangePickerDay-root.MuiDateRangePickerDay-rangeIntervalDayHighlight:not(.MuiDateRangePickerDay-rangeIntervalDayHighlightEnd):not(.MuiDateRangePickerDay-rangeIntervalDayHighlightStart)":
    {
      textDecoration: "line-through",
      textDecorationColor: "#C4C4C4",
    },
  "& .MuiDateRangePickerDay-root.MuiDateRangePickerDay-rangeIntervalDayHighlight.MuiDateRangePickerDay-rangeIntervalDayHighlightEnd":
    {
      opacity: 1,
    },
  "& .MuiDateRangePickerDay-root.MuiDateRangePickerDay-rangeIntervalDayHighlight.MuiDateRangePickerDay-rangeIntervalDayHighlightStart":
    {
      opacity: 1,
    },
  "& .MuiButtonBase-root.MuiPickersDay-root.MuiDateRangePickerDay-day.MuiDateRangePickerDay-notSelectedDate.MuiDateRangePickerDay-dayInsideRangeInterval":
    {
      color: "#C4C4C4",
    },
}));
