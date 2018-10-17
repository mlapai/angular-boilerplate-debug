import { Component, Inject } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
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
    private authService: AuthService,
    private router: Router
  ) { }

  /**
   * Submits form to the server
   * @method onSubmit
   * @returns void
   */
  onSubmit(): void {
    this.authService.login({
      email: this.email,
      password: this.password
    }).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
