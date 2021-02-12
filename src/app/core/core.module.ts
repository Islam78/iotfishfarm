import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './interceptors/header.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  providers:[
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true
    }
  ]
})
export class CoreModule { }