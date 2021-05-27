import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  GetAllUsers(URL) {
    return this.http.get(`${environment.apiUrl}get/${URL}`)
  }
  DeleteUser(URL, body) {
    return this.http.post(`${environment.apiUrl}delete/${URL}`, body)
  }
  EditUser(URL, body) {
    return this.http.post(`${environment.apiUrl}edit/${URL}`, body)
  }
  NewFarm(body) {
    return this.http.post(`${environment.apiUrl}admin/newfarm`, body)
  }


}
