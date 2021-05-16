import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthService } from "../core/services/auth.service";
import { environment } from './../../environments/environment';
import { Observable } from "rxjs";


@Injectable()

export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthService) {

  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to api url
    const user = this.authenticationService.userValue,
    // isLoggedIn = user && user.token,
    isLoggedIn = user && user,
      isApiUrl = request.url.startsWith(environment.apiUrl)
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        // setHeaders: { Authorization: `Bearer ${user.token}`
        setHeaders: { Authorization: `Bearer ${user}`
      }
      })
    }
    return next.handle(request)

  }
}
