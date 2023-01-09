import { createTheme, Menu, styled, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiMenuItem: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

const DropDown = ({
  children,
  open,
  handleClose,
  vertical = "top",
  horizontal = "left",
  anchorEl,
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
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
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
    color: "black",
    transitionDuration: "1s",
  },
  "& .MuiMenuItem-root:hover": {
    color: "rgba(203, 17, 171, 1)",
  },
  "&:hover .MuiMenuItem-root": {
    background: "transparent",
  },
}));
