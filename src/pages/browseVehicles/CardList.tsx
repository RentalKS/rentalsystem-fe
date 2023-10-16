import React, { useEffect, useState } from 'react';
import { Grid, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, CardActions } from '@mui/material';
import CarCard from './CarCard';
import { fetchAvailableCars } from '../../services/browseCarsService';
import { CarModel } from '../../models/CarModel';

function CarList() {
  const [cars, setCars] = useState<CarModel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAvailableCars();
        setCars(response);
      } catch (error) {
        console.error('Gabim gjatë marrjes së të dhënave të makinave:', error);
      }
    };

    fetchData();
  }, []);

  const [selectedBrand, setSelectedBrand] = React.useState('');

  const handleBrandChange = (event: SelectChangeEvent<string>) => {
    setSelectedBrand(event.target.value);
  };

  const filteredCars = selectedBrand
    ? cars.filter((car) => car.model.brand === selectedBrand)
    : cars;

  return (
    <Grid container spacing={2} sx={{ marginTop: 10 }}>
      <Grid item xs={3}>
        <FormControl fullWidth>
          <InputLabel id="brand-filter-label">Select Brand</InputLabel>
          <Select
            labelId="brand-filter-label"
            value={selectedBrand}
            onChange={handleBrandChange}
          >
            <MenuItem value="">
              <em>All Brands</em>
            </MenuItem>
            {Array.from(new Set(cars.map((car) => car.model.brand))).map((brand) => (
              <MenuItem key={brand} value={brand}>
                {brand}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={9}>
        <Grid container spacing={2}>
          {filteredCars.map((car) => (
            <Grid item key={car.id} xs={12}>
              <CarCard car={car} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CarList;
