import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // Material
    MatButtonModule
  ],
  exports: [
    CommonModule,
    // Material
    MatButtonModule
  ]
})
export class SharedModule { }
