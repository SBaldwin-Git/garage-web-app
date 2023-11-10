// Importing necessary components and styles
import "./App.css";
import VehicleList from "../VehicleList/VehicleList";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AddButton from "../Buttons/AddButton";
import AddVehicleForm from "../AddVehicleForm/AddVehicleForm";
import supabase from "../../Config/supabaseClient";

// Defining a Vehicle class to represent the structure of a vehicle
class Vehicle {
  constructor(repaired, make, model, registration, notes) {
    this.repaired = repaired;
    this.make = make;
    this.model = model;
    this.registration = registration;
    this.notes = notes;
  }
}

function App() {
  // State to manage the list of vehicles and the dialog form's open/closed state
  const [vehicles, setVehicles] = useState([]);
  const [open, setOpen] = useState(false);

  // Fetching vehicles from the database on component mount
  useEffect(() => {
    async function getVehicles() {
      const { data, error } = await supabase
        .from("vehicles")
        .select("*")
        .order("id", { ascending: true });
      if (error) {
        console.log("error", error);
      } else {
        // Convert the data from the API into an array of Vehicle objects
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
        // Update the vehicles state with the array of Vehicle objects
        setVehicles(vehicleArray);
      }
    }
    getVehicles();
  }, []);

  // Handler functions for opening and closing the add vehicle form dialog
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Handler function to delete a vehicle from the database and update the state
  const handleDelete = async (registration) => {
    try {
      // Delete the vehicle from the database
      const { error } = await supabase
        .from("vehicles")
        .delete()
        .eq("registration", registration);

      if (error) {
        console.error("Error deleting from the database:", error);
        return;
      }

      // Create a new array without the deleted vehicle
      const updatedVehicles = vehicles.filter(
        (vehicle) => vehicle.registration !== registration
      );

      // Update the vehicles state with the modified array
      setVehicles(updatedVehicles);
    } catch (error) {
      console.error("Error handling deletion:", error);
    }
  };

  // Handler function to update the "repaired" status of a vehicle in the database and state
  const handleRepairedChange = (registration, repaired) => {
    // Update the vehicle in the database
    const updateVehicle = async () => {
      const { error } = await supabase
        .from("vehicles")
        .update({ repaired: repaired })
        .eq("registration", registration);

      if (error) {
        console.error("Error updating the database:", error);
        return;
      }

      // Create a new array with the updated vehicle
      const updatedVehicles = vehicles.map((vehicle) => {
        if (vehicle.registration === registration) {
          return {
            ...vehicle,
            repaired: repaired,
          };
        } else {
          return vehicle;
        }
      });

      // Update the vehicles state with the modified array
      setVehicles(updatedVehicles);
    };
    updateVehicle();
  };

  // Rendering the application
  return (
    <div className="App">
      <Container maxWidth="xl">
        <Typography variant="h2" color="initial" sx={{ pb: 5, pt: 5 }}>
          Garage Web App
        </Typography>
        <VehicleList
          key={vehicles.registration}
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