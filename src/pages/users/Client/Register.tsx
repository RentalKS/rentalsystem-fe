import React, { useState } from 'react'
import { Box, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite';
import AuthClientService from '../../../services/AuthClientService';
import { UserData } from '../../../models/UserModel';

export default observer(function Register() {

    const [userData, setUserData] = useState<UserData>({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        role: 'CLIENT',
    });

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await AuthClientService.register(userData);
            // Regjistrimi është suksesshëm, mund të bëni ndonjë ndryshim në ndërfaqe ose t'i tregoni përdoruesit që regjistrimi është kryer me sukses.
        } catch (error) {
            // Gabim gjatë regjistrimit, mund të shfaqni një mesazh të gabimit për përdoruesin.
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData(prevData => ({ ...prevData, [name]: value }));
    };


    const paperStyle = { padding: '70px 70px', width: 500, margin: "120px auto", borderRadius: 20 }
    const paperStyle2 = { padding: '0px 5px', marginLeft: 200, width: 250, margin: "10px 0px 12px  auto", marginTop: 100, borderRadius: 20 }
    const paperStyle3 = { padding: '40px 70px', width: 300, margin: "120px 0px 22px auto" }
    const headerStyle = { margin: 0, fontFamily: 'Century Gothic' }
    return (
        <Grid sx={{ display: 'flex', textAlign: 'center' }}>
            <Box
                sx={{
                    width: 900,
                }}
            ><Typography sx={{ color: 'black', fontFamily: 'Montserrat', fontWeight: 'black', fontSize: 40 }} style={paperStyle3}>ORION </Typography>
                <Typography sx={{ color: 'black', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: 30 }} style={paperStyle2}>Start Your Free Rental Service </Typography>
            </Box>
            <Box sx={{
                // backgroundImage:`url(${greyimage})`, 
                marginLeft: 50,
                width: "100%",
                height: 920,

                backgroundRepeat: 'no-repeat'
            }}>
                <Paper elevation={20} style={paperStyle}>
                    <Grid  >
                        <h2 style={headerStyle} >Sign Up</h2>
                        <Typography variant='caption' sx={{ fontFamily: 'Century Gothic' }}>Please fill this form to create an account !</Typography>
                        <form onSubmit={handleRegister} style={{ marginTop: 20, padding: 2 }}>
                            <TextField style={{ marginTop: 5 }} name="firstName" value={userData.firstName} onChange={handleInputChange} variant="standard" fullWidth label='Name' placeholder="Enter your Name" />
                            <TextField style={{ marginTop: 5 }} name="lastName" value={userData.lastName} onChange={handleInputChange} id="standard-basic" variant="standard" fullWidth label='Last Name' placeholder="Enter your Last Name" />
                            <TextField style={{ marginTop: 5 }} name="username" value={userData.username} onChange={handleInputChange} id="standard-basic" variant="standard" fullWidth label='Username' placeholder="Enter your Username" />
                            <TextField style={{ marginTop: 5 }} name="email" value={userData.email} onChange={handleInputChange} id="standard-basic" variant="standard" fullWidth label='Email' placeholder="Enter your Email" />
                            <TextField style={{ marginTop: 5 }} name="password" value={userData.password} onChange={handleInputChange} id="standard-basic" variant="standard" fullWidth label='Password' placeholder="Enter your Password" />
                            <TextField style={{ marginTop: 5 }} name="role" value={userData.role} onChange={handleInputChange} id="standard-basic" variant="standard" fullWidth label='Role' placeholder="Enter your Role" />
                            <FormControlLabel style={{ marginTop: 5 }} control={<Checkbox name='checkedA' />} label="I accept the terms and conditions"></FormControlLabel>
                            <Button style={{ marginTop: 20 }} type='submit' variant='contained' color='primary' sx={{ fontFamily: 'Century Gothic' }}>Sign Up</Button>
                        </form>
                    </Grid>
                </Paper>
            </Box>

        </Grid>
    )
})

