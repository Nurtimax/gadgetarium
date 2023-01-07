import React, { forwardRef } from "react";
import { InputAdornment, OutlinedInput, styled } from "@mui/material";
import { SearchIcon } from "../../assets/index.js";

const Search = forwardRef(
  (
    { value, onChange, fullWidth, position = "end", placeholder, ...props },
    ref
  ) => {
    return (
      <OutlinedInputStyled
        {...props}
        value={value}
        onChange={onChange}
        fullWidth={fullWidth}
        placeholder={placeholder}
        classes={{
          root: "outlined-input",
          focused: "focused",
          notchedOutline: "notchedOutline",
          input: "input",
        }}
        ref={ref}
        endAdornment={
          <InputAdornment position={position}>
            <SearchIcon />
          </InputAdornment>
        }
      />
    );
  }
);

Search.displayName = Search;

export default Search;

const OutlinedInputStyled = styled(OutlinedInput)(
  ({ width, border, fill, borderRadius, showBackground = "false" }) => ({
    "&.outlined-input": {
      fill: showBackground ? "#969696" : "#FFFFFF",
      width: width || "784px;",
      borderRadius: borderRadius || "10px",
      backgroundColor: showBackground ? "#FFFFFF" : "none",
      "& .notchedOutline": {
        border: showBackground ? "1px solid #CDCDCD" : "1px solid #FFFFFF",
      },
      "& .input": {
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
      "& .notchedOutline": {
        border: border || `1px solid  #CB11AB`,
      },
      "& ::placeholder": {
        color: "#91969E",
      },
    },
  })
);
