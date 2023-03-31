import { useMediaQuery } from "@mui/material";
import React from "react";

const MuiUseMediaQuery = () => {
  const isMedium = useMediaQuery("(min-width:900px)");

  console.log({ isMedium });
  return <div>MuiUseMediaQuery</div>;
};

export default MuiUseMediaQuery;
