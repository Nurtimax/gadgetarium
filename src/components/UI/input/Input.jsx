import { InputBase, styled } from "@mui/material";
import { forwardRef } from "react";

const Input = forwardRef(({ value, onChange, error, ...props }, ref) => {
  return (
    <InputStyled
      {...props}
      value={value}
      onChange={onChange}
      error={error}
      classes={{ root: "input", focused: "focused", error: "error" }}
      ref={ref}
    />
  );
});
Input.displayName = Input;
export default Input;

const InputStyled = styled(InputBase)(({ theme, backcolor }) => ({
  "&.input": {
    border: `0.1px solid ${theme.palette.grey[900]}`,
    background: backcolor || `${theme.palette.background.default}`,
    borderRadius: "5px",
    padding: "0 10px",
  },
  "&.input.focused": {
    border: `0.1px solid ${theme.palette.secondary.main}`,
    background: `${theme.palette.background.default}`,
    borderRadius: "5px",
    color: `${theme.palette.primary.dark}`,
  },
  "&.input.error": {
    border: `1px solid ${theme.palette.error.main}`,
    borderRadius: "5px",
  },
}));
