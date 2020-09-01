import { Injectable, EventEmitter } from '@angular/core';
export interface IProfile {
  firstName: string; 
  lastName: string; 
  username: string;
  email: string;
  age: number;
} 

@Injectable({ providedIn: 'root' }) export class ProfileService {
  public user: IProfile; constructor() { }

  getProfileUser(): Promise<IProfile> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.round(Math.random())) {
          this.user = {
            firstName: 'Michael', 
            lastName: 'Collins', 
            username: 'michael.collins',
            email: '',
            age: 30
          }; 
          resolve(this.user);
        } else {
          reject({ error: 'Profile not found...trying again!' });
        }
      }, Math.random() * 5000);
    });
  }

  setName(firstName: string, lastName: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.round(Math.random())) {
          this.user.firstName = firstName;
          this.user.lastName = lastName;
          this.user.username = firstName + '.' + lastName
          resolve(this.user);
        } else {
          reject({ error: 'Invalid name' });
        }
      }, Math.random() * 5000);
    });
  }

  setUserEmailName(firstName: string, lastName: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.round(Math.random())) {
          this.user.email = this.emailLint(firstName, lastName);
          resolve(this.user.email);
        } else {
          reject({ error: 'Error on email generation' });
        }
      }, Math.random() * 5000);
    });
  }

  
  emailLint(firstName, lastName) {
    return firstName.trim().replace(/ /g, "") + '.' + lastName.trim().replace(/ /g, "") + '@blueface.com'
  }

}