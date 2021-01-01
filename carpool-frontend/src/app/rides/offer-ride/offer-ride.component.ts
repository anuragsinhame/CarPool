import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ride } from 'src/app/models/ride.model';
import { RidesService } from 'src/app/services/rides.service';

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css']
})
export class OfferRideComponent implements OnInit {

  destination = '';
  destinations = [];
  myRides: Ride[] | null;
  validRides: Array<{ from: string, to: Array<{place: string, price: number}> }>;
  newRide: Ride = {
    id: '',
    from: '',
    to: '',
    rideProvider: '',
    seatsLeft: 0,
    price: 0,
    rideDate: new Date()
  };

  constructor(private rideService: RidesService) { }

  ngOnInit(): void {
    this.validRides = this.rideService.getValidRides();
    this.myRides = this.rideService.getMyRides();
  }

  onFromSelected(fromValue: string): void {
    // clearing any old To values
    this.destination = '';
    // getting new To values
    this.destinations = this.validRides.find((rideData) => {
      if (rideData.from === fromValue) {
        return rideData.to;
      }
    }).to;

    // console.log(this.destinations);
  }

  onOfferRide(form: NgForm): void{
    // this.newRide.from = form.value.from;
    // this.newRide.to = form.value.to;
    // this.newRide.seatsLeft = form.value.seatsAvailable;
    // console.log(form);
    this.rideService.addNewRide(form.value.from, form.value.to, form.value.seatsAvailable);
    this.myRides = this.rideService.getMyRides();
  }

}
