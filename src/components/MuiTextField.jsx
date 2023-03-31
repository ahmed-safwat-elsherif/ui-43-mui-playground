import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";

import PersonIcon from "@mui/icons-material/Person";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

const MuiTextField = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState("Hamada");

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log({ username });
  };

  return (
    <div>
      {/* <div>
        <TextField label="Username" helperText="This is a helper text" />
      </div>
      <div>
        <TextField
          variant="filled"
          label="Username"
          helperText="This is a helper text"
          color="secondary"
        />
        <TextField
          variant="outlined"
          label="Username"
          helperText="This is a helper text"
          color="warning"
        />
        <TextField
          variant="standard"
          label="Username"
          helperText="This is a helper text"
          color="success"
        />
      </div>
      <div>
        <TextField
          variant="outlined"
          label="Username"
          helperText="This is a helper text"
          color="secondary"
          disabled
        />
        <form>
          <TextField
            variant="outlined"
            label="Username"
            helperText="This is a helper text"
            color="secondary"
            required
          />
          <button type="submit"> Submit </button>
        </form>
      </div>
      <div>
        <TextField
          variant="outlined"
          label="Username"
          helperText="This is a helper text"
          color="secondary"
          type="password"
        />
      </div>
      <div>
        <TextField
          variant="outlined"
          label="Username"
          helperText="This is a helper text"
          color="secondary"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            "data-testid": "component-username-input-test-id",
          }}
          inputProps={{
            "data-testid": "username-input-test-id",
          }}
        />
      </div>
      <div>
        <TextField
          variant="outlined"
          label="Username"
          helperText="This is a helper text"
          color="secondary"
          multiline
          rows={10}
        />
      </div>
      <div>
        <TextField
          variant="outlined"
          label="Username"
          helperText="This is a helper text"
          color="secondary"
          error
        />
      </div> */}
      <div>
        <TextField
          variant="outlined"
          label="Username"
          color="secondary"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          variant="outlined"
          label="Username"
          color="secondary"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={toggleShowPassword}>
                  {showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <hr />
      <div>
        <FormControl error>
          <InputLabel htmlFor="username">User name</InputLabel>
          <Input
            id="username"
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={toggleShowPassword}>
                  {showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText>this is a helper text</FormHelperText>
        </FormControl>
      </div>

      <div>
        <form onSubmit={handleOnSubmit}>
          Controlled state:
          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MuiTextField;
