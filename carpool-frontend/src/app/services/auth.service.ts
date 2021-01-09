import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Auth } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // to be deleted
  token = 'cihasgidgsaodhoasdhoh0rq';
  localStorageKeys = ['token', 'user'];


  // actual stuff
  isAuthenticated = false;
  authStatusListener = new Subject<boolean>();
  authUser: Auth[] = [
    { username: 'anurag', password: 'anurag', emailId: 'anurag@abc.com' },
    { username: 'ayushi', password: 'ayushi', emailId: 'ayushi@abc.com' },
    { username: 'anurag1', password: 'anurag3', emailId: 'anurag@abc.com' },
    { username: 'anurag2', password: 'anurag4', emailId: 'anurag@abc.com' }
  ];
  constructor(private router: Router) { }

  registerUser(authObj: Auth): boolean {
    this.authUser.push(authObj);
    setTimeout(() => {
      this.router.navigate(['']);
    }, 5000);
    return true;
  }

  loginUser(uname: string, pwd: string): boolean {
    this.authUser.find((user) => {
      if (user.username === uname && user.password === pwd) {
        this.isAuthenticated = true;
        this.authStatusListener.next(true);
        this.setLocalData({ token: this.token, user: uname });
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 5000);
        return true;
      }
    });
    return true;
  }

  getIsAuth(): boolean {
    return this.isAuthenticated;
  }

  getAuthStatusListener(): Observable<boolean> {
    return this.authStatusListener.asObservable();
  }

  setLocalData(keyValue: object): void {
    // instead of iterating over whole object iterating over only keys
    // for ... in loop iterated over all the properties including properties
    // of prototype
    for (const key of Object.keys(keyValue)) {
      localStorage.setItem(key, keyValue[key]);
    }
  }

  removeLocalData(keys: Array<string>): void {
    // instead of iterating over whole object iterating over only keys
    // for ... in loop iterated over all the properties including properties
    // of prototype
    for (const key of keys) {
      localStorage.removeItem(key);
    }
  }

  autoAuthUser(): void {
    const authData = this.getAuthData();
    if (!authData) {
      return;
    }
    this.isAuthenticated = true;
    this.authStatusListener.next(true);
  }

  getAuthData(): { token: string } {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    return { token };
  }


  logoutUser(): void {
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.removeLocalData(this.localStorageKeys);
    this.router.navigate(['/']);
  }
}
