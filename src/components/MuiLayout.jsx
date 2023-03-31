import React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const boxStyles = {
  borderWidth: "2px",
  borderStyle: "solid",
  padding: "5px",
  minWidth: "100px",
};

const MuiLayout = () => {
  return (
    <Box component="main">
      <Stack
        direction="row"
        spacing={3}
        alignItems="center"
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderWidth: "1px" }}
          />
        }
      >
        <Box sx={{ borderColor: "red", height: "50px", ...boxStyles }}>1</Box>
        <Box sx={{ borderColor: "blue", ...boxStyles }}>2</Box>
        <Box sx={{ borderColor: "green", ...boxStyles }}>3</Box>
      </Stack>
      <Divider sx={{ mt: 2 }} />
      <Container maxWidth="sm">Textttttttttt</Container>

      <Divider sx={{ mt: 2 }} />
      <Grid container rowSpacing={3} columnSpacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={2}
            sx={{ p: 3, textAlign: "center", fontSize: "20px" }}
          >
            1
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={2}
            sx={{ p: 3, textAlign: "center", fontSize: "20px" }}
          >
            2
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Paper
            elevation={2}
            sx={{ p: 3, textAlign: "center", fontSize: "20px" }}
          >
            3
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MuiLayout;
