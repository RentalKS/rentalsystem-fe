import { Container, Grid, Typography, Stepper, Step, StepLabel, Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export default function CreateCompany() {
    const navigate = useNavigate();
    const handleAddReservation = () => {
        navigate('/AddReservation'); 
    };

    return (
        <Container maxWidth="xl" sx={{ marginTop: 2 }}>
          
          
                <Paper sx={{ backgroundColor: '#f7f9ff' }}>
                    <Typography sx={{ fontSize: 24, padding: 2 }}>Reservation</Typography>
               
                        <Paper>
                            <TableContainer component={Paper}>
                                    <Button  variant='contained' onClick={handleAddReservation} sx={{float:'right', backgroundColor:'primary.main',margin:2}}>Add Reservation</Button>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                  
                                        <TableRow>
                                            <TableCell>Dessert (100g serving)</TableCell>
                                            <TableCell align="right">Calories</TableCell>
                                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">{row.calories}</TableCell>
                                                <TableCell align="right">{row.fat}</TableCell>
                                                <TableCell align="right">{row.carbs}</TableCell>
                                                <TableCell align="right">{row.protein}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
               
                </Paper>
        </Container>
    )
}
