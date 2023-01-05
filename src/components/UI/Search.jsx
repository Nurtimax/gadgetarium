import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  styled,
} from "@mui/material";
import React from "react";
import { SearchIcon } from "../../assets/index.js";

const Search = ({ label, ...props }) => {
  return (
    <FormControlStyled classes={{ root: "search", placeholder: "placeholder" }}>
      {label && (
        <InputLabel htmlFor="outlined-adornment-search">{label}</InputLabel>
      )}
      <OutlinedInputStyled
        id="outlined-adornment-search"
        {...props}
        endAdornment={
          <InputAdornment position="end">
            <IconButtonStyled>
              <SearchIconStyled classes={{ root: "search-icon" }} />
            </IconButtonStyled>
          </InputAdornment>
        }
        label={label}
      />
    </FormControlStyled>
  );
};

export default Search;

const FormControlStyled = styled(FormControl)(() => ({
  "&.search": {
    fill: "#FFFFFF",
    "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
      border: `1px solid  #FFFFFF`,
      borderRadius: "10px",
    },
  },
  "& ::placeholder": {
    color: "#FFFFFF",
  },
}));
const OutlinedInputStyled = styled(OutlinedInput)(() => ({}));
const IconButtonStyled = styled(IconButton)(() => ({
  backgroundColor: "none",
}));
const SearchIconStyled = styled(SearchIcon)(() => ({
  "&.search-icon": {
    fill: "red",
  },
}));
