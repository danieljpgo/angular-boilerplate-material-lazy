import { NgModule } from '@angular/core';
import { ForgetRoutingModule } from './forget-routing.module';
import { SharedModule } from '../../../shared/shared.module';

// Containers
import { ForgetComponent } from './containers/forget.component';

@NgModule({
  declarations: [
    ForgetComponent
  ],
  imports: [
    ForgetRoutingModule,
    SharedModule,
  ]
})
export class ForgetModule { }
