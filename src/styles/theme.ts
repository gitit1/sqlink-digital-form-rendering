import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#000000" },
  },
});

export const theme = createTheme(baseTheme, {
  typography: {
    h1: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: baseTheme.palette.primary.main,
      fontFamily: "cursive",
    },
    body2: {
      color: baseTheme.palette.secondary.main,
    },
  },
});
