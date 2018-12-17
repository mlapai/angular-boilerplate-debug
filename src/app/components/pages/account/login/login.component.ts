import { Component } from '@angular/core';
import { AuthService } from './../../../../store/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.scss' ]
})

export class LoginComponent {
  title = 'Login';
  public email = '';
  public password = '';

  public constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  /**
   * Submits form to the server
   * @method onSubmit
   * @returns void
   */
  onSubmit(): void {
    this._authService.login({
      email: this.email,
      password: this.password
    }).subscribe(() => {
      console.log('sssss');
      this._router.navigate(['/']);
    });
  }
}
