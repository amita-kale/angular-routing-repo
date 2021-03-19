import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbcComponent } from './abc/abc.component';
import { DefComponent } from './def/def.component';
import { RamComponent } from './ram/ram.component';

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
    path: 'ram',
    component: RamComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmitaRoutingModule { }
