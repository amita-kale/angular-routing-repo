import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DivyaRoutingModule } from './divya-routing.module';
import { TestComponent } from './test/test.component';
import { BananaComponent } from './banana/banana.component';
import { GrapesComponent } from './grapes/grapes.component';


@NgModule({
  declarations: [TestComponent, BananaComponent, GrapesComponent],
  imports: [
    CommonModule,
    DivyaRoutingModule
  ]
})
export class DivyaModule { }
