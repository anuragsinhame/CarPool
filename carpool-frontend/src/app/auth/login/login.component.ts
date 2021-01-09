import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginSuccess = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm): void {
    debugger;
    console.log(form);
    if (this.authService.loginUser(form.value.username, form.value.pwd)) {
      this.loginSuccess = true;
    }
  }
}
