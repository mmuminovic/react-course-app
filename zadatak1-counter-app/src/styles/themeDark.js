import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

export const themeDark = createTheme({
  palette: {
    primary: {
      main: green[700],
    },
    secondary: {
      main: green[700],
    },
    background: "#333",
    text: {
      primary: "#fff",
      secondary: "#fff",
      disabled: "#ccc",
    },
  },
  typography: {
    h1: {
      fontSize: "25px",
      fontWeight: "bold",
    },
    h4: {
      fontWeight: "bold",
      fontSize: "30px",
    },
    // subtitle1: {},
    // subtitle2: {},
    // body1: {},
    // body2: {},
    // caption: {},
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
