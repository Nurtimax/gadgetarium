import { styled } from "@mui/material";

const DropDown = ({ children, propsWidth, propsHeight }) => {
  return (
    <Container propsWidth={propsWidth} propsHeight={propsHeight}>
      {children}
    </Container>
  );
};

export default DropDown;

const Container = styled("div")((props) => ({
  width: props.propsWidth || "20px",
  height: props.propsHeight || "10px",
  background: "#FFFFFF",
  boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
  borderRadius: "4px",
}));
