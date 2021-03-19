import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbcComponent } from './abc/abc.component';
import { DefComponent } from './def/def.component';
import { AmitaRoutingModule } from './amita-routing.module';
import { RamComponent } from './ram/ram.component';



@NgModule({
  declarations: [AbcComponent, DefComponent, RamComponent],
  imports: [
    CommonModule,
    AmitaRoutingModule
  ]
})
export class AmitaModule { }
