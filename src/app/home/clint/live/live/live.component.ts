import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from 'src/app/services/shared/shared.service';
import { SocketService } from 'src/app/services/WebSocket/socket.service';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit {

  constructor(
    private translatr: TranslateService,
    private socketSer: SocketService,
    private ActiveRoute: ActivatedRoute,
    private shareService: SharedService
  ) { }

  LivePh: number = 0;
  LiveTemp: number = 0;
  Img
  Farm_name
  UserDetail: any
  subscrip: Subscription

  ngOnInit(): void {
    this.subscrip = new Subscription
    this.UserDetail = JSON.parse(this.shareService.UserDetail()).result
    this.ActiveRoute.params.subscribe(res => this.Farm_name = res.id)
    this.LiveDate()
  }

  LiveDate() {
    this.subscrip.add(this.socketSer.sendMessage(this.UserDetail?.usercode, this.Farm_name))
    this.subscrip.add(this.socketSer.getMessages()
      .subscribe((num) => {
        this.LivePh = num.ph
        this.LiveTemp = num.tempc
      }))
    this.subscrip.add(this.socketSer.getImage().subscribe(img => {
      this.Img = img
      console.log(img);
    }))
  }

  ngOnDestroy(): void {
    this.subscrip.unsubscribe()
    this.socketSer.dis()
  }
  // Change Language
  Langage: any = localStorage.getItem('Lang') ? localStorage.getItem('Lang') : localStorage.setItem('Lang', 'en')
  ChangLan(Lang) {
    localStorage.setItem('Lang', Lang)
    this.Langage = localStorage.getItem('Lang')
    this.translatr.use(this.Langage);
  }
}
