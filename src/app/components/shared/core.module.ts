import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    TranslateModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    TranslateModule,
    FormsModule,
    CommonModule
  ]
})
export class CoreModulesModule {}
