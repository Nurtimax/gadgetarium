import React from "react";
import { Button, styled } from "@mui/material";
import { CartIcon } from "../../assets";

const IconButton = ({ children, width, bgColor, ...props }) => {
  return (
    <ButtonStyled
      variant="outlined"
      width={width}
      bgColor={bgColor}
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
  width: props.width || "200px",
  height: props.height || "45px",
  backgroundColor: props.bgColor || "#CB11AB",
  border: "none",
  color: "white",
  "&:hover": {
    border: "none",
    backgroundColor: props.bgColor || "#CB11AB",
  },
}));
