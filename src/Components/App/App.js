import "./App.css";
import VehicleList from "../VehicleList/VehicleList";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AddButton from "../Buttons/AddButton";

function App() {
  class Vehicle {
    constructor(make, model, registration, notes) {
      this.make = make;
      this.model = model;
      this.registration = registration;
      this.notes = notes;
    }
  }

  const vehicleArray = [
    new Vehicle("Toyota", "Camry", "ABC123", "Great condition"),
    new Vehicle("Honda", "Civic", "XYZ789", ""),
    new Vehicle("Ford", "Fusion", "DEF456", "Minor scratches on the side"),
    new Vehicle("Chevrolet", "Malibu", "GHI789", ""),
    new Vehicle("Nissan", "Altima", "JKL012", "Needs oil change"),
  ];

  const [vehicles, setVehicles] = useState(vehicleArray);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <Container maxWidth="xl">
        <Typography variant="h2" color="initial" sx={{mb:5, mt:5}}>
          Garage Web App
        </Typography>
        <VehicleList vehicles={vehicles} />
        <AddButton />
      </Container>
    </div>
  );
}

export default App;
