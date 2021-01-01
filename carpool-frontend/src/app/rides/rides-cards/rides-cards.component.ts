import { Component, Input, OnInit } from '@angular/core';
import { Ride } from 'src/app/models/ride.model';
import { RidesService } from 'src/app/services/rides.service';

@Component({
  selector: 'app-rides-cards',
  templateUrl: './rides-cards.component.html',
  styleUrls: ['./rides-cards.component.css']
})
export class RidesCardsComponent implements OnInit {

  isLoading = false;
  @Input('ridesArray')
  rides: Ride[];
  // private hotRidesSub: Subscription;

  constructor(private rideService: RidesService) { }

  ngOnInit(): void {
    // this.isLoading = true;
    // this.hotRidesSub = this.initalizer.getHotRides().subscribe(
    //   (rides) => {
        // this.isLoading = false;
    //     this.hotRides = rides;
    //   }
    // );
    // this.getRideData();
  }

  ngAfterViewChecked(): void {
    // this.getRideData();
  }

  // getRideData(): void{
  //   this.rides = this.rideService.getHotRides();
  // }

  test(){
    console.log('Hi!!');
  }

  ngOnDestroy(): void{
    // this.hotRidesSub.unsubscribe();
  }

}
