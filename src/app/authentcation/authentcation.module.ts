import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentcationRoutingModule } from './authentcation-routing.module';
import { LoginComponent } from './login/login.component';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderModule } from '../shared/header/header.module';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthentcationRoutingModule,
    TranslateModule,
    HeaderModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthentcationModule { }
