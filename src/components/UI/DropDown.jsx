import { Menu, styled } from "@mui/material";

const DropDown = ({ children, width, height, open, handleClose }) => {
  return (
    open && (
      <Container
        width={width}
        height={height}
        open={open}
        onClose={handleClose}
        classes={{ root: "dropDown" }}
      >
        {children}
      </Container>
    )
  );
};

export default DropDown;

const Container = styled(Menu)((props) => ({
  dropDown: {
    width: props.width || "200px",
    height: props.height || "200px",
    background: "#FFFFFF",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
  },
  //   animation: "modal 0.5s ease-out",

  //   "@keyframes modal": {
  //     "0%": {
  //       transform: "scale(0.5)",
  //     },
  //     "100%": {
  //       transform: "scale(1)",
  //     },
  //   },
}));
