import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function VehicleList({vehicles}) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
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
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicles.map((vehicle) => (
            <TableRow key={vehicle.registration}>
              <TableCell>{vehicle.make}</TableCell>
              <TableCell>{vehicle.model}</TableCell>
              <TableCell>{vehicle.registration}</TableCell>
              <TableCell>{vehicle.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default VehicleList