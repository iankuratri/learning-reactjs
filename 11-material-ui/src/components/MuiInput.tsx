import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export const MuiInput = () => {
  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="row" spacing={2}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField
          id="standard-basic"
          label="Standard"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </Stack>
    </Stack>
  );
};
