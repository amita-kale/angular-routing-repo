import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'amita',
    loadChildren: () => import('./amita/amita.module').then(m => m.AmitaModule)
  },
  {
    path: 'aniket',
    loadChildren: () => import('./aniket/aniket.module').then(m => m.AniketModule)
  },
  {
    path: 'ashvini',
    loadChildren: () => import('./ashvini/ashvini.module').then(m => m.AshviniModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
