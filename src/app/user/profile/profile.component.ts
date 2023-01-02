import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: UntypedFormGroup;
  private firstName: UntypedFormControl;
  private lastName: UntypedFormControl;

  constructor(private authService: AuthService, private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.firstName = new UntypedFormControl
      (this.authService.currentuser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
    this.lastName = new UntypedFormControl(this.authService.currentuser.lastName,
      Validators.required)

    this.profileForm = new UntypedFormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }


  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
      .subscribe(()=>{
        this.toastr.success('Profile saved');
      })
    }
  }

  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['/user/login']);
    })
  }

  cancel() {
    this.router.navigate(['events'])
  }

  validateFirstName() {
    console.log(this.firstName);
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

}
