import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";

export const Search = (props) => {
    const [tempSearch, setTempSearch] = useState(props.value);

  useEffect(() => {
    setTempSearch(props.value);
  }, [props.value]);

  return (
    <div style={{justifyContent: 'center'}}>
      <TextField
        color="primary"
        sx={{
            "& .MuiInputBase-root": {
                color: 'primary.main'
            }
        }}
        id="standard-basic"
        label="Search For a Crypto Currency..."
        variant="filled"
        value={tempSearch}
        style={{
            marginBottom: 20,
            width: "85%",
            color: "white",
            border: "1px solid #ced4da",
          }}
        onChange={(e) => setTempSearch(e.currentTarget.value)}
      />
      <Button
        style={{ margin: "10px", backgroundColor: "gold", fontWeight: 700 }}
        variant="contained"
        onClick={() => {
          props.onSubmit(tempSearch);
        }}
      >
        Find
      </Button>
    </div>
  );
};
