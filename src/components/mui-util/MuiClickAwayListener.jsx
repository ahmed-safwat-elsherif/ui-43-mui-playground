import React, { useState } from "react";

import ClickAwayListener from "@mui/material/ClickAwayListener";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const MuiClickAwayListener = () => {
  const [open, setOpen] = useState(false);
  return (
    <ClickAwayListener onClickAway={(e) => setOpen(false)}>
      <Box maxWidth={200}>
        <Button onClick={() => setOpen(true)}>Open menu</Button>
        {open && (
          <Paper elevation={3} sx={{ p: 3 }}>
            Menu of this button
          </Paper>
        )}
      </Box>
    </ClickAwayListener>
  );
};

export default MuiClickAwayListener;
