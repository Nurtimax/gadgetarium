import { styled, Button as MuiButton } from "@mui/material";

const Button = ({
  children,
  disabled,
  onClick,
  variant,
  bgcolor,
  hover,
  width,
  height,
  active,
  ...props
}) => {
  return (
    <ButtonStyled
      type="submit"
      width={width}
      height={height}
      bgcolor={bgcolor}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      hover={hover}
      active={active}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
};
export default Button;

const ButtonStyled = styled(MuiButton)`
  text-transform: inherit;
  width: ${(props) => (props.width ? props.width : "290px")};
  height: ${(props) => (props.height ? props.height : "")};
  white-space: nowrap;
  font-size: 16px;

  &.MuiButton-contained {
    background: ${({ bgcolor }) => bgcolor || "#E20FBE"};

    border: none;
    color: #ffffff;
  }

  &.MuiButton-outlined {
    color: ${(props) => props.bgcolor || "#E313BF"};
    border-color: ${(props) => props.bgcolor || "#E313BF"};
  }

  &.MuiButton-text {
    color: ${(props) => (props.bgcolor ? "gray" : "#E313BF")};
    border-color: ${(props) => props.bgcolor || "#E313BF"};
  }
  &:hover {
    background: ${(props) => props.hover || "#CB11AB"};
    color: ${(props) => props.color || "#ffffff"};
  }
  &:active {
    background: ${(props) => props.active || "#E313BF"};
    border: none;
  }
  &.Mui-disabled {
    background-color: rgb(81, 81, 81);
    color: #fff;
    cursor: "not-drop";
    border: none;
  }
`;
