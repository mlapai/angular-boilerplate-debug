import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CLIENT_ID } from '../constants';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const ENDPOINTS = {
  LOGIN: '/auth/login',
  REGISTER: '/users/create'
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
    private http: HttpClient
  ) { }

  /**
   * Checks is user logged in
   * @returns boolean
   */
  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  /**
   * Get token from localstorage
   * @method getToken
   * @returns string
   */
  getToken(): string {
    return localStorage.getItem('token');
  }

  /**
   * Removes all data for user from client side
   * localstorage and other things if needed
   * @method removeAuthUser
   * @returns void
   */
  removeAuthUser(): void {
    localStorage.removeItem('token');
  }

  /**
   * Send HTTP Request and login user to the application
   * Save token to the localstorage
   * @method login
   * @param data {any}
   * @returns Observable<any>
   */
  login(data: any): Observable<any> {
    return this.http.post(ENDPOINTS.LOGIN, data, {
      headers: {
        clientId: String(CLIENT_ID)
      }
    }).pipe(
      tap((response: any) => localStorage.setItem('token', response.access_token))
    );
  }

  /**
   * Register user to the application and
   * save token from response to the localstorage
   * @param data {any}
   * @returns Observable<any>
   */
  register(data: any): Observable<any> {
    return this.http.post(ENDPOINTS.REGISTER, data, {
      headers: {
        clientId: String(CLIENT_ID)
      }
    }).pipe(
      tap((response: any) => localStorage.setItem('token', response.access_token))
    );
  }
}
