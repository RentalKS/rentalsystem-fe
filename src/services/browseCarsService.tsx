import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/car/available';

export const fetchAvailableCars = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; 
  } catch (error) {
    console.error('Gabim gjatë marrjes së të dhënave të makinave:', error);
    return []; 
  }
};