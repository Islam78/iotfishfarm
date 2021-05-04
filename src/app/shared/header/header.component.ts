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

    setInterval(() => {
      let x = JSON.parse(this.shareService.UserDetail())
      this.UserDetail = JSON.parse(this.shareService.UserDetail())
      this.isAdmin = this.SharedService.UserDetail().includes('Admin_code')
      this.isUser = this.SharedService.UserDetail().includes('usercode')
      this.ToggelOption = x?.result.Farm_num
    }, 50);
    this.primengConfig.ripple
  }

  LiveToggelValue = false
  LiveToggel() {
    this.LiveToggelValue = !this.LiveToggelValue

    this.ReportToggelValue = false
  }
  ReportToggelValue = false
  ReportToggel() {
    console.log(this.ToggelOption);

        this.ReportToggelValue = !this.ReportToggelValue
        this.LiveToggelValue = false
  }
  LogOut() {
    // to close every thins in navbar
    this.display = false
    this.LiveToggelValue = false
    this.ReportToggelValue = false

    this.messageService.add({ severity: 'success', summary: 'Success', detail: `Loged Out ` })
    // this.shareService.UserDetail() = []
    // localStorage.getItem('user')
    localStorage.setItem('user', null)

    this._Router.navigate(['/'])

  }
}
