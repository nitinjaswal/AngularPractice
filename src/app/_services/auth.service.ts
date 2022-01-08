import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { IUser } from '../_models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentuser: IUser;
  constructor(private httpClient: HttpClient) {}

  loginUser(userName: string, password: string) {
    let loginInfo = { username: userName, password: password };
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.httpClient
      .post('/api/login', loginInfo, options)
      .pipe(
        tap((data) => {
          this.currentuser = <IUser>data['user'];
        })
      )
      .pipe(
        catchError((err) => {
          return of(false);
        })
      );
  }

  isAuthenticated() {
    return !!this.currentuser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentuser.firstName = firstName;
    this.currentuser.lastName = lastName;

    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.httpClient.put(`/api/users/${this.currentuser.id}`,this.currentuser,options);

  }

  logout(){
    this.currentuser=undefined;
    let options= {headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.httpClient.post('/api/logout/',{}, options);
  }
  checkAuthenticationStatus() {
     this.httpClient
      .get('/api/currentIdentity')
      .pipe(
        tap((data) => {
          if (data instanceof Object) {
            this.currentuser = <IUser>data;
          }
        })
      )
      .subscribe();
  }
}
