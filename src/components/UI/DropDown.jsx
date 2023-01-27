import { Menu, styled } from "@mui/material";

const DropDown = ({
  children,
  open,
  handleClose,
  vertical,
  horizontal,
  anchorEl,
  ...props
}) => {
  return (
    <Container
      open={open}
      onClose={handleClose}
      PopoverClasses={{ paper: "paper" }}
      anchorOrigin={{
        vertical,
        horizontal,
      }}
      anchorEl={anchorEl}
      disablePortal
      autoFocus={false}
      {...props}
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
    padding: "0",
    minWidth: "142px",
  },
  "& .MuiMenuItem-root": {
    color: "#292929",
    transitionDuration: "0.3s",
  },
  "& .MuiMenuItem-root:hover": {
    color: "#CB11AB",
  },
  "&:hover .MuiMenuItem-root": {
    background: "transparent",
  },
}));
