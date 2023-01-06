import { Menu, styled } from "@mui/material";

const DropDown = ({
  children,
  width,
  height,
  open,
  handleClose,
  vertical,
  horizontal,
}) => {
  return (
    open && (
      <Container
        width={width}
        height={height}
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
    )
  );
};

export default DropDown;

const Container = styled(Menu)((props) => ({
  "& .paper": {
    width: props.width || "200px",
    height: props.height || "200px",
    background: "#fffff",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    position: "absolute",
    top: 0,
    left: 0,
  },
}));
