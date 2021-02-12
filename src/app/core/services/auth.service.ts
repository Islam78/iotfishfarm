import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { User } from 'src/app/models/user'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*"
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }
  Login(body) {
    return this._http.post(`${environment.apiUrl}login`, body)
  }
  // https://iotfishfarm.herokuapp.com/admin/signupadmin

  AdminRgister(body) {
    return this._http.post(`${environment.apiUrl}admin/signupadmin`, body)
  }
  UserRgister(body) {
    return this._http.post(`${environment.apiUrl}admin/signupuser`, body)
  }
}


// IsuserLogedIn(){
//   return this.userLoggendIn;
// }
// LogedIn(){
//   this.userLoggendIn = true
// }
// LogedOut(){
//   this.userLoggendIn = false
// }
