import React from 'react';
import { Card, CardContent, Typography, Button, CardMedia, CardActions, Box } from '@mui/material';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { CarModel } from '../../models/CarModel';
import Honda from '../../assets/img/honda.png';

interface CarCardProps {
  car: CarModel;
}

function CarCard({ car }: CarCardProps) {
  return (
    <Card sx={{ display: 'flex', backgroundColor:'#f0f1f5',border: '1px solid #e0e0e0',height:400,width:1000, borderRadius: 4, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Box sx={{width:300,height:400, backgroundColor:'white',borderRadius: '0 100px 100px 0',}}>
      <CardMedia
        sx={{
          marginTop:10,
          width: 320,
          height: 200,
          objectFit: 'cover',
          borderTopLeftRadius: 4,
          borderBottomLeftRadius: 4,
        }}
        component="img"
        image={Honda}
        alt={`${car.model.brand} ${car.model.name}`}
      />
      </Box>
      <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', padding: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Typography sx={{fontFamily:'century gothic',fontWeight:'bold',fontSize:20}} variant="h6" gutterBottom>
            {car.model.brand} {car.model.name}
          </Typography>
          <Typography sx={{marginTop:2,color:'grey'}} variant="subtitle1" color="text.secondary">
            {car.category}
          </Typography>
          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mt: 1,marginTop:5,fontFamily:'century gothic',fontSize:17 }}>
            <AirlineSeatReclineExtraIcon sx={{ fontSize: 18, marginRight: 1 }} />
            Seats: {car.seats}
          </Typography>
          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center',marginTop:2,fontFamily:'century gothic'  }}>
            <LocalGasStationIcon sx={{ fontSize: 16, marginRight: 1 }} />
            Fuel Type: {car.fuelType}
          </Typography>
          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' ,marginTop:2, fontFamily:'century gothic'}}>
            <CreditCardIcon sx={{ fontSize: 16, marginRight: 1 }} />
            Doors:  {car.doors}
          </Typography>
          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center',fontFamily:'century gothic',marginTop:3,color:'primary.light' }}>
            Production Year: {car.productionYear} 
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            fontWeight: 'bold',
            fontSize: 18,
            color:'primary.light',
            fontFamily:'century gothic',
            borderRadius: 1,
            padding: '6px 15px',
            marginLeft: 'auto',
            marginTop: 2,
          }}
        >
          <Typography sx={{ color: 'primary.light', marginRight: 1,fontFamily:'century gothic' }}>Price:</Typography>
          ${car.price.toFixed(2)}
        </Box>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', padding: 2 }}>
        <Button variant="contained" color="primary">
          Add Reservation
        </Button>
      </CardActions>
    </Card>
  );
}

export default CarCard;
