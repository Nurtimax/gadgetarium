import { Menu, styled } from "@mui/material";

const DropDown = ({ children, open, handleClose, vertical, horizontal }) => {
  return (
    <Container
      open={open}
      onClose={handleClose}
      classes={{ root: "dropDown" }}
      PopoverClasses={{ paper: "paper" }}
      anchorOrigin={{
        vertical: { vertical },
        horizontal: { horizontal },
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      {children}
    </Container>
  );
};

export default DropDown;

const Container = styled(Menu)(() => ({
  "& .paper": {
    background: "#fffff",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    position: "absolute",
    padding: "5px",
    top: 0,
    left: 0,
  },
}));
