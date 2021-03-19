import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbcComponent } from './abc/abc.component';
import { DefComponent } from './def/def.component';
import { AniketRoutingModule } from './aniket-routing.module';
import { ShamComponent } from './sham/sham.component';

@NgModule({
  declarations: [AbcComponent, DefComponent, ShamComponent],
  imports: [
    CommonModule,
    AniketRoutingModule
  ]
})
export class AniketModule { }
