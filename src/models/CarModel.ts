export interface CarModel {
    id: string;
    seats: number;
    doors: number;
    productionYear: number;
    category: string;
    model: {
      name: string;
      brand: string;
    };
    color: {
      name: string;
      hexCode: string;
    };
    fuelType: string;
    price: number;
  }