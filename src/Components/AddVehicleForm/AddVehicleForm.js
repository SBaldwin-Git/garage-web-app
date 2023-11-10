import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import supabase from "../../Config/supabaseClient";

class Vehicle {
  constructor(repaired, make, model, registration, notes) {
    this.repaired = repaired;
    this.make = make;
    this.model = model;
    this.registration = registration;
    this.notes = notes;
  }
}

function AddVehicleForm({ open, handleClose, setVehicles }) {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [registration, setRegistration] = useState("");
  const [notes, setNotes] = useState("");

  const handleMakeChange = (event) => {
    setMake(event.target.value);
  };

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  const handleRegistrationChange = (event) => {
    setRegistration(event.target.value);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleSubmit = async () => {
    const { data, error } = await supabase.from("vehicles").insert([
      {
        make: make,
        model: model,
        registration: registration,
        notes: notes,
      },
    ]);
    if (error) {
      console.log("error", error);
    }

    if (!error) {
      const newVehicle = new Vehicle(false, make, model, registration, notes);

      setVehicles((prev) => [...prev, newVehicle]);
    }

    setMake("");
    setModel("");
    setRegistration("");
    setNotes("");

    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Add New Vehicle</DialogTitle>

      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: "black",
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <DialogContentText>*Make:</DialogContentText>
        <TextField
          fullWidth
          required
          id="make"
          variant="outlined" // Change variant to outlined
          value={make}
          onChange={handleMakeChange}
          sx={{ pb: 2 }}
        />
        <DialogContentText>*Model:</DialogContentText>
        <TextField
          fullWidth
          required
          id="model"
          variant="outlined" // Change variant to outlined
          value={model}
          onChange={handleModelChange}
          sx={{ pb: 2 }}
        />
        <DialogContentText>*Registration:</DialogContentText>
        <TextField
          fullWidth
          required
          id="registration"
          variant="outlined" // Change variant to outlined
          value={registration}
          onChange={handleRegistrationChange}
          sx={{ pb: 2 }}
        />
        <DialogContentText>Notes:</DialogContentText>
        <TextField
          fullWidth
          id="notes"
          variant="outlined" // Change variant to outlined
          multiline
          maxRows={4}
          value={notes}
          onChange={handleNotesChange}
        />
      </DialogContent>
      <DialogActions
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button
          disabled={
            make.length === 0 || model.length === 0 || registration.length === 0
          }
          onClick={handleSubmit}
          variant="contained"
          sx={{ m: 2, mb: 4, width: 200, fontSize: 20, height: 50 }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddVehicleForm;
