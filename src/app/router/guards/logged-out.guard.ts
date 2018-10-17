import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SiteRoutes } from '../../constants/site-routes';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggedOutGuard implements CanActivate {
  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {}

  /**
   * Check is user logged in, if he is logged in
   * redirect him back to home
   * logged in user can't activate route protected by this guard
   * @param next {ActivatedRouteSnapshot}
   * @param state {RouterStateSnapshot}
   * @returns boolean
   */
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this._authService.isLoggedIn()) {
      this._router.navigate([SiteRoutes.HOME]);
      return false;
    }
    return true;
  }
}