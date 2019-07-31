import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // External routing
  {
    path: 'autenticacao',
    loadChildren: () => import('./external/external.module').then(mod => mod.ExternalModule)
  },
  // Internal routing
  {
    path: '',
    loadChildren: () => import('./internal/internal.module').then(mod => mod.InternalModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
