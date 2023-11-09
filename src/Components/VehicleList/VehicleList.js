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

function VehicleList({ vehicles }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="sticky table">
        <TableHead>
          <TableRow>
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
              {/* placeholder */}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicles.map((vehicle) => (
            <TableRow key={vehicle.registration}>
              <TableCell>
                <Select
                  value={vehicle.repaired ? true : false}
                  labelId="repaired"
                  id="repaired"
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </TableCell>
              <TableCell>{vehicle.make}</TableCell>
              <TableCell>{vehicle.model}</TableCell>
              <TableCell>{vehicle.registration}</TableCell>
              <TableCell>{vehicle.notes}</TableCell>
              <TableCell>
                <DeleteButton />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default VehicleList;
