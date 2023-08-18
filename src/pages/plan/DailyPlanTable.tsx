import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface DailyPlanData {
  time: string;
  location: string;
  vehicle: string;
  amount: string;
  actions: string;
}

interface DailyPlanTableProps {
  data: DailyPlanData[];
}

const DailyPlanTable: React.FC<DailyPlanTableProps> = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Vehicle</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.vehicle}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.actions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DailyPlanTable;
