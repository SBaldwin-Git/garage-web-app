import React from 'react'
import Button from '@mui/material/Button';

function AddButton({ handleOpen }) {
  return (
    <Button
      variant="contained"
      color="success"
      sx={{ m: 5, height: 100, width: 400, fontSize: 25 }}
      onClick={handleOpen}
    >
      Add Vehicle
    </Button>
  );
}

export default AddButton