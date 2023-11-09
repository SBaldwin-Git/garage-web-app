import React from 'react'
import Button from '@mui/material/Button';

function AddButton() {
  return (
    <Button
      variant="contained"
      color="success"
      sx={{ m: 5, height: 100, width: 400, fontSize: 25 }}
    >
      Add Vehicle
    </Button>
  );
}

export default AddButton