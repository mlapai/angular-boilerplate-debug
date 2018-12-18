import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CoreModulesModule } from '../../shared/core.module';
import {
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
} from '@angular/material';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CoreModulesModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
