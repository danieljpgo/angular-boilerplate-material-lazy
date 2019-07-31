import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Containers
import { ResetComponent } from './containers/reset.component';


const routes: Routes = [
  {
    path: '',
    component: ResetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetRoutingModule { }
