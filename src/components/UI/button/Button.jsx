import { styled, Button as MuiButton } from "@mui/material";

function Button({
  children,
  disabled,
  onClick,
  variant,
  bgcolor,
  hover,
  active,
  ...props
}) {
  return (
    <ButtonStyled
      bgcolor={bgcolor}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      className={hover ? "btnHover" : active ? "btnActive" : "btn"}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
}
export default Button;

const ButtonStyled = styled(MuiButton)`
  text-transform: inherit;
  width: ${(props) => (props.width ? props.width : "290px")};
  height: ${(props) => (props.height ? props.height : "")};
  white-space: nowrap;
  &.MuiButton-contained {
    background: ${({ bgcolor }) => bgcolor || "#E20FBE"};
    font-size: 14px;
    border: none;
    color: #ffffff;
  }

  &.MuiButton-outlined {
    color: ${(props) => props.bgcolor || "#E313BF"};
    border-color: ${(props) => props.bgcolor || "#E313BF"};

    &:hover {
      background: ${(props) => props.bgcolor || "#CB11AB"};
      color: #ffffff;
    }
    &:active {
      background: ${({ bgcolor }) => (bgcolor ? "#2fc509" : "#E313BF")};
      border: none;
    }
    &:disabled {
      background-color: rgba(0, 0, 0, 0.12);
      color: #6a6363;
      box-shadow: none;
      cursor: "not-drop";
      border: none;
    }
  }

  &.MuiButton-text {
    color: ${(props) => (props.bgcolor ? "gray" : "#E313BF")};
    border-color: ${(props) => props.bgcolor || "#E313BF"};
  }
  &:hover {
    background: ${(props) => props.bgcolor || "#CB11AB"};
    color: #ffffff;
  }
  &:active {
    background: ${({ bgcolor }) => (bgcolor ? "#969696" : "#E313BF")};
  }
  &.Mui-disabled {
    background-color: rgba(0, 0, 0, 0.12);
    color: #6a6363;
    box-shadow: none;
    cursor: "not-drop";
    border: none;
  }
`;
