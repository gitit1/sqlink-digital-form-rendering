import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#000000" },
  },
});

export const theme = createTheme(baseTheme, {
  shape: { borderRadius: 12 },
  typography: {
    fontFamily:
      "'Rubik', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 800,
      letterSpacing: 0.3,
      color: baseTheme.palette.primary.main,
    },
    h5: { fontWeight: 700 },
    button: { fontWeight: 600 },
    body2: { color: baseTheme.palette.secondary.main },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        outlined: { padding: baseTheme.spacing(3), borderRadius: 12 },
      },
    },
    MuiFormControl: {
      defaultProps: { fullWidth: true, margin: "normal" },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 999,
          paddingInline: baseTheme.spacing(3),
        },
      },
    },
  },
});
