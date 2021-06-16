import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  AdminSignUpForm: FormGroup
  UserSignUpForm: FormGroup
  UserType
  constructor(private translatr: TranslateService,
    private fb: FormBuilder,
    private authService: AuthService) { }
  ngOnInit() {
    this.UserType = 'Selected'
    this.InitAdminForm()
    this.InitUserForm()
  }
  InitAdminForm() {
    this.AdminSignUpForm = this.fb.group(
      {
        admincode: [''],
        name: [''],
        password: [''],
        email: [''],
        phone: ['']
      }
    )
  }
  InitUserForm() {
    this.UserSignUpForm = this.fb.group({
      usercode: [''],
      name: [''],
      password: [''],
      email: [''],
      phone: [''],
      address: [''],
    })
  }
  AdminsendData() {
    this.authService.AdminRgister(this.AdminSignUpForm.value).subscribe(res => {
      console.log(res);
      this.AdminSignUpForm.reset()
    })
  }
  UsersendData() {
    this.authService.UserRgister(this.UserSignUpForm.value).subscribe(res => {
      console.log(res);
      this.UserSignUpForm.reset()
    })
  }
  // Change Language
  Langage: any = localStorage.getItem('Lang') ? localStorage.getItem('Lang') : localStorage.setItem('Lang', 'en')
  ChangLan(Lang) {
    localStorage.setItem('Lang', Lang)
    this.Langage = localStorage.getItem('Lang')
    this.translatr.use(this.Langage);
  }

}
