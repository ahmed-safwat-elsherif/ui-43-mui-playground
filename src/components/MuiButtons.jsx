import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const MuiButtons = () => {
  return (
    <div>
      <div>
        <Button variant="text"> Save changes </Button>
        <Button variant="outlined"> Save changes </Button>
        <Button variant="contained"> Save changes </Button>
      </div>
      <div>
        <Button variant="contained" color="secondary">
          Save changes
        </Button>
        <Button variant="contained" color="warning">
          Save changes
        </Button>
        <Button variant="contained" color="error">
          Save changes
        </Button>
      </div>
      <hr />
      <div>
        <Button variant="contained" color="secondary" size="small">
          Small
        </Button>
        <Button variant="contained" color="secondary" size="medium">
          Medium
        </Button>
        <Button variant="contained" color="secondary" size="large">
          Large
        </Button>
      </div>
      <hr />
      <div>
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          disableRipple
          disableElevation
        >
          Disable (ripple & elevation)
        </Button>
      </div>
      <hr />
      <div>
        <Button
          variant="contained"
          component="a"
          color="secondary"
          href="https://www.youtube.com/"
          target="_blank"
        >
          Link Button
        </Button>
      </div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<ArrowDownwardIcon />}
        >
          Button with start icon
        </Button>

        <Button
          variant="contained"
          color="secondary"
          endIcon={<ArrowDownwardIcon />}
          onClick={(e) => console.log(e)}
          // endIcon
        >
          Button with end icon
        </Button>
      </div>
      <hr />
      <div>
        <IconButton color="secondary">
          <ArrowDownwardIcon />
        </IconButton>
      </div>
      <hr />
      <div>
        <LoadingButton
          variant="contained"
          color="secondary"
          loading
          loadingIndicator="Loading.."
        >
          Save changes
        </LoadingButton>

        <LoadingButton
          variant="contained"
          color="secondary"
          loading
          startIcon={<ArrowDownwardIcon />}
          loadingPosition="start"
        >
          Save changes
        </LoadingButton>
      </div>
      <hr />
      <div>
        <ButtonGroup color="error" variant="contained" orientation="vertical">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default MuiButtons;
