import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  styled,
} from "@mui/material";
import React, { forwardRef } from "react";
import { SearchIcon } from "../../assets/index.js";

const Search = forwardRef(
  (
    { value, onChange, fullWidth, position = "end", placeholder, ...props },
    ref
  ) => {
    // console.log(showBackground);
    return (
      <FormControl fullWidth={fullWidth}>
        <OutlinedInputStyled
          id="outlined-adornment-search"
          {...props}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          classes={{
            root: "outlined-input",
            focused: "focused",
          }}
          ref={ref}
          endAdornment={
            <InputAdornment position={position}>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    );
  }
);

Search.displayName = Search;

export default Search;

const OutlinedInputStyled = styled(OutlinedInput)(
  ({ width, border, fill, borderRadius, showBackground = "false" }) => ({
    "&.outlined-input": {
      fill: showBackground ? "#969696" : "#FFFFFF",
      width: width || "100%",
      borderRadius: borderRadius || "10px",
      backgroundColor: showBackground ? "#FFFFFF" : "none",
      "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
        border: showBackground ? "1px solid #CDCDCD" : "1px solid #FFFFFF",
      },
      "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
        height: "7px",
      },
      "& ::placeholder": {
        color: showBackground ? "#91969E" : "#FFFFFF",
      },
    },
    "&.outlined-input:hover": {
      fill: fill || "#969696",
      backgroundColor: "#FAFAFA",
      "& ::placeholder": {
        color: "#91969E",
      },
    },
    "&.outlined-input.focused": {
      fill: fill || "#CB11AB",
      backgroundColor: "#FAFAFA",
      "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
        border: border || `1px solid  #CB11AB`,
      },
      "& ::placeholder": {
        color: "#91969E",
      },
    },
  })
);
