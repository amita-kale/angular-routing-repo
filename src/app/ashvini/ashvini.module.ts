import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbcComponent } from './abc/abc.component';
import { DefComponent } from './def/def.component';
import { AshviniRoutingModule } from './ashvini-routing.module';



@NgModule({
  declarations: [AbcComponent, DefComponent],
  imports: [
    CommonModule,
    AshviniRoutingModule
  ]
})
export class AshviniModule { }
