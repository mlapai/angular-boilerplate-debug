import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';
import { Router } from '@angular/router';
import { SiteRoutes } from '../../../constants/site-routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.scss' ]
})
export class HomeComponent {
  title = 'Home';
  /**
   * Holds current active user
   * @type User
   */
  public currentUser: User;

  constructor(
    private _userService: UserService,
    private _authService: AuthService,
    private _router: Router
  ) {
    this._userService.activeUser.subscribe((user) => {
      this.currentUser = user;
    });

    if (this._authService.getToken()) {
      this._userService.me().subscribe(() => {});
    }
  }

  /**
   * Navigates user to the login page
   * @returns void
   */
  goToLogin(): void {
    this._router.navigate([SiteRoutes.LOGIN]);
  }
}
