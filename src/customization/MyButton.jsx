import React from "react";

import Button from "@mui/material/Button";

const MyButton = (props) => {
  return (
    <Button
      {...props}
      //   disabled
      sx={{
        transition: "0.3s ease-out font-size",
        fontSize: {
          xs: 12,
          md: 16,
        },
        textTransform: "none",
        "&.Mui-disabled": {
          color: "rgba(0,0,0,1)",
        },
      }}
    />
  );
};

export default MyButton;
