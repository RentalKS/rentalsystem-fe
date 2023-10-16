import React, { useState } from 'react'
import {Box, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography} from '@mui/material'
import { observer } from 'mobx-react-lite';
import AuthClientService from '../../../services/AuthClientService';
import { Navigate } from 'react-router-dom';

export default observer( function Login(){


        const [loginData, setLoginData] = useState({
            email: '',
            password: ''
        });

        const [loggedIn, setLoggedIn] = useState(false);
    
        const handleLogin = async (e: React.FormEvent) => {
            e.preventDefault();
            try {
                const response = await AuthClientService.login({
                    email: loginData.email,
                    password: loginData.password
                });
                setLoggedIn(true);
                console.log('Login response:', response); 
            } catch (error) {
                console.error('Login error:', error); 
            }
        };
        if (loggedIn) {
            return <Navigate to="/home" />;
        }
    
    
        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setLoginData(prevData => ({ ...prevData, [name]: value }));
        };
    

    const paperStyle={padding:'70px 70px', width:500, margin:"120px auto", borderRadius:20}
    const paperStyle2={padding:'0px 5px',marginLeft:200, width:250, margin:"10px 0px 12px  auto",marginTop:100, borderRadius:20}
    const paperStyle3={padding:'40px 70px', width:300, margin:"120px 0px 22px auto"}
    const headerStyle={margin:0, fontFamily:'Century Gothic'}
    return (
        <Grid sx={{display:'flex',textAlign:'center'}}>
             <Box
              
                ><Typography  sx={{color:'black',fontFamily:'Montserrat', fontWeight:'black',fontSize:40}} style={paperStyle3}>ORION</Typography>
                <Typography  sx={{color:'black',fontFamily:'Montserrat', fontWeight:'bold',fontSize:30}} style={paperStyle2}>Start Your Free Rental Service </Typography>
           </Box>
                <Box sx={{
                    // backgroundImage:`url(${greyimage})`, 
                    marginLeft:50,
                    width: "100%",
                    height:920,
                   
                    backgroundRepeat:'no-repeat'
                }}>
            <Paper elevation={20} style={paperStyle}>
                <Grid  >
                   
                    <h2 style={headerStyle} >Login</h2>
                    <Typography variant='caption' sx={{fontFamily:'Century Gothic'}}>Please fill this form to create an account !</Typography>
                </Grid>
                <form onSubmit={handleLogin} style={{marginTop:20,padding:2}}>
                <TextField
                            style={{ marginTop: 5 }}
                            name="email"
                            value={loginData.email}
                            onChange={handleInputChange}
                            variant="standard"
                            fullWidth
                            label='Email'
                            placeholder="Enter your Email"
                        />
                        <TextField
                            style={{ marginTop: 5 }}
                            name="password"
                            value={loginData.password}
                            onChange={handleInputChange}
                            type="password"
                            variant="standard"
                            fullWidth
                            label='Password'
                            placeholder="Enter your Password"
                        />
                  
                    <FormControlLabel style={{marginTop:5}} control={<Checkbox name='checkedA' />} label="I accept the terms and conditions"></FormControlLabel>
                    <Button
                            style={{ marginTop: 20 }}
                            type='submit'
                            variant='contained'
                            color='primary'
                            sx={{ fontFamily: 'Century Gothic' }}
                        >
                            Login
                        </Button>
                    <div >
                        {/* <a href="#"><small className="reset">Password Reset</small></a><br></br> */}
                        <a href="/register"><small className="reset" style={{color:'blue'}}>If u dont have account,please Sign Up!</small></a> 
                        {/* <a href="#"><small className="reset ml-2">Quick Recover</small></a> */}
                    </div>
                </form>
            </Paper>
            </Box>
            
        </Grid>
    )
})

