import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from 'src/app/user/profile/profile.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { userRoutes } from './user.route';
import { LoginComponent } from 'src/app/user/login/login.component';

@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes)
  ],
})
export class UserModule { }
