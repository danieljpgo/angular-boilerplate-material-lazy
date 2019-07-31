import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Containers
import { PageExternalComponent } from './page-external.component';


const routes: Routes = [
  {
    path: '',
    component: PageExternalComponent,
    children: [
      {
        path: 'resetar',
        loadChildren: () => import('./auth/reset/reset.module').then(mod => mod.ResetModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./auth/login/login.module').then(mod => mod.LoginModule)
      },
      {
        path: 'esqueceu',
        loadChildren: () => import('./auth/forget/forget.module').then(mod => mod.ForgetModule)
      },
      // Default redirect inside of auth router
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      // Handle not found routes inside of auth router
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExternalRoutingModule { }
