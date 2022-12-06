import * as React from 'react';

// material-ui
import { Box, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';



const machines = [
    {
      machineId: '00-B0-D0-63-C2-26',
      operatingSystem: 'Linux',
      ipAddress: '192.158.1.38',
    },
    {
      machineId: '00-B0-D0-63-C2-25',
      operatingSystem: 'Windows',
      ipAddress: '255.255.255.255',
    },
]
  
  
  

export default function MachinesByAccount() {
    return(
        <Box sx={{ margin: 1 }}>
          <Typography variant="h6" gutterBottom component="div">
          Machines
          </Typography>
          <Table size="small" aria-label="purchases">
          <TableHead>
          <TableRow>
          <TableCell>Machine ID</TableCell>
          <TableCell align="right">Operating System</TableCell>
          <TableCell align="right">IP Address ($)</TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
          {machines.map(machine => (
            <TableRow key={machine.date}>
            <TableCell component="th" scope="row">
            {machine.machineId}
            </TableCell>
            <TableCell>{machine.operatingSystem}</TableCell>
            <TableCell align="right">{machine.ipAddress}</TableCell>
            </TableRow>
          ))}
          </TableBody>
          </Table>
        </Box>
    )
}