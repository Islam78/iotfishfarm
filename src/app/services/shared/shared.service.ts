import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
// import *  as  urlSetting  from 'environments/environment'
// import { ToastrService } from 'ngx-toastr';
// import { UrlSetting } from 'src/app/models/support/url-setting';
// import { Token } from 'src/app/models/token';
// import { HttpBaseService } from './httpbase.service';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private dataStore: object = {};

  constructor(private http: HttpClient,
    // private toastr: ToastrService
  ) {
    let url;
    // = (urlSetting as any).default
    // this.setDataIntoStore('urlSetting', url);
  }

  public UserDetail(): any {
    return localStorage.getItem('user')
  }

}
