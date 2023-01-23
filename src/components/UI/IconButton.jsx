import React from "react";
import { Button, styled } from "@mui/material";
const IconButton = ({ children, onClick, icon, fontSize, ...props }) => {
  return (
    <ButtonStyled
      onClick={onClick}
      fontSize={fontSize}
      classes={{ root: "button" }}
      {...props}
      startIcon={icon}
    >
      {children}
    </ButtonStyled>
  );
};

export default IconButton;

const ButtonStyled = styled(Button)(() => ({
  width: "200px",
  height: "45px",
  backgroundColor: "#E313BF",
  border: "none",
  color: "#fff",
  fontSize: "14px",
  "&:hover": {
    border: "none",
    backgroundColor: "#CB11AB",
  },
}));
