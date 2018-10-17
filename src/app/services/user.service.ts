import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

const ENDPOINTS = {
  USER_SHOW: '/users/show'
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /**
   * Logged in user in application
   * @type BehaviorSubject<User>
   */
  activeUser: BehaviorSubject<User> = new BehaviorSubject(null);

  /**
   * @method constructor
   * @param http {Httpclient}
   */
  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get user from the server
   * @method me
   * @returns Observable<User>
   */
  me(): Observable<User> {
    return this.http.get<User>(ENDPOINTS.USER_SHOW)
      .pipe(
        tap((user) => this.activeUser.next(user))
      );
  }
}
