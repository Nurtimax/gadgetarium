import { styled, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { ArrowOrderIcon, ArrowOrderIconRotate } from "../../assets";
import {
  titlesOrderPopUpOne,
  titlesOrderPopUpTwo,
} from "../../utils/constants";
import { checkInOrderStatus } from "../../utils/helpers/general";
import DropDown from "../UI/DropDown";

const Select = ({ orderStatus, orderType }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState("");

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const openPopUpHandler = (e) => {
    setOpen(true);
    setAnchorEl(e.currentTarget);
  };

  const selectHandler = (e) => {
    setValue(e.target.innerHTML);
    setOpen(false);
  };

  return (
    <div>
      <StyledTextStatus onClick={openPopUpHandler} variant="span">
        {value ? value : checkInOrderStatus(orderStatus)}
        {open ? <ArrowOrderIconRotate /> : <ArrowOrderIcon />}
      </StyledTextStatus>

      {open && (
        <StyledDropDown
          vertical="top"
          horizontal="right"
          open={open}
          handleClose={handleClose}
          anchorEl={anchorEl}
        >
          {orderType === "PICKUP"
            ? titlesOrderPopUpOne.map((item, i) => (
                <li onClick={selectHandler} key={i}>
                  {item.text}
                </li>
              ))
            : titlesOrderPopUpTwo.map((item, i) => (
                <li onClick={selectHandler} key={i}>
                  {item.text}
                </li>
              ))}
        </StyledDropDown>
      )}
    </div>
  );
};

export default Select;

const StyledTextStatus = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  color: theme.palette.secondary.dark,
  "& svg": {
    marginLeft: "5px",
  },
}));

const StyledDropDown = styled(DropDown)(({ theme }) => ({
  "& .MuiPaper-root": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 40px 20px 20px",
  },

  "& .MuiList-root": {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "14px",
    color: theme.palette.primary.main,
    textAlign: "left",

    " li": {
      cursor: "pointer",
    },
    " li:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));
