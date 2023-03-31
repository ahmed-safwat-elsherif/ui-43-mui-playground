import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#656565",
    },
  },
  typography: {
    h1: {
      fontSize: 50,
    },
    allVariants: {
      fontWeight: 600,
    },
  },
  breakpoints: {
    values: {
      md: 800,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) =>
          ownerState.disableRipple && {
            backgroundColor: "wheat",
          },
      },
    },
  },
});

export default theme;
