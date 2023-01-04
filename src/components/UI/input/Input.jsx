import { InputBase, styled } from "@mui/material";

const Input = ({ value, onChange, error, ...props }) => {
  return (
    <InputStyled
      {...props}
      value={value}
      onChange={onChange}
      error={error}
      classes={{
        root: "input",
        focused: "focused",
        error: "error",
      }}
    />
  );
};

export default Input;

const InputStyled = styled(InputBase)(() => ({
  "&.input": {
    border: "0.1px solid #909CB5",
    background: "#F6F6F6",
    borderRadius: "5px",
    padding: "0 10px",
  },
  "&.input.focused": {
    border: "0.1px solid #909CB5",
    background: "#F6F6F6",
    borderRadius: "5px",
    color: "#292929",
  },
  "&.input:hover": {
    border: `0.1px solid #CB11AB`,
    borderRadius: "5px",
  },
  "&.input.error": {
    border: `0.1px solid #F10000`,
    borderRadius: "5px",
  },
}));
