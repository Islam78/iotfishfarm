import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: any;
  readonly url: string = 'ws://iotfishfarm.herokuapp.com';
  constructor() {
    this.socket = io(this.url, { secure: true })
  }
  public con (){
    this.socket.emit('roomcode');
  }
  public dis (){
    this.socket.emit('roomcode').disconnect();
  }
  public sendMessage(User_code, num) {

    // this.socket.leave('roomcode')
    this.socket.emit('roomcode', User_code, num);//
  }
  public getMessages = () => {
    // this.socket = io(this.url)
    return Observable.create((observer) => {
      this.socket.on('data', (num, temp, ph) => {
        observer.next(num, temp, ph);
      });
    });
  }

  public getImage = () => {
    return Observable.create((observer) => {
      this.socket.on('image', (num) => {
        observer.next(num);
      });
    });
  }
}
