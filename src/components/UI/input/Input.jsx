import { TextField, styled } from "@mui/material";
// import { InputStyled } from "./InputStyled";

const Input = ({ value, setValue }) => {
  console.log(value);
  return (
    <div>
      <TextFieldStyled
        // {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;

const TextFieldStyled = styled(TextField)(() => ({
  "& label.Mui-focused": {},
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: " 1px solid #909CB5",
      //   backgrounColor: "#F6F6F6",
    },
    "&:hover fieldset": {
      borderColor: "#CB11AB",
    },
    "&:active fieldset": {
      //   background: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#909CB5",
      //   background: "#F6F6F6",
    },
  },
}));
