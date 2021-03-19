import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbcComponent } from './abc/abc.component';
import { DefComponent } from './def/def.component';
import { AshviniRoutingModule } from './ashvini-routing.module';
import { GanshamComponent } from './gansham/gansham.component';



@NgModule({
  declarations: [AbcComponent, DefComponent, GanshamComponent],
  imports: [
    CommonModule,
    AshviniRoutingModule
  ]
})
export class AshviniModule { }
