import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CoreModulesModule } from '../../shared/core.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CoreModulesModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
