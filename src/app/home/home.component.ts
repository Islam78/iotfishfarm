import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { SocketService } from 'src/app/services/WebSocket/socket.service';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private authServices: AuthService,
    private socketSer: SocketService,
    private primeConfig: PrimeNGConfig
  ) { }


  ngOnInit(): void {
    this.primeConfig.ripple = true
    // debugger
    // this.socketSer.sendMessage()
    // this.socketSer.getMessages()
    //   .subscribe((message: string, Ph: string) => {
    //     console.log(message, Ph);
    //     // this.messageList.push(message);
    //   });
  }
  Login() {
    this.router.navigate(['/auth']);
    // this.authServices.LogedIn();
  }
  SignUp() {
    this.router.navigate(['/auth/SignUp']);
    // this.authServices.LogedIn();
  }

}
