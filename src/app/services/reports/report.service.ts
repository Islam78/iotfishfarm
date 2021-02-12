import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }
  getReport(SearchCriteria) {
    return this.http.post(`${environment.apiUrl}user/reports`, SearchCriteria)
  }
}
