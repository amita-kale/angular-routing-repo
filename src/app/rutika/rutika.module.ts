import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RutikaRoutingModule } from './rutika-routing.module';
import { TestComponent } from './test/test.component';
import { AppleComponent } from './apple/apple.component';
import { PineappleComponent } from './pineapple/pineapple.component';


@NgModule({
  declarations: [TestComponent, AppleComponent, PineappleComponent],
  imports: [
    CommonModule,
    RutikaRoutingModule
  ]
})
export class RutikaModule { }
