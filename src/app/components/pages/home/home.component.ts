import { Component } from '@angular/core';
import { AuthQuery } from '../../../store/auth.query';
import { User } from '../../../store/user.model';
import { Router } from '@angular/router';
import { SiteRoutes } from '../../../constants/site-routes';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/store/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.scss' ]
})
export class HomeComponent {

  /**
   * Holds current active user
   * @type User
   */
  public currentUser$: Observable<Partial<User>>;

  /**
   * Is logged in user
   * @type boolean
   */
  public isLoggedIn: boolean;

  constructor(
    private _authQuery: AuthQuery,
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.currentUser$ = this._authQuery.user$;
    this._authQuery.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  /**
   * Navigates user to the login page
   * @returns void
   */
  goToLogin(): void {
    this._router.navigate([SiteRoutes.LOGIN]);
  }

  /**
   * Logout user
   * @returns void
   */
  logout(): void {
    this._authService.logout();
  }
}
