import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// FIXME: INSTALANDO ANGULAR MATERIAL
// TODO: Modulo (API) , Button de Angular Material
import { MatButtonModule } from '@angular/material/button';
// FIXME: CREANDO EL HEADER
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatBadgeModule
  ]
})
export class MaterialModule { }
