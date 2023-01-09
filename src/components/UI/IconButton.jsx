import React from "react";
import { Button, styled } from "@mui/material";
import { CartIcon } from "../../assets";

const IconButton = ({ children, variant, ...props }) => {
  return (
    <ButtonStyled
      variant={variant}
      classes={{ root: "button" }}
      startIcon={<CartIcon />}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
};

export default IconButton;

const ButtonStyled = styled(Button)((props) => ({
  // background: props.background || "#CB11AB",
  width: props.width || "151px",
  height: props.height || "41px",
  border: "none",
  color: props.colors || "white",
  borderRadius: props.borderradius || "4px",

  "&.button:hover": {
    backgroundColor: "#C90EA9",
    color: "white",
  },
  "&.button:active": {
    backgroundColor: "#2FC509",
    color: "white",
  },
}));
