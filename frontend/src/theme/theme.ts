import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  spacing: 4,

  palette: {
    primary: {
      dark: "#2d8d4b", //PRIMARY_COLOR_700,
      main: "#5ac568", //PRIMARY_COLOR_500,
      light: "#e7fce0", //PRIMARY_COLOR_100,
    },

    secondary: {
      dark: "#0c1938", //SECONDARY_900,
      main: "#425b76", //SECONDARY_500,
      light: "#e2f1f8", //SECONDARY_300,
    },
    success: {
      main: "#6bea9a", //SUCCESS_500,
      light: "#FFF",
    },
    error: {
      main: "#e2311d", //ERROR_500,
    },
    warning: {
      main: "#ffc107", //WARNING_500,
    },
    grey: {
      "100": "#e3f3f6", //GREY_100,
      "300": "#e1ecfc", //GREY_300,
      "500": "#042330", //GREY_500,
      "700": "#19293b", //GREY_700,
      "900": "#000a17", //GREY_900,
      "200": "#5f7381", //CHARCOAL_100
      "400": "#E5F7E9", //CHARCOAL_300
      "600": "#9bbdcb",
      "800": "#e8eaf4",
    },
    //#region
  },

  typography: {
    h1: {
      fontFamily: "Montserrat",
      fontSize: "36px",
      fontWeight: "bold",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.39,
      letterSpacing: "normal",
    },
    h2: {
      fontFamily: "Montserrat",
      fontSize: "36px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.39,
      letterSpacing: "normal",
    },
    h3: {
      fontFamily: "Montserrat",
      fontSize: "26px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.46,
      letterSpacing: "normal",
    },
    h4: {
      fontFamily: "Montserrat",
      fontSize: "20px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "normal",
    },
    h5: {
      fontFamily: "Montserrat",
      fontSize: "20px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "normal",
    },
    h6: {
      fontFamily: "Montserrat",
      fontSize: "18px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.56,
      letterSpacing: "normal",
    },
    subtitle1: {
      fontFamily: "Montserrat",
      fontSize: "16px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "normal",
      textAlign: "left",
    },
    subtitle2: {
      fontFamily: "Montserrat",
      fontSize: "14px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.29,
      letterSpacing: "0.1px",
      textAlign: "left",
    },
    body1: {
      fontFamily: "Montserrat",
      fontSize: "14px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.57,
      letterSpacing: "normal",
      textAlign: "left",
    },
    body2: {
      fontFamily: "Montserrat",
      fontSize: "14px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.57,
      letterSpacing: "0.1px",
      textAlign: "left",
    },

    caption: {
      fontFamily: "Montserrat",
      fontSize: "12px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "normal",
      textAlign: "left",
    },

    overline: {
      fontFamily: "Montserrat",
      fontSize: "12px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "normal",
      textAlign: "center",
    },
  },
});

export default theme;
