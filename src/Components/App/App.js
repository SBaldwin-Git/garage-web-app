import "./App.css";
import VehicleList from "../VehicleList/VehicleList";
import { useState, useEffect } from "react";

function App() {
  const [vehicles, setVehicles] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // create use effect to fetch vehicles
  useEffect(() => {
    fetchVehicles();
  }, []);

  async function fetchVehicles() {
    let response = await fetch("herokuapp link goes here", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await response.json();
    const newVehicles = data.payload.map((vehicle) => ({
      vehicleMake: vehicle.make,
      vehicleModel: vehicle.model,
      vehicleRegistration: vehicle.registration,
      vehicleNotes: vehicle.notes,
    }));
    // Replace existing vehicles with fetched vehicles
    setVehicles(newVehicles);
  }

  return (
    <div className="App">
      <h1>TEST</h1>
    </div>
  );
}

export default App;
