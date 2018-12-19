import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService } from './../store';
import { SiteRoutes } from './../constants';

@Injectable()
export class AppErrorsHandler implements ErrorHandler {
  /**
   * @method constructor
   * @param injector {Injector}
   */
  constructor(
    private injector: Injector
  ) {}

  /**
   * Handle all errors inside application
   * @method handleError
   * @param error {Error | HttpErrorResponse}
   * @returns void
   */
  handleError(error: Error | HttpErrorResponse): void {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 403) {
        this.handleAuthError(error);
      }
    }
  }

  /**
   * Handle auth problem with request, usually 403
   * @param {HttpErrorResponse} error
   */
  handleAuthError(error: HttpErrorResponse) {
    const router: Router = this.injector.get(Router);
    const authService: AuthService = this.injector.get(AuthService);
    router.navigate([SiteRoutes.LOGIN]);
    authService.logout();
  }
}
