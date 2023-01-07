import { Button, styled } from "@mui/material";
import { CartIcon } from "../../../assets";
const FOND_SIZE = {
  small: "12px",
  medium: "16px",
  large: "20px",
};
const IconButton = ({
  variant,
  disabled,
  onClick,
  size = "small",
  ...props
}) => {
  return (
    <ButtonStyled
      variant={variant || "contained"}
      disabled={disabled}
      onClick={onClick}
      size={size}
      {...props}
      classes={{ root: "button" }}
      startIcon={<CartIcon />}
    >
      {props.children}
    </ButtonStyled>
  );
};
export default IconButton;
const ButtonStyled = styled(Button)((props) => ({
  background: props.background || "#CB11AB",
  "&.button": {
    width: props.width || "151px",
    height: props.height || "41px",
    border: "none",
    // color: props.colors || "white",
    borderRadius: props.borderradius || "4px",
    fontSize: FOND_SIZE[props.size],
  },
  "&.button:hover": {
    backgroundColor: "#C90EA9",
    color: "white",
  },
  "&.button:active": {
    backgroundColor: "#2FC509",
    color: "white",
  },
}));
