import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Containers
import { ForgetComponent } from './containers/forget.component';


const routes: Routes = [
  {
    path: '',
    component: ForgetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgetRoutingModule { }
