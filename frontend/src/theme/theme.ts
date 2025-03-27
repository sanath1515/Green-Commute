import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  spacing: 4,

  palette: {
    primary: {
      dark: "#2d8d4b",
      main: "#5ac568",
      light: "#e7fce0",
    },
    secondary: {
      dark: "#0c1938",
      main: "#425b76",
      light: "#e2f1f8",
    },
    success: {
      main: "#6bea9a",
      light: "#FFF",
    },
    error: {
      main: "#e2311d",
    },
    warning: {
      main: "#ffc107",
    },
    grey: {
      100: "#e3f3f6",
      200: "#5f7381",
      300: "#e1ecfc",
      400: "#E5F7E9",
      500: "#042330",
      600: "#9bbdcb",
      700: "#19293b",
      800: "#e8eaf4",
      900: "#000a17",
    },
  },

  typography: {
    fontFamily: "Montserrat",
    h1: {
      fontSize: "36px",
      fontWeight: "bold",
      lineHeight: 1.39,
    },
    h2: {
      fontSize: "36px",
      fontWeight: "normal",
      lineHeight: 1.39,
    },
    h3: {
      fontSize: "26px",
      fontWeight: 500,
      lineHeight: 1.46,
    },
    h4: {
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: "20px",
      fontWeight: "normal",
      lineHeight: 1.5,
    },
    h6: {
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: 1.56,
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: 1.5,
      textAlign: "left",
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: 1.29,
      letterSpacing: "0.1px",
      textAlign: "left",
    },
    body1: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: 1.57,
      textAlign: "left",
    },
    body2: {
      fontSize: "14px",
      fontWeight: "normal",
      lineHeight: 1.57,
      letterSpacing: "0.1px",
      textAlign: "left",
    },
    caption: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: 1.5,
      textAlign: "left",
    },
    overline: {
      fontSize: "12px",
      fontWeight: "normal",
      lineHeight: 1.5,
      textAlign: "center",
    },
  },
});

export default theme;
