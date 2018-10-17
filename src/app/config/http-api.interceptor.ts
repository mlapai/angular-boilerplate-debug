
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class HttpApiInterceptor implements HttpInterceptor {
  /**
   * @method constructor
   * @param authService {AuthService}
   */
  constructor(
    private authService: AuthService
  ) { }

  /**
   * Intercept request and attach headers to the request
   * This interceptor will atach Authorize header
   * @method intercept
   * @param req {HttpRequest}
   * @param next {HttpHandler}
   * @returns Observable<HttpEvent>
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = environment.apiUrl;
    req = req.clone({
      url: url + req.url,
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`,
      },
    });
    return next.handle(req);
  }
}
