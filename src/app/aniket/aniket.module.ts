import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbcComponent } from './abc/abc.component';
import { DefComponent } from './def/def.component';
import { AniketRoutingModule } from './aniket-routing.module';

@NgModule({
  declarations: [AbcComponent, DefComponent],
  imports: [
    CommonModule,
    AniketRoutingModule
  ]
})
export class AniketModule { }
