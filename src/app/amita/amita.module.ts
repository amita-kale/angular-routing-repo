import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbcComponent } from './abc/abc.component';
import { DefComponent } from './def/def.component';



@NgModule({
  declarations: [AbcComponent, DefComponent],
  imports: [
    CommonModule
  ]
})
export class AmitaModule { }
