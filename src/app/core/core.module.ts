import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Servicios
import { ProductsService } from './services/products/products.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProductsService
  ]
})
export class CoreModule { }
