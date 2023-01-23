import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";

const Themes = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        dark: "#292929",
        main: "#1A1A25",
        light: "#384255",
        contrastText: "#fff",
      },
      secondary: {
        light: "#2C68F5",
        main: "#CB11AB",
        dark: "#F99808",
        contrastText: "#fff",
      },
      success: {
        main: "#2FC504",
        light: "#3CDE14",
        dark: "#08A592",
      },
      error: {
        main: "#F10000",
      },
      background: {
        default: "#F4F4F4",
      },
      grey: {
        200: "#E0E2E7",
        400: "#E8E8E8",
        600: "#CDCDCD",
        800: "#91969E",
        900: "#909CB5",
      },
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          maxWidthLg: {
            "&.MuiContainer-maxWidthLg": {
              maxWidth: "90%",
            },
          },
          maxWidthMd: {
            "&.MuiContainer-maxWidthMd": {
              maxWidth: 1200,
            },
          },
        },
      },
      MuiMenuItem: {
        defaultProps: {
          disableRipple: true,
        },
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Themes;
