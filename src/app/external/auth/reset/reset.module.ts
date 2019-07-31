import { NgModule } from '@angular/core';
import { ResetRoutingModule } from './reset-routing.module';
import { SharedModule } from '../../../shared/shared.module';

// Containers
import { ResetComponent } from './containers/reset.component';


@NgModule({
  declarations: [
    ResetComponent
  ],
  imports: [
    ResetRoutingModule,
    SharedModule
  ]
})
export class ResetModule { }
