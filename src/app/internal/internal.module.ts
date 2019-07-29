import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalRoutingModule } from './internal-routing.module';

// Containers
import { PageComponent } from './page.component';
import {NavigationModule} from './layout/navigation/navigation.module';


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    InternalRoutingModule,
    NavigationModule
  ]
})
export class InternalModule { }
