import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<User> = [
    // tslint:disable-next-line: max-line-length
    { username: 'anurag', userImage: null, name: { firstName: 'Anurag', lastName: 'Sinha' }, address: { permanent: { address1: '450/7 Jagriti Vihar', zipCode: 250004 }, isCurrentSameToPermanent: true, current: { address1: '', zipCode: null } }, mobile: 7906706805, gender: 'male' },
    // tslint:disable-next-line: max-line-length
    { username: 'ayushi', userImage: null, name: { firstName: 'Ayushi', lastName: 'Pande' }, address: { permanent: { address1: '150/3 Dharampur', zipCode: 248001 }, isCurrentSameToPermanent: false, current: { address1: 'A44 Hyderabad', zipCode: 500088 } }, mobile: 8979740843, gender: 'female' }
  ];

  constructor() { }

  modifyUserProfile(userData: User): void {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === userData.username) {
        debugger;
        this.users[i] = userData;
        break;
      }
    }
  }

  getUserProfile(): User {
    const username = localStorage.getItem('user');
    return this.users.find((user) => {
      if (user.username === username) {
        return true;
      }
    });
  }
}
