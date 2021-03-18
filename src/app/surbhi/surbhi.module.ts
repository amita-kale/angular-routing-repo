import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurbhiRoutingModule } from './surbhi-routing.module';
import { TestComponent } from './test/test.component';
import { OrangeComponent } from './orange/orange.component';
import { WatermelonComponent } from './watermelon/watermelon.component';


@NgModule({
  declarations: [TestComponent, OrangeComponent, WatermelonComponent],
  imports: [
    CommonModule,
    SurbhiRoutingModule
  ]
})
export class SurbhiModule { }
