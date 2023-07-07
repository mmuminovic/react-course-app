import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

export const themeLight = createTheme({
  palette: {
    primary: {
      main: purple[500],
      light: purple[100],
      dark: purple[900],
    },
    secondary: {
      main: green[500],
    },
    background: "#cc9",
    text: {
      primary: "#000",
      //   secondary: "#123",
      //   disabled: "#ccc",
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
});
