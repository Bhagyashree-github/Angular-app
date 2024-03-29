import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './authentication/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const idToken =this.auth.getToken();
    if (idToken) {
        // console.log(idToken)
        const cloned = request.clone({
            headers: request.headers.set('Authorization','Bearer '+ idToken)
        });
        // console.log(cloned)

        return next.handle(cloned);
    }
    return next.handle(request);
  }
}
