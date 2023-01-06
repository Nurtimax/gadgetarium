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
  ({ value, onChange, fullWidth, icon, position = "end", ...props }, ref) => {
    return (
      <FormControl fullWidth={fullWidth}>
        <OutlinedInputStyled
          id="outlined-adornment-search"
          {...props}
          value={value}
          onChange={onChange}
          classes={{ root: "outlined-input", focused: "focused" }}
          ref={ref}
          endAdornment={
            <InputAdornment position={position}>
              <IconButton>{!icon && <SearchIcon />}</IconButton>
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
  ({ width, border, fill, borderRadius, backgroundColor }) => ({
    "&.outlined-input": {
      fill: fill || "#FFFFFF",
      width: width || "100%",
      borderRadius: borderRadius || "10px",
      "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
        border: border || `1px solid  #FFFFFF`,
      },
      "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
        height: "7px",
      },
      "& ::placeholder": {
        color: "#FFFFFF",
      },
    },
    "&.outlined-input:hover": {
      fill: fill || "#969696",
      backgroundColor: backgroundColor || "#FAFAFA",
      "& ::placeholder": {
        color: "#91969E",
      },
    },
    "&.outlined-input.focused": {
      fill: fill || "#CB11AB",
      backgroundColor: backgroundColor || "#FAFAFA",
      "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
        border: border || `1px solid  #FAFAFA`,
      },
      "& ::placeholder": {
        color: "#91969E",
      },
    },
  })
);
