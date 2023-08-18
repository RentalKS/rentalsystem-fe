import React from 'react'
import {Box, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography} from '@mui/material'
import greyimage from '../../assets/img/grey2.jpg'
import { observer } from 'mobx-react-lite';

export default observer( function Login(){

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
                <form style={{marginTop:20,padding:2}}>
                    <TextField style={{marginTop:5}} id="standard-basic" variant="standard" fullWidth label='Name' placeholder="Enter your Name"/>
                   
                    <TextField style={{marginTop:5}}id="standard-basic" variant="standard"fullWidth label='Password' placeholder="Enter your Password"/>
                  
                    <FormControlLabel style={{marginTop:5}} control={<Checkbox name='checkedA' />} label="I accept the terms and conditions"></FormControlLabel>
                    <Button style={{marginTop:20}} type='submit' variant='contained' color='primary' sx={{fontFamily:'Century Gothic'}}>Login</Button>
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

