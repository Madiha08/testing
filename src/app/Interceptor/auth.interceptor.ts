import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> { 
    
    let token :any= localStorage.getItem('loginToken')
    const newCloneRequest = request.clone(
      {
        setHeaders:{
          Authorization : `Bearer${token}`,
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin':'*'
        }
      }
      )
      console.log(token)
      return next.handle(newCloneRequest)
  }
}
