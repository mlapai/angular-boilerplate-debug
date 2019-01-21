import { NgModule } from '@angular/core';
import { DebugTestComponent } from './debug-test.component';
import { CommonModule } from '@angular/common';
import { DebugTestRoutingModule } from './router/debug-test-routing.module';

@NgModule({
    declarations: [
        DebugTestComponent
    ],
    imports: [
        CommonModule,
        DebugTestRoutingModule
    ]
})

export class DebugTestModule {}
