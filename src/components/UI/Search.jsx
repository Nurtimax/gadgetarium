import React from "react";
import { InputAdornment, OutlinedInput, styled } from "@mui/material";
import { SearchIcon } from "../../assets";

const Search = ({
  value,
  onChange,
  position = "end",
  showBackground = false,
  placeholder,
  onKeyUp,
  ...rest
}) => {
  return (
    <OutlinedInputStyled
      {...rest}
      value={value}
      onKeyUp={onKeyUp}
      onChange={onChange}
      placeholder={placeholder}
      className={showBackground ? "showBackground" : ""}
      classes={{
        root: "outlined-input",
        focused: "focused",
        notchedOutline: showBackground
          ? "notchedOutlineShow"
          : "notchedOutline",
        input: "input",
      }}
      endAdornment={
        <InputAdornment position={position}>
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
};
export default Search;

const OutlinedInputStyled = styled(OutlinedInput)(
  ({ width, border, fill, borderRadius }) => ({
    color: "white",
    "&.outlined-input": {
      fill: "#FFFFFF",
      width: width || "784px",
      borderRadius: borderRadius || "10px",
      backgroundColor: "none",
      "& .notchedOutline": {
        border: "1px solid #FFFFFF",
      },
      "& .input": {
        height: "7px",
      },
      "& ::placeholder": {
        color: "#FFFFFF",
      },
    },
    "&.outlined-input:hover": {
      fill: fill || "#969696",
      color: "black",
      backgroundColor: "#FAFAFA",
      "& ::placeholder": {
        color: "#91969E",
      },
    },
    "&.outlined-input.focused": {
      fill: fill || "#CB11AB",
      backgroundColor: "#FAFAFA",
      color: "black",
    },
    "&.showBackground": {
      backgroundColor: "white",
      fill: "#969696",
      color: "black",
      "& ::placeholder": {
        color: "#91969E",
        "& .notchedOutlineShow": {
          border: "1px solid #CDCDCD",
        },
      },
    },
    "&.showBackground:hover": {
      "& .notchedOutlineShow": {
        border: "1px solid #CDCDCD",
      },
    },
    "&.showBackground.focused": {
      fill: fill || "#969696",
      color: "black",
      "& .notchedOutlineShow": {
        border: border || `1px solid   #CB11AB`,
      },
    },
  })
);
