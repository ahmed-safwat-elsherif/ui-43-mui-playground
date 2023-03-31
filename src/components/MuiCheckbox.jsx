import React, { useState } from "react";

import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MuiCheckbox = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <FormControlLabel
        label="Remember me!"
        labelPlacement="top"
        control={
          <Checkbox
            color="success"
            checked={isActive}
            onChange={() => setIsActive((prev) => !prev)}
            icon={<FavoriteBorderIcon />} // unchecked
            checkedIcon={<FavoriteIcon />} // checked
          />
        }
      />

      <FormControlLabel
        label="Remember me!"
        labelPlacement="top"
        control={
          <Switch
            color="success"
            checked={isActive}
            onChange={() => setIsActive((prev) => !prev)}
          />
        }
      />
    </div>
  );
};

export default MuiCheckbox;
