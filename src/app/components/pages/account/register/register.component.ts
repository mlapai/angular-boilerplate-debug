import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.scss' ]
})
export class RegisterComponent {
  title = 'Register';
  public email = '';
  public password = '';
  public username = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  /**
   * Submit form to the server
   * @method onSubmit
   * @returns void
   */
  onSubmit(): void {
    this.authService.register({
      email: this.email,
      password: this.password,
      name: this.username
    }).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
