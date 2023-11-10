import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

function DeleteButton({ onClick }) {
  return (
    // Material-UI IconButton component with specified properties and an onClick event
    <IconButton aria-label="delete" size="large" onClick={onClick}>
      {/* Material-UI DeleteIcon component with specified properties */}
      <DeleteIcon fontSize="inherit" />
    </IconButton>
  );
}

export default DeleteButton;