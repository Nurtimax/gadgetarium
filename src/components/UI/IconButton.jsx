import React from "react";
import { Button, styled } from "@mui/material";
const IconButton = ({
  children,
  onClick,
  icon,
  fontSize,
  title,
  width,
  height,
  ...props
}) => {
  return (
    <ButtonStyled
      width={width}
      height={height}
      title={title}
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

const ButtonStyled = styled(Button)((props) => ({
  backgroundColor: "#E313BF",
  border: "none",
  color: "#fff",
  fontSize: props.fontSize || "14px",
  "&:hover": {
    border: "none",
    backgroundColor: "#CB11AB",
  },
  width: props.width || "250px",
  height: props.height || "40px",
}));
