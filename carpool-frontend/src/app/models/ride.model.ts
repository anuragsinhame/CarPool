export interface Ride{
  id: string;
  from: string;
  to: string;
  rideProvider: string;
  seatsLeft: number;
  price: number;
  rideDate: Date;
}
