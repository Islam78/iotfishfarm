import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  NewFarm(body){
    return  this.http.post(`${environment.apiUrl}admin/newfarm`, body)
  }
}
