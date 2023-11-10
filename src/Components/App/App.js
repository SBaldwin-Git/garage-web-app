import "./App.css";
import VehicleList from "../VehicleList/VehicleList";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AddButton from "../Buttons/AddButton";
import AddVehicleForm from "../AddVehicleForm/AddVehicleForm";
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

// const vehicleArray = [
//   new Vehicle(true, "Toyota", "Camry", "ABC123", "Great condition"),
//   new Vehicle(true, "Honda", "Civic", "XYZ789", ""),
//   new Vehicle(false, "Ford", "Fusion", "DEF456", "Minor scratches on the side"),
//   new Vehicle(false, "Chevrolet", "Malibu", "GHI789", ""),
//   new Vehicle(false, "Nissan", "Altima", "JKL012", "Needs oil change"),
// ];

function App() {
  const [vehicles, setVehicles] = useState([]);
  //create a dialog form using mui, starting with boolean value for if the form is open or not
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function getVehicles() {
      const { data, error } = await supabase
        .from("vehicles")
        .select("*")
        .order("id", { ascending: true });
      if (error) {
        console.log("error", error);
      } else {
        //Convert the data from the API into an array of Vehicle objects
        const vehicleArray = data.map(
          (vehicle) =>
            new Vehicle(
              vehicle.repaired,
              vehicle.make,
              vehicle.model,
              vehicle.registration,
              vehicle.notes
            )
        );
        //Update the vehicles state with the array of Vehicle objects
        setVehicles(vehicleArray);
      }
    }
    getVehicles();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (registration) => {
    const updatedVehicles = vehicles.filter(
      (vehicle) => vehicle.registration !== registration
    );
    setVehicles(updatedVehicles);
  };

  const handleRepairedChange = (registration, repaired) => {
    // Find the index of the vehicle with the specified registration
    const index = vehicles.findIndex(
      (vehicle) => vehicle.registration === registration
    );

    if (index !== -1) {
      // Create a copy of the vehicles array
      const updatedVehicles = [...vehicles];

      // Update the 'repaired' property of the specified vehicle
      updatedVehicles[index] = {
        ...updatedVehicles[index],
        repaired: repaired,
      };

      console.log(updatedVehicles);

      // Update the vehicles state with the modified array
      setVehicles(updatedVehicles);
    }
  };

  return (
    <div className="App">
      <Container maxWidth="xl">
        <Typography variant="h2" color="initial" sx={{ pb: 5, pt: 5 }}>
          Garage Web App
        </Typography>
        <VehicleList
          vehicles={vehicles}
          handleDelete={handleDelete}
          handleRepairedChange={handleRepairedChange}
        />
        <AddButton handleOpen={handleOpen} />
        <AddVehicleForm
          open={open}
          handleClose={handleClose}
          setVehicles={setVehicles}
        />
      </Container>
    </div>
  );
}

export default App;
