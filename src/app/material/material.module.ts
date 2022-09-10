import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// FIXME: INSTALANDO ANGULAR MATERIAL
// TODO: Modulo (API) , Button de Angular Material
import { MatButtonModule } from '@angular/material/button';
// FIXME: CREANDO EL HEADER
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
// FIXME: ESTILOS A PRODUCT-CARD
import { MatCardModule } from '@angular/material/card';
// FIXME: CREANDO VISTAS CON ANGULAR SHEMATIC
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
// FIXME: INTRODUCCION AL FORMCONTROL
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatFormFieldModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
