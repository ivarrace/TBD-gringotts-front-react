import React, { useRef } from "react";
import SaveIcon from "@mui/icons-material/Save";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import DoneIcon from "@mui/icons-material/Done";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
export default function EditableTextField({ value, onSave, sx, done }) {
  const valueRef = useRef(value);
  function handleSaveClick() {
    const newValue = valueRef.current.value;
    if (newValue && newValue !== "" && newValue !== value) {
      onSave(valueRef.current.value);
    }
  }

  return (
    <TextField
      hiddenLabel
      defaultValue={value}
      variant="filled"
      size="small"
      inputRef={valueRef}
      sx={sx}
      InputProps={{
        endAdornment: (
          <IconButton color="primary" onClick={handleSaveClick}>
            {done ? <DoneIcon /> : <SaveIcon />}
          </IconButton>
        ),
      }}
    />
  );
}
