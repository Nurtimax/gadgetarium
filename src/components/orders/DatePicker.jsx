import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import {
  Box,
  FormLabel,
  InputAdornment,
  InputBase,
  styled,
} from "@mui/material";
import DateFnsUtils from "@date-io/date-fns";
import { ru } from "date-fns/locale";
import { DateIcon } from "../../assets";
import { useState } from "react";

export default function DatePicker({
  date,
  setDate,
  FormLabelTitle = [],
  ...rest
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const openCalendar = (e) => {
    setIsOpen(true);
    setAnchorEl(e.currentTarget);
  };

  return (
    <LocalizationProvider dateAdapter={DateFnsUtils} adapterLocale={ru}>
      <StyledDateRangePicker
        calendars={1}
        value={date}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onChange={(nev) => {
          if (
            !String(nev[0]).includes("Invalid Date") &&
            !String(nev[1]).includes("Invalid Date")
          ) {
            setDate(nev);
          }
        }}
        {...rest}
        PaperProps={{ classes: { root: "paper" } }}
        renderInput={({ inputProps, startProps }, endProps) => {
          return (
            <>
              <Box className="align-start column">
                {Boolean(FormLabelTitle.length) && (
                  <FormLabel required>{FormLabelTitle[0]}</FormLabel>
                )}
                <InputBase
                  {...startProps}
                  focused={isOpen.toString()}
                  onFocus={openCalendar}
                  inputProps={{
                    ...inputProps,
                    placeholder: "От",
                  }}
                  endAdornment={
                    <InputAdornment position="start">
                      <StyledDateIcon onClick={openCalendar} />
                    </InputAdornment>
                  }
                />
              </Box>

              <Box className="align-start column">
                {Boolean(FormLabelTitle.length) && (
                  <FormLabel required>{FormLabelTitle[1]}</FormLabel>
                )}
                <InputBase
                  {...endProps}
                  onFocus={openCalendar}
                  focused={isOpen.toString()}
                  inputProps={{ ...endProps.inputProps, placeholder: "До" }}
                  endAdornment={
                    <InputAdornment position="start">
                      <StyledDateIcon onClick={openCalendar} />
                    </InputAdornment>
                  }
                />
              </Box>
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

const StyledDateIcon = styled(DateIcon)(() => ({
  cursor: "pointer",
}));

const StyledDateRangePicker = styled(DateRangePicker)(({ theme }) => ({
  padding: "20px 0 0 0 ",
  display: "flex",
  gap: "20px",

  "& input": {
    padding: "0 0 0 15px",
  },

  "& .MuiInputBase-root": {
    border: "1.3px solid #91969E",
    width: "139px",
    height: "36px",
    borderRadius: "4px",
  },

  "& .MuiInputAdornment-root": {
    marginRight: "20px",
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
