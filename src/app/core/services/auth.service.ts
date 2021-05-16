import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { User } from 'src//app/_models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // <User>
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private _http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }
  userValue(): Observable<any> {
    return this.userSubject.asObservable();
  }
  Login(body) {
    // return this._http.post(`${environment.apiUrl}login`, body)
    return this._http.post<User>(`${environment.apiUrl}login`, body)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user
      }))

  }
  logout() {
    // remove user from local storage to log user out
    // localStorage.setItem('user', null);
    this.userSubject.next(null);
    // this.router.navigate(['/login']);
  }


  AdminRgister(body) {
    return this._http.post(`${environment.apiUrl}admin/signupadmin`, body)
  }
  UserRgister(body) {
    return this._http.post(`${environment.apiUrl}admin/signupuser`, body)
  }

}
