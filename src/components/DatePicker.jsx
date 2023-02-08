import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { InputAdornment, styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import DateFnsUtils from "@date-io/date-fns";
import { ru } from "date-fns/locale";
import { DateIcon } from "../assets";
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
        startText="От"
        endText="До"
        LeftArrowButton
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onChange={(nev) => {
          setDate(nev);
        }}
        PaperProps={{ classes: { root: "paper" } }}
        renderInput={(startProps, endProps) => (
          <>
            <TextField
              {...startProps}
              onFocus={openCalendar}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <DateIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              onFocus={openCalendar}
              {...endProps}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <DateIcon />
                  </InputAdornment>
                ),
              }}
            />
          </>
        )}
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

  "& .MuiTypography-subtitle1": {
    textTransform: "capitalize",
  },
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
