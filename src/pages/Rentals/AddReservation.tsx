import { Container, Grid, Typography, Paper, TextField, Box } from '@mui/material';
import React from 'react';

const styles = {
  label: {
    marginBottom: 8,
    fontSize: 16,
  },
  textFieldContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16,
  },
};
const containerStyle = {
  backgroundColor: '#f7f9ff',
  paddingTop: 16,
};

export default function CreateCompany() {
  return (

      <Paper sx={{ p: 3,marginTop:10 }}>
        <Typography variant="h5" gutterBottom>
          Reservation
        </Typography>

        <Container maxWidth="xl" sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Paper sx={{ p: 3 }}>
                <div>
                  <div style={styles.textFieldContainer}>
                    <Typography sx={styles.label}>Tarif</Typography>
                    <TextField id="outlined-basic" variant="outlined" fullWidth />
                  </div>
                  <div style={styles.textFieldContainer}>
                    <Typography sx={styles.label}>Dates</Typography>
                    <TextField id="outlined-basic" variant="outlined" fullWidth />
                  </div>
                  <div style={styles.textFieldContainer}>
                    <Typography sx={styles.label}>Location From</Typography>
                    <TextField id="outlined-basic" variant="outlined" fullWidth />
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 60,
                  borderRadius: 2,
                  bgcolor: 'primary.light',
                  color: 'white',
                  fontSize: 25,
                }}
              >
                TOTALI
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>

  );
}
