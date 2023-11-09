import "./App.css";
import VehicleList from "../VehicleList/VehicleList";
import { useState, useEffect } from "react";

function App()
{
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
  
  const [vehicles, setVehicles] = useState([]);
  const [inputValue, setInputValue] = useState("");

  {
    // // create use effect to fetch vehicles
    // useEffect(() => {
    //   fetchVehicles();
    // }, []);

    // async function fetchVehicles() {
    //   let response = await fetch("herokuapp link goes here", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   let data = await response.json();
    //   const newVehicles = data.payload.map((vehicle) => ({
    //     vehicleMake: vehicle.make,
    //     vehicleModel: vehicle.model,
    //     vehicleRegistration: vehicle.registration,
    //     vehicleNotes: vehicle.notes,
    //   }));
    //   // Replace existing vehicles with fetched vehicles
    //   setVehicles(newVehicles);
    // }
  }

  

  return (
    <div className="App">
      <h1>TEST</h1>
    </div>
  );
}

export default App;
