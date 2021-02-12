import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { SharedService } from 'src/app/services/shared/shared.service';
import * as AOS from 'aos'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private translatr: TranslateService, private primengConfig: PrimeNGConfig,
    private SharedService: SharedService,
    private _Router: Router,
    private messageService: MessageService,
    private shareService: SharedService
  ) { }
  items: MenuItem[];
  display = false;
  // Change Language
  Langage: any = localStorage.getItem('Lang') ? localStorage.getItem('Lang') : localStorage.setItem('Lang', 'en')
  ChangLan(Lang) {
    localStorage.setItem('Lang', Lang)
    this.Langage = localStorage.getItem('Lang')
    this.translatr.use(this.Langage);
  }

  isUser
  isAdmin

  ToggelOption: any
  UserDetail;

  ngOnInit() {
    AOS.init({
      duration: 2000
    })
    let x = JSON.parse(this.shareService.UserDetail())
    setInterval(() => {

      // this.UserDetail = JSON.parse(localStorage.getItem('user'))
      this.isAdmin = this.SharedService.UserDetail().includes('Admin_code')
      this.isUser = this.SharedService.UserDetail().includes('usercode')
      this.ToggelOption = x?.result.Farm_num
      // (this.shareService.UserDetail().result.Farm_num as Array<any>).length > ? this.ToggelOption = JSON.parse(this.shareService.UserDetail())?.result.Farm_num : this.ToggelOption = [{Farm_num:{ Farm_num: "Call Admin To Add" }}]
      // console.log(this.ToggelOption);

    }, 500);
    this.primengConfig.ripple
  }

  LiveToggelValue = false
  LiveToggel() {
    AOS.init({
      duration: 1000
    })
    this.LiveToggelValue = !this.LiveToggelValue
  }
  ReportToggelValue = false
  ReportToggel() {
    AOS.init({
      duration: 1000
    })
    this.ReportToggelValue = !this.ReportToggelValue
  }
  LogOut() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: `Loged Out ` })
    localStorage.setItem('user', '')
    this._Router.navigate(['/'])

  }
}
