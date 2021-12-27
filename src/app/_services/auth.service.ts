import { Injectable } from '@angular/core';
import { IUser } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentuser: IUser;

  loginUser(userName: string, password: string) {
    this.currentuser = {
      id: 1,
      userName: userName,
      firstName: 'Nitin',
      lastName: 'Jaswal '
    }
  }

  isAuthenticated(){
    return !!this.currentuser;
  }
  constructor() { }
}
