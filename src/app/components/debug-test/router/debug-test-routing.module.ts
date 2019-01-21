import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DebugTestComponent } from '../debug-test.component';

const routes: Routes = [
  {
    path: '',
    component: DebugTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebugTestRoutingModule { }
