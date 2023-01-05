import { styled } from "@mui/material";

const DropDown = ({ children, propsWidth, propsHeight, open }) => {
  return (
    <>
      {open && (
        <Container propsWidth={propsWidth} propsHeight={propsHeight}>
          {children}
        </Container>
      )}
    </>
  );
};

export default DropDown;

const Container = styled("div")((props) => ({
  width: props.propsWidth || "200px",
  height: props.propsHeight || "200px",
  background: "#FFFFFF",
  boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
  borderRadius: "4px",
  animation: "modal 0.5s ease-out",

  "@keyframes modal": {
    "0%": {
      transform: "scale(0.5)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
}));
