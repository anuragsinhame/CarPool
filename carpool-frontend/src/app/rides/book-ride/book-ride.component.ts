import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ride } from '../../models/ride.model';
import { RidesService } from '../../services/rides.service';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})
export class BookRideComponent implements OnInit {

  source = '';
  destination = '';
  destinations = [];
  availableRides: Array<Ride> | null;
  validRides: Array<{ from: string, to: Array<{ place: string, price: number }> }>;

  constructor(private rideService: RidesService) { }

  ngOnInit(): void {
    this.validRides = this.rideService.getValidRides();
  }

  onFromSelected(fromValue: string): void {
    // clearing any old To values
    this.destination = '';
    // getting new To values
    this.destinations = this.validRides.find((rideData) => {
      if (rideData.from === fromValue) {
        return true;
      }
    }).to;

    // console.log(this.destinations);
  }

  getRides(form: NgForm): void {
    // console.log('Get Rides');
    this.source = form.value.from;
    this.destination = form.value.to;
    // console.log(this.source);
    // console.log(this.destination, '\n');
    this.availableRides = this.rideService.getAvailableRides(this.source, this.destination);
  }
}
