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
  // listen(eventName: string) {

  //   return new Observable((Subscriber) => {

  //     this.socket.on(eventName, (data) => {
  //       Subscriber.next(data)
  //     })

  //   })
  // }
  // emit(eventName, data) {
  //   this.socket.emit(eventName, data)

  // }
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
