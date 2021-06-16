import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  // To get All Users
  GetAllUsers(URL) {
    return this.http.get(`${environment.apiUrl}get/${URL}`)
  }
  // To delete User
  DeleteUser(URL, body) {
    return this.http.post(`${environment.apiUrl}delete/${URL}`, body)
  }
  // To edit User
  EditUser(URL, body) {
    return this.http.post(`${environment.apiUrl}edit/${URL}`, body)
  }
  // To Add New Farm
  NewFarm(body) {
    return this.http.post(`${environment.apiUrl}admin/newfarm`, body)
  }


}
