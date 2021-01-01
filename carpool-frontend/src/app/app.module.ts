import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SingleCarouselComponent } from './single-carousel/single-carousel.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BookRideComponent } from './rides/book-ride/book-ride.component';
import { FormsModule } from '@angular/forms';
import { RidesCardsComponent } from './rides/rides-cards/rides-cards.component';
import { OfferRideComponent } from './rides/offer-ride/offer-ride.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SingleCarouselComponent,
    FooterComponent,
    HomepageComponent,
    BookRideComponent,
    RidesCardsComponent,
    OfferRideComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // {provide: APP_INITIALIZER, useFactory: appInitialize, deps: [InitializerService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
