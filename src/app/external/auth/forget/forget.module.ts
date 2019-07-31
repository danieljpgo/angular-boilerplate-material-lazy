import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetRoutingModule } from './forget-routing.module';

// Containers
import { ForgetComponent } from './containers/forget.component';

@NgModule({
  declarations: [
    ForgetComponent
  ],
  imports: [
    CommonModule,
    ForgetRoutingModule
  ]
})
export class ForgetModule { }
