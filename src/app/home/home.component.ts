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

  UserDetail: any;
  ngOnInit(): void {
    this.authServices.userValue().subscribe
      (user => {
        if (user) this.UserDetail = user;
        // else this.UserDetail = {}
        console.log(this.UserDetail);

      });
  }


}
