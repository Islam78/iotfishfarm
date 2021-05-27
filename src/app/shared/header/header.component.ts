import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { SharedService } from 'src/app/services/shared/shared.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src//app/_models/user';
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
    private authServices: AuthService,

  ) {

  }

  items: MenuItem[];
  display = false;

  // Change Language
  Langage: any = localStorage.getItem('Lang') ? localStorage.getItem('Lang') : localStorage.setItem('Lang', 'en')
  ChangLan(Lang) {
    localStorage.setItem('Lang', Lang)
    this.Langage = localStorage.getItem('Lang')
    this.translatr.use(this.Langage);
  }

  ToggelOption: any
  UserDetail;
  ngOnInit() {
    this.authServices.userValue().subscribe
      (user => {
        this.UserDetail = user;
        this.ToggelOption = user?.result.Farm_num
      });
    this.primengConfig.ripple
  }
  ControlToggelValue = false

  ControlToggel() {
    this.ControlToggelValue = !this.ControlToggelValue
    this.LiveToggelValue = false
    this.ReportToggelValue = false
  }
  LiveToggelValue = false
  LiveToggel() {
    this.LiveToggelValue = !this.LiveToggelValue
    this.ReportToggelValue = false
    this.ControlToggelValue = false
  }
  ReportToggelValue = false
  ReportToggel() {
    this.ReportToggelValue = !this.ReportToggelValue
    this.LiveToggelValue = false
    this.ControlToggelValue = false
  }
  LogOut() {
    // to close every thins in navbar
    this.display = false
    this.LiveToggelValue = false
    this.ReportToggelValue = false

    this.authServices.logout()
    // this.messageService.add({ severity: 'success', summary: 'Success', detail: `Loged Out ` })
    // // this.shareService.UserDetail() = []
    // // localStorage.getItem('user')
    localStorage.setItem('user', null)

    this._Router.navigate(['/auth/Login'])

  }
}
