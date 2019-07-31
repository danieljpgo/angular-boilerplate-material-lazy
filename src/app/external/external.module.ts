import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalRoutingModule } from './external-routing.module';

// Containers
import { PageExternalComponent } from './page-external.component';

@NgModule({
  declarations: [
    PageExternalComponent
  ],
  imports: [
    CommonModule,
    ExternalRoutingModule
  ]
})
export class ExternalModule { }
