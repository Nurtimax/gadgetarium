import { styled, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { ArrowOrderIcon, ArrowOrderIconRotate } from "../../assets";
import {
  titlesOrderPopUpOne,
  titlesOrderPopUpTwo,
} from "../../utils/constants";
import DropDown from "../UI/DropDown";

const Select = ({ status, designOrder }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const openPopUpHandler = (e) => {
    setOpen(true);
    setAnchorEl(e.currentTarget);
  };

  return (
    <div>
      <StyledTextStatus onClick={openPopUpHandler} variant="span">
        {status} {open ? <ArrowOrderIconRotate /> : <ArrowOrderIcon />}
      </StyledTextStatus>

      {open && (
        <StyledDropDown
          vertical="top"
          horizontal="center"
          open={open}
          handleClose={handleClose}
          anchorEl={anchorEl}
        >
          {designOrder === "Самовывоз"
            ? titlesOrderPopUpOne.map((text) => <li key={text}>{text}</li>)
            : titlesOrderPopUpTwo.map((text, i) => <li key={i}>{text}</li>)}
        </StyledDropDown>
      )}
    </div>
  );
};

export default Select;

const StyledTextStatus = styled(Typography)(() => ({
  cursor: "pointer",
}));

const StyledDropDown = styled(DropDown)(({ theme }) => ({
  "& .MuiPaper-root": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },

  " ul": {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "14px",
    color: theme.palette.primary.dark,
    textAlign: "left",

    " li": {
      cursor: "pointer",
    },
  },
}));
