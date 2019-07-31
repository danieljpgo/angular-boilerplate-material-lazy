import { NgModule } from '@angular/core';
import { ExternalRoutingModule } from './external-routing.module';

// Containers
import { PageExternalComponent } from './page-external.component';

@NgModule({
  declarations: [
    PageExternalComponent
  ],
  imports: [
    ExternalRoutingModule
  ]
})
export class ExternalModule { }
