import { Container, Grid, Typography, Stepper, Step, StepLabel, Box, Button, Paper, TextField } from '@mui/material';
import React from 'react';

interface StepContentProps {
    step: number;
}

const steps = ['System & Modules', 'Location & Delivery', 'Seasons & Tariffs', 'Equipment & Insurance', 'Company Menagers', 'Notifications', 'Intgrations'];

function StepContent({ step }: StepContentProps) {
    return (
        <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}>
            <Typography>{steps[step]}</Typography>
        </Box>
    );
}

export default function CreateCompany() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Container maxWidth="xl" sx={{ marginTop: 2 }}>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                }}
            >
                TITLE
            </Typography>
            <Container maxWidth="xl" sx={{ marginTop: 2, height: 724 }}>
                <Paper sx={{ backgroundColor: '#f7f9ff' }}>
                    <Typography sx={{ fontSize: 24, padding: 2 }}>SETTINGS</Typography>
                    <Container maxWidth="xl" sx={{ marginTop: 5, height: 724 }}>
                        <Paper>
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
                                    <Box
                                        sx={{ flexGrow: 1, bgcolor: 'background.paper', height: 624 }}
                                    >
                                        <StepContent step={activeStep} />
                                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                                    </Box>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 2, float: 'right' }}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 2, ml: 2, float: 'right' }}
                                    >
                                        Next
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Container>
                </Paper>
            </Container>
        </Container>
    )
}
