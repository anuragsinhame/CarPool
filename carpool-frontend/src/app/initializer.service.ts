import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Ride } from './models/ride.model';

@Injectable({
  providedIn: 'root'
})
export class InitializerService {
  
  hotRides: Ride[] = [
    {id: '1', from: 'Hyderabad', to: 'Delhi', rideProvider: 'Ayushi', seatsLeft: 5, price: 200, rideDate: new Date('20201126')},
    {id: '2', from: 'Dehradun', to: 'Meerut', rideProvider: 'Anurag', seatsLeft: 5, price: 300, rideDate: new Date('20201126')},
    {id: '3', from: 'Pune', to: 'Mumbai', rideProvider: 'Sourabh', seatsLeft: 5, price: 500, rideDate: new Date('20201126')}
  ];

  updateHotRides = new Subject<Ride[]>();

  constructor() { }

  getHotRides(): Observable<Ride[]>{
    this.updateHotRides.next([...this.hotRides]);
    return this.updateHotRides.asObservable();
  }
}
