import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoggedOutGuard } from './../../../router/guards/logged-out.guard'

export const accountRouting: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [ LoggedOutGuard ]
  },
  { path: 'register', component: RegisterComponent },
];
