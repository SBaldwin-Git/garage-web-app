import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import supabase from "../../Config/supabaseClient";

// Class to represent the structure of a vehicle
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
  // State variables to store form input values
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [registration, setRegistration] = useState("");
  const [notes, setNotes] = useState("");

  // Event handlers for input changes
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

  // Function to handle form submission
  const handleSubmit = async () => {
    const { data, error } = await supabase.from("vehicles").insert([
      {
        make: make,
        model: model,
        registration: registration,
        notes: notes,
      },
    ]);

    // Handling errors from the database
    if (error) {
      console.log("error", error);
    }

    // If no error, update the state with the new vehicle
    if (!error) {
      const newVehicle = new Vehicle(false, make, model, registration, notes);
      setVehicles((prev) => [...prev, newVehicle]);
    }

    // Resetting form input values and closing the form
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
          variant="outlined"
          value={make}
          onChange={handleMakeChange}
          sx={{ pb: 2 }}
        />
        <DialogContentText>*Model:</DialogContentText>
        <TextField
          fullWidth
          required
          id="model"
          variant="outlined"
          value={model}
          onChange={handleModelChange}
          sx={{ pb: 2 }}
        />
        <DialogContentText>*Registration:</DialogContentText>
        <TextField
          fullWidth
          required
          id="registration"
          variant="outlined"
          value={registration}
          onChange={handleRegistrationChange}
          sx={{ pb: 2 }}
        />
        <DialogContentText>Notes:</DialogContentText>
        <TextField
          fullWidth
          id="notes"
          variant="outlined"
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