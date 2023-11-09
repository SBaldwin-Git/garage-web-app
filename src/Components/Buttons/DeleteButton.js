import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

function DeleteButton() {
  return (
    <IconButton aria-label="delete" size="large">
      <DeleteIcon fontSize="inherit" />
    </IconButton>
  );
}

export default DeleteButton;
