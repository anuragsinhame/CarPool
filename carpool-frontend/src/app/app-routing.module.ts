import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookRideComponent } from './rides/book-ride/book-ride.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OfferRideComponent } from './rides/offer-ride/offer-ride.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'bookride', component: BookRideComponent},
  {path: 'offerride', component: OfferRideComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
