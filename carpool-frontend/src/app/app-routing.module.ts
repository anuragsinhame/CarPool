import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookRideComponent } from './rides/book-ride/book-ride.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OfferRideComponent } from './rides/offer-ride/offer-ride.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './user/profile/profile.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'bookride', component: BookRideComponent},
  {path: 'offerride', component: OfferRideComponent, canActivate: [AuthGuard]},
  {path: 'register', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
