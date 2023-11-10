import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteButton from "../Buttons/DeleteButton";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function VehicleList({ vehicles, handleDelete, handleRepairedChange }) {
  return (
    // Material-UI TableContainer component wrapping the Paper component
    <TableContainer component={Paper}>
      {/* Material-UI Table component with "sticky table" label */}
      <Table aria-label="sticky table">
        {/* Material-UI TableHead component */}
        <TableHead>
          {/* Material-UI TableRow component for table headers */}
          <TableRow>
            {/* Material-UI TableCell components for each column header */}
            <TableCell sx={{ fontWeight: "bold", fontSize: 20 }}>
              Repair Complete
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", fontSize: 20 }}>
              Make
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", fontSize: 20 }}>
              Model
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", fontSize: 20 }}>
              Registration
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", fontSize: 20 }}>
              Notes
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", fontSize: 20 }}>
              {/* Placeholder */}
            </TableCell>
          </TableRow>
        </TableHead>
        {/* Material-UI TableBody component */}
        <TableBody>
          {/* Mapping through each vehicle to create a TableRow */}
          {vehicles.map((vehicle) => (
            <TableRow key={vehicle.registration}>
              {/* TableCell for the "Repair Complete" column */}
              <TableCell>
                {/* Material-UI Select component for repair status */}
                <Select
                  onChange={(event) =>
                    handleRepairedChange(
                      vehicle.registration,
                      event.target.value
                    )
                  }
                  value={vehicle.repaired ? true : false}
                  labelId="repaired"
                  id="repaired"
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  {/* Material-UI MenuItem components for repair status options */}
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </TableCell>
              {/* TableCell for the "Make" column */}
              <TableCell>{vehicle.make}</TableCell>
              {/* TableCell for the "Model" column */}
              <TableCell>{vehicle.model}</TableCell>
              {/* TableCell for the "Registration" column */}
              <TableCell>{vehicle.registration}</TableCell>
              {/* TableCell for the "Notes" column */}
              <TableCell>{vehicle.notes}</TableCell>
              {/* TableCell for the "Delete" column with DeleteButton component */}
              <TableCell>
                <DeleteButton
                  onClick={() => handleDelete(vehicle.registration)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default VehicleList;