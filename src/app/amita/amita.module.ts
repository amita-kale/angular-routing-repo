import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbcComponent } from './abc/abc.component';
import { DefComponent } from './def/def.component';
import { AmitaRoutingModule } from './amita-routing.module';



@NgModule({
  declarations: [AbcComponent, DefComponent],
  imports: [
    CommonModule,
    AmitaRoutingModule
  ]
})
export class AmitaModule { }
