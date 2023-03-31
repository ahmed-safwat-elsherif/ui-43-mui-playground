import React from "react";

import { styled } from "@mui/material/styles";

const StyledDiv = styled("div")(({ theme }) => ({
  border: `1px solid ${
    theme.palette.mode === "light" ? theme.palette.error.main : "transparent"
  }`,
  color: theme.palette.mode === "light" ? theme.palette.error.main : "white", // use the same color as theme.pallete.error
  padding: "5px 10px",
  backgroundColor:
    theme.palette.mode === "light" ? "transparent" : theme.palette.error.main,

  [theme.breakpoints.up("md")]: {
    padding: "10px 20px",
  },
}));

export default StyledDiv;
