import { Component, OnInit } from '@angular/core';
import { Ride } from '../models/ride.model';
import { RidesService } from '../services/rides.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  hotRides: Ride[] = [];

  constructor(private rideService: RidesService) { }

  ngOnInit(): void {
    this.getHotRidesData()
  }

  getHotRidesData(): void{
    this.hotRides = this.rideService.getHotRides();
  }

}
