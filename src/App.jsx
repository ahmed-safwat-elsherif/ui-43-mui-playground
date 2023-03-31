import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Button from "@mui/material/Button";
import MuiButtons from "./components/MuiButtons";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiLayout from "./components/MuiLayout";
import MuiTextField from "./components/MuiTextField";
import MuiTypography from "./components/MuiTypography";
import MuiClickAwayListener from "./components/mui-util/MuiClickAwayListener";
import MuiUseMediaQuery from "./components/mui-util/MuiUseMediaQuery";
import MyButton from "./customization/MyButton";
import StyledDiv from "./customization/StyledDiv";
import { ThemeProvider, Typography } from "@mui/material";
import theme from "./utils/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        {/* <GlobalStyles
        styles={{
          ".MuiButtonBase-root": {
            fontSize: 30,
          },
        }}
      /> */}
        {/* <MuiTypography /> */}
        {/* <MuiButtons /> */}
        {/* <MuiTextField /> */}
        {/* <MuiCheckbox /> */}
        {/* <MuiLayout /> */}
        {/* <MuiClickAwayListener /> */}
        {/* <MuiUseMediaQuery /> */}
        <MyButton variant="contained">Click it</MyButton>
        <StyledDiv>This is a styled Div</StyledDiv>
        <Button color="secondary" variant="contained">
          Ay 7aga
        </Button>
        <Typography
          variant="h1"
          sx={{ fontWeight: { md: 400 }, fontSize: "2rem" }}
        >
          heading 1
        </Typography>
        <Typography variant="h2"> heading 2</Typography>
        <Typography variant="h3"> heading 3</Typography>
        <Typography variant="h4"> heading 4</Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
