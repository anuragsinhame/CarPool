import { Injectable } from '@angular/core';
import { Ride } from '../models/ride.model';

@Injectable({
  providedIn: 'root'
})
export class RidesService {

  currentUser = 'Anurag';


  hotRides: Ride[] = [
    { id: '1', from: 'Hyderabad', to: 'Delhi', rideProvider: 'Ayushi', seatsLeft: 5, price: 200, rideDate: new Date('20201126') },
    { id: '2', from: 'Dehradun', to: 'Meerut', rideProvider: 'Anurag', seatsLeft: 5, price: 300, rideDate: new Date('20201126') },
    { id: '3', from: 'Pune', to: 'Mumbai', rideProvider: 'Sourabh', seatsLeft: 5, price: 500, rideDate: new Date('20201126') }
  ];

  // Dehradun, Meerut, Delhi, Faridabad, Mumbai, Pune, Hyderabad
  validRides = [
    { from: 'Dehradun', to: [{ place: 'Meerut', price: 300 }, { place: 'Delhi', price: 400 }, { place: 'Faridabad', price: 400 }] },
    { from: 'Meerut', to: [{ place: 'Dehradun', price: 300 }, { place: 'Delhi', price: 150 }, { place: 'Hyderabad', price: 800 }] },
    { from: 'Delhi', to: [{ place: 'Meerut', price: 150 }, { place: 'Dehradun', price: 400 }, { place: 'Mumbai', price: 540 }, { place: 'Hyderabad', price: 630 }] },
    { from: 'Faridabad', to: [{ place: 'Delhi', price: 100 }, { place: 'Meerut', price: 350 }, { place: 'Pune', price: 550 }, { place: 'Mumbai', price: 430 }] },
    { from: 'Pune', to: [{ place: 'Delhi', price: 560 }, { place: 'Meerut', price: 300 }, { place: 'Dehradun', price: 340 }, { place: 'Mumbai', price: 730 }] },
    { from: 'Varanasi', to: [] },
    { from: 'Hyderabad', to: [{ place: 'Pune', price: 340 }, { place: 'Meerut', price: 800 }, { place: 'Dehradun', price: 900 }, { place: 'Mumbai', price: 940 }] }
  ];

  allRides: Ride[] = [
    { id: '1', from: 'Hyderabad', to: 'Delhi', rideProvider: 'Ayushi', seatsLeft: 5, price: 200, rideDate: new Date('20201126') },
    { id: '2', from: 'Dehradun', to: 'Meerut', rideProvider: 'Anurag', seatsLeft: 5, price: 300, rideDate: new Date('20201126') },
    { id: '3', from: 'Delhi', to: 'Meerut', rideProvider: 'Anurag', seatsLeft: 4, price: 300, rideDate: new Date('20201126') },
    { id: '4', from: 'Dehradun', to: 'Meerut', rideProvider: 'Anurag', seatsLeft: 3, price: 300, rideDate: new Date('20201126') },
    { id: '5', from: 'Dehradun', to: 'Meerut', rideProvider: 'Ayushi', seatsLeft: 5, price: 300, rideDate: new Date('20201126') },
    { id: '6', from: 'Dehradun', to: 'Delhi', rideProvider: 'Anurag', seatsLeft: 1, price: 300, rideDate: new Date('20201126') },
    { id: '7', from: 'Pune', to: 'Meerut', rideProvider: 'Arun', seatsLeft: 0, price: 300, rideDate: new Date('20201126') },
    { id: '8', from: 'Dehradun', to: 'Meerut', rideProvider: 'Anurag', seatsLeft: 3, price: 300, rideDate: new Date('20201126') },
    { id: '9', from: 'Dehradun', to: 'Meerut', rideProvider: 'Anurag', seatsLeft: 6, price: 300, rideDate: new Date('20201126') },
    { id: '10', from: 'Dehradun', to: 'Meerut', rideProvider: 'Anurag', seatsLeft: 0, price: 300, rideDate: new Date('20201126') },
    { id: '11', from: 'Pune', to: 'Mumbai', rideProvider: 'Sourabh', seatsLeft: 5, price: 500, rideDate: new Date('20201126') }
  ];

  // updateHotRides = new Subject<Ride[]>();

  constructor() { }

  getHotRides(): Ride[] {
    // this.updateHotRides.next([...this.hotRides]);
    // return this.updateHotRides.asObservable();
    return this.hotRides;
  }

  getValidRides(): Array<{ from: string, to: Array<{ place: string, price: number }> }> {
    return this.validRides;
  }

  getAvailableRides(source: string, destination: string): Ride[] | null {
    let filteredAvailableRides = [];
    filteredAvailableRides = this.allRides.filter(
      (ride) => {
        return (ride.from === source && ride.to === destination && ride.seatsLeft > 0);
      }
    );
    // console.log(filteredAvailableRides);
    if (filteredAvailableRides.length > 0) {
      return filteredAvailableRides;
    }
    return null;
  }

  addNewRide(from: string, to: string, seats: number): void {
    let rideAmount = 0;
    this.validRides.find((ride) => {
      if (ride.from === from) {
        ride.to.find((destination) => {
          if (destination.place === to) {
            rideAmount = destination.price;
            return true;
          }
        });
        return true;
      }
    });

    this.allRides[this.allRides.length] = {
      id: (parseInt(this.allRides[this.allRides.length - 1].id) + 1).toString(),
      from,
      to,
      rideProvider: this.currentUser,
      seatsLeft: seats,
      price: rideAmount,
      rideDate: new Date('20201126')
    };
  }

  getMyRides(): Ride[] {
    return this.allRides.filter((ride) => {
      if (ride.rideProvider === this.currentUser) {
        return true;
      }
    });
  }
}
