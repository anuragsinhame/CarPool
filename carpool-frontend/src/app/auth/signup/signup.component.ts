import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

import { Auth } from '../../models/auth.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpData = new Auth();
  signupSuccess = false;
  confPassword: string | null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSignUp(): void {
    if(this.authService.registerUser(this.signUpData)){
      this.signupSuccess = true;
    }
  }

}
