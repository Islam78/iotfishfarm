import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { SocketService } from 'src/app/services/WebSocket/socket.service';
import { PrimeNGConfig } from 'primeng/api';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private authServices: AuthService,
    private socketSer: SocketService,
    private SharedService: SharedService) { }
  isUser
  isAdmin
  UserDetail;
  ngOnInit(): void {
    setInterval(() => {
      let x = JSON.parse(this.SharedService.UserDetail())
      this.UserDetail = JSON.parse(this.SharedService.UserDetail())
      this.isAdmin = this.SharedService.UserDetail().includes('Admin_code')
      this.isUser = this.SharedService.UserDetail().includes('usercode')
      // this.ToggelOption = x?.result.Farm_num
    }, 50);
    // this.primeConfig.ripple = true

  }


}
