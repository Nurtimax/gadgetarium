import { styled, Button } from "@mui/material";
const FOND_SIZE = {
  small: "10px",
  medium: "16px",
  large: "20px",
};

const Buttons = ({
  children,
  disabled,
  onClick,
  variant,
  fullWidth,
  size = "medium",
  ...props
}) => {
  return (
    <ButtonStyled
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      {...props}
      classes={{ root: "button" }}
      fullWidth={fullWidth}
      size={size}
    >
      {children}
    </ButtonStyled>
  );
};
export default Buttons;

const ButtonStyled = styled(Button)((props) => ({
  textTransform: "inherit",

  "&.button": {
    width: props.width || "290px",
    height: props.height || "43px",
    backgroundColor: props.backgroundcolor || "none",
    border: "1px solid #CB11AB",
    color: props.colors || "#CB11AB",
    fontSize: FOND_SIZE[props.size],
    borderRadius: props.borderRadius || "4px",
  },
  "&.button:hover": {
    backgroundColor: "#CB11AB",
    color: "#FFFFFF",
  },
}));
