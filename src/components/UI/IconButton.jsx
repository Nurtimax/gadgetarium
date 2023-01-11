import React from "react";
import { Button, styled } from "@mui/material";
const IconButton = ({
  children,
  onClick,
  width,
  bgColor,
  icon,
  fontSize,
  ...props
}) => {
  return (
    <ButtonStyled
      onClick={onClick}
      width={width}
      bgColor={bgColor}
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

const ButtonStyled = styled(Button)((props) => ({
  width: props.width || "200px",
  height: props.height || "45px",
  backgroundColor: props.bgColor || "#E313BF",
  border: "none",
  color: "#fff",
  fontSize: props.fontSize || "14px",
  "&:hover": {
    border: "none",
    backgroundColor: props.bgColor || "#CB11AB",
  },
}));
