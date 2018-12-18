import { Routes } from '@angular/router';
import { HomeComponent } from '../components/pages/home/home.component';
import { accountRouting } from '../components/pages/account/account.routing';
import { LoggedInGuard } from './guards/logged-in.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [ LoggedInGuard ]
  },
  ...accountRouting
];
