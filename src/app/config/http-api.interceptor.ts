
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';
import { AuthQuery } from './../common-store';

@Injectable()
export class HttpApiInterceptor implements HttpInterceptor {
  /**
   * @method constructor
   * @param authService {AuthService}
   */
  constructor(
    private authQuery: AuthQuery
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
    let observable: Observable<HttpEvent<any>>;
    this.authQuery.token$.subscribe((token) => {
      let authHeaders = token
        ? {
          'Authorization': `Bearer ${token}`,
        }
        : {};

      req = req.clone({
        url: url + req.url,
        setHeaders: {
          'Content-Type' : 'application/json; charset=utf-8',
          'Accept'       : 'application/json',
          ...authHeaders
        },
      });
      observable = next.handle(req);
    });

    return observable
  }
}
