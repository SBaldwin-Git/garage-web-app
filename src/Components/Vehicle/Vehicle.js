import React from 'react'
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

function Vehicle({vehicle}) {
  return (
    <TableRow>
      <TableCell>{vehicle.make}</TableCell>
      <TableCell>{vehicle.model}</TableCell>
      <TableCell>{vehicle.registration}</TableCell>
      <TableCell>{vehicle.notes}</TableCell>
    </TableRow>
  )
}

export default Vehicle