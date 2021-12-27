import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName
  password
  mouseoverLogin
  constructor(private authService: AuthService, private router:Router) {

  }

  ngOnInit(): void {
  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events'])
  }

  cancel(){
    this.router.navigate(['events'])
  }

}
