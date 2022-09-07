import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// FIXME: INSTALANDO ANGULAR MATERIAL
// TODO: Modulo (API) , Button de Angular Material
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    MatButtonModule
  ]
})
export class MaterialModule { }
