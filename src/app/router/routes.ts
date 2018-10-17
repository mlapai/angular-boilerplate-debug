import { Routes } from '@angular/router';
import { HomeComponent } from '../components/pages/home/home.component';
import { accountRouting } from '../components/pages/account/account.routing';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  ...accountRouting
];
