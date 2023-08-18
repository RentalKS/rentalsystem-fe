import { Container, Grid, Typography, Stepper, Step, StepLabel, Box, Button, Paper, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React from 'react';

interface StepContentProps {
    step: number;
}

const steps = ['System & Modules', 'Location & Delivery', 'Seasons & Tariffs', 'Equipment & Insurance', 'Company Managers', 'Notifications', 'Integrations'];

function StepContent({ step }: StepContentProps) {
    return (
        <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', flexDirection: 'column', padding: 3 }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>{steps[step]}</Typography>
            {step === 0 && (
                <TextField label="System Name" variant="outlined" sx={{ marginBottom: 2 }} />
            )}
            {step === 1 && (
                <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2 }}>
                    <InputLabel>Delivery Location</InputLabel>
                    <Select label="Delivery Location">
                        <MenuItem value="location1">Location 1</MenuItem>
                        <MenuItem value="location2">Location 2</MenuItem>
                    </Select>
                </FormControl>
             
            )}
         
        </Box>
    );
}

export default function SettingsRent() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Container maxWidth="xl" sx={{ marginTop: 2 }}>
            <Paper elevation={3} sx={{ backgroundColor: '#f7f9ff', padding: 3 }}>
                <Typography variant="h4" sx={{ marginBottom: 3 }}>Settings</Typography>
                <Container maxWidth="xl" sx={{ height: 724 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Stepper
                                orientation="vertical"
                                activeStep={activeStep}
                                sx={{ borderRight: 1, borderColor: 'divider', height: 624 }}
                            >
                                {steps.map((label, index) => (
                                    <Step key={index} sx={{ "& .MuiStepIcon-root": { width: 36, height: 36 } }}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Grid>
                        <Grid item xs={8}>
                            <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', height: 624 }}>
                                <StepContent step={activeStep} />
                                <Box sx={{ marginTop: 2 }}>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ float: 'left' }}
                                    >
                                        Back
                                    </Button>
                                    {activeStep !== steps.length - 1 && (
                                   
                                        <Button
                                            variant="contained"
                                            
                                            sx={{ float: 'right', marginLeft: 'auto' }}
                                        >
                                            Next
                                        </Button>
                                    )}
                                    {activeStep === steps.length - 1 && (
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            sx={{ float: 'right', marginLeft: 'auto' }}
                                        >
                                            Save
                                        </Button>
                                    )}
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </Container>
    );
}
