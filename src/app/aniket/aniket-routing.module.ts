import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbcComponent } from './abc/abc.component';
import { DefComponent } from './def/def.component';
import { ShamComponent } from './sham/sham.component';

const routes: Routes = [
  {
    path: 'abc',
    component: AbcComponent
  },
  {
    path: 'def',
    component: DefComponent
  },
  {
    path: 'sham',
    component: ShamComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AniketRoutingModule { }
