import { styled, Button } from "@mui/material";

const MyButton = ({
  children,
  disabled,
  onClick,
  variant,
  bgColor,
  ...props
}) => {
  return (
    <ButtonStyled
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      classes={{ root: "button" }}
      color="secondary"
      bgColor={bgColor}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
};
export default MyButton;

const ButtonStyled = styled(Button)((props) => ({
  textTransform: "inherit",
  border: "1px solid #CB11AB",
  color: props.theme.palette.secondary,
  width: props.width || "290px",
  height: props.height || "43px",
  backgroundColor: props.bgColor || "",

  "&:hover": {
    backgroundColor: "#CB11AB",
    color: "#FFFFFF",
  },
  "&:active": {
    backgroundColor: "#CB11AB",
    color: "#FFFFFF",
  },
  "&:disabled": {
    backgroundColor: "rgba(0,0,0,0.12)",
    color: "dddddd",
    cursor: "not-drop",
  },
}));
