import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CLIENT_ID } from '../constants';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthStore } from './auth.store';

const ENDPOINTS = {
  LOGIN: '/login',
  REGISTER: '/register'
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * @method constructor
   * @param http {HttpClient}
   */
  constructor(
    private _http: HttpClient,
    private _authStore: AuthStore
  ) { }

  /**
   * Send HTTP Request and login user to the application
   * Save token to the localstorage
   * @method login
   * @param data {any}
   * @returns Observable<any>
   */
  login(data: any): Observable<any> {
    return this._http.post(ENDPOINTS.LOGIN, data).pipe(
      tap((data: { token: string }) => {
        this._authStore.updateRoot((state) => ({
          token: data.token,
          user: {
            email: 'jon@doe.com' // temporary
          }
        }));
      })
    );
  }

  /**
   * Register user to the application and
   * save token from response to the localstorage
   * @param data {any}
   * @returns Observable<any>
   */
  register(data: any): Observable<any> {
    return this._http.post(ENDPOINTS.REGISTER, data, {
      headers: {
        clientId: String(CLIENT_ID)
      }
    }).pipe(
      tap((data: { token: string }) => {
        this._authStore.updateRoot({
          token: data.token,
          user: {
            email: 'jon@doe.com' // temporary
          }
        });
      })
    );
  }

  /**
   * Logout user
   * Clear auth data from the localstorage
   * @method logout
   * @param data {any}
   * @returns Observable<any>
   */
  logout() {
    this._authStore.updateRoot({
      token: null,
      user: null
    })
  }
}
